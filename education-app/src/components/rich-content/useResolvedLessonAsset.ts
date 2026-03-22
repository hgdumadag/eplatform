import { useEffect, useRef, useState } from 'react';
import {
  resolveLessonAssetUrl,
  revokeObjectUrls,
} from '../../services/richContentService';

interface ResolvedLessonAssetState {
  requestKey: string;
  url: string | null;
  resolvedPath: string | null;
  loading: boolean;
  error: string | null;
}

export function useResolvedLessonAsset(
  lessonKey: string,
  assetPath?: string,
  basePath = 'content.md',
): ResolvedLessonAssetState {
  const requestKey = assetPath ? `${basePath}:${assetPath}` : '';
  const [state, setState] = useState<ResolvedLessonAssetState>({
    requestKey,
    url: assetPath || null,
    resolvedPath: assetPath || null,
    loading: Boolean(assetPath),
    error: null,
  });
  const objectUrlsRef = useRef<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    revokeObjectUrls(objectUrlsRef.current);
    objectUrlsRef.current = [];

    if (!assetPath) {
      return undefined;
    }

    void resolveLessonAssetUrl(lessonKey, assetPath, basePath)
      .then((resolvedAsset) => {
        if (cancelled) {
          revokeObjectUrls(resolvedAsset.objectUrls);
          return;
        }

        objectUrlsRef.current = resolvedAsset.objectUrls;
        setState({
          requestKey,
          url: resolvedAsset.url,
          resolvedPath: resolvedAsset.resolvedPath,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }

        setState({
          requestKey,
          url: null,
          resolvedPath: null,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to load asset.',
        });
      });

    return () => {
      cancelled = true;
      revokeObjectUrls(objectUrlsRef.current);
      objectUrlsRef.current = [];
    };
  }, [assetPath, basePath, lessonKey, requestKey]);

  if (!assetPath) {
    return {
      requestKey: '',
      url: null,
      resolvedPath: null,
      loading: false,
      error: null,
    };
  }

  if (state.requestKey !== requestKey) {
    return {
      requestKey,
      url: null,
      resolvedPath: null,
      loading: true,
      error: null,
    };
  }

  return state;
}
