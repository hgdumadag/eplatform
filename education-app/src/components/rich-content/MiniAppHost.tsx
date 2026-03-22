import { useEffect, useRef, useState } from 'react';
import { loadMiniAppSource, revokeObjectUrls } from '../../services/richContentService';

interface MiniAppHostProps {
  lessonKey: string;
  specPath: string;
  htmlPath: string;
  title: string;
  height?: number;
}

const MIN_HEIGHT = 240;
const MAX_HEIGHT = 920;

function clampHeight(value: number | undefined, fallback: number): number {
  if (!value || Number.isNaN(value)) {
    return fallback;
  }

  return Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Math.round(value)));
}

export function MiniAppHost({
  lessonKey,
  specPath,
  htmlPath,
  title,
  height = 420,
}: MiniAppHostProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const objectUrlsRef = useRef<string[]>([]);
  const requestKey = `${lessonKey}:${specPath}:${htmlPath}:${height}`;
  const [frameState, setFrameState] = useState<{
    requestKey: string;
    src?: string;
    srcDoc?: string;
    frameHeight: number;
    ready: boolean;
    lastCheckpoint: string;
    hintRequested: boolean;
    loading: boolean;
    error: string | null;
  }>({
    requestKey,
    frameHeight: clampHeight(height, 420),
    ready: false,
    lastCheckpoint: '',
    hintRequested: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    revokeObjectUrls(objectUrlsRef.current);
    objectUrlsRef.current = [];

    void loadMiniAppSource(lessonKey, htmlPath, specPath)
      .then((source) => {
        if (cancelled) {
          revokeObjectUrls(source.objectUrls);
          return;
        }

        objectUrlsRef.current = source.objectUrls;
        setFrameState({
          requestKey,
          src: source.src,
          srcDoc: source.srcDoc,
          frameHeight: clampHeight(height, 420),
          ready: false,
          lastCheckpoint: '',
          hintRequested: false,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }

        setFrameState({
          requestKey,
          frameHeight: clampHeight(height, 420),
          ready: false,
          lastCheckpoint: '',
          hintRequested: false,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to load mini-app.',
        });
      });

    return () => {
      cancelled = true;
      revokeObjectUrls(objectUrlsRef.current);
      objectUrlsRef.current = [];
    };
  }, [height, htmlPath, lessonKey, requestKey, specPath]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!iframeRef.current || event.source !== iframeRef.current.contentWindow) {
        return;
      }

      if (!event.data || typeof event.data !== 'object') {
        return;
      }

      const payload = event.data as {
        type?: string;
        height?: number;
        checkpointId?: string;
      };

      switch (payload.type) {
        case 'resize':
          setFrameState((current) => (
            current.requestKey === requestKey
              ? {
                  ...current,
                  frameHeight: clampHeight(payload.height, current.frameHeight),
                }
              : current
          ));
          break;
        case 'ready':
          setFrameState((current) => (
            current.requestKey === requestKey
              ? {
                  ...current,
                  ready: true,
                }
              : current
          ));
          break;
        case 'checkpoint':
          setFrameState((current) => (
            current.requestKey === requestKey
              ? {
                  ...current,
                  lastCheckpoint: payload.checkpointId || 'checkpoint reached',
                }
              : current
          ));
          break;
        case 'requestHint':
          setFrameState((current) => (
            current.requestKey === requestKey
              ? {
                  ...current,
                  hintRequested: true,
                }
              : current
          ));
          break;
        default:
          break;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [requestKey]);

  const activeFrameState = frameState.requestKey === requestKey
    ? frameState
    : {
        requestKey,
        frameHeight: clampHeight(height, 420),
        ready: false,
        lastCheckpoint: '',
        hintRequested: false,
        loading: true,
        error: null,
      };

  if (activeFrameState.loading) {
    return <div className="interactive-loading">Loading mini-app...</div>;
  }

  if (activeFrameState.error) {
    return <div className="interactive-error">{activeFrameState.error}</div>;
  }

  return (
    <div>
      <div className="miniapp-status" aria-live="polite">
        <span className="miniapp-status-chip">
          {activeFrameState.ready ? 'Ready' : 'Starting'}
        </span>
        {activeFrameState.lastCheckpoint && (
          <span className="miniapp-status-chip">Checkpoint: {activeFrameState.lastCheckpoint}</span>
        )}
        {activeFrameState.hintRequested && (
          <span className="miniapp-status-chip">Hint requested</span>
        )}
      </div>
      <iframe
        ref={iframeRef}
        className="miniapp-frame"
        title={title}
        src={activeFrameState.src}
        srcDoc={activeFrameState.srcDoc}
        sandbox="allow-scripts"
        loading="lazy"
        style={{ height: `${activeFrameState.frameHeight}px` }}
      />
    </div>
  );
}
