import { useEffect, useState } from 'react';
import type {
  InteractiveMode,
  RichContentContext,
  InteractiveSpec,
} from '../../types';
import {
  loadInteractiveSpecFile,
  parseInteractiveEmbedConfig,
  resolveInteractionMode,
} from '../../services/richContentService';
import { isSupportedInteractiveWidget } from './interactiveDefinitions';
import { interactiveRegistry } from './interactiveRegistry';
import { StaticRichText } from './StaticRichText';
import { useResolvedLessonAsset } from './useResolvedLessonAsset';

interface InteractiveEmbedProps {
  rawConfig: string;
  lessonKey: string;
  context: RichContentContext;
  interactionMode: InteractiveMode;
  basePath?: string;
}

function InteractiveFallback({
  spec,
  lessonKey,
  context,
  basePath,
}: {
  spec: InteractiveSpec;
  lessonKey: string;
  context: RichContentContext;
  basePath: string;
}) {
  const imagePath = spec.fallback?.image;
  const { url } = useResolvedLessonAsset(lessonKey, imagePath, basePath);

  return (
    <div className="interactive-card">
      <div className="interactive-card-header">
        <h3 className="interactive-card-title">
          <span>{spec.title}</span>
          <span className="interactive-card-badge">fallback</span>
        </h3>
      </div>
      <div className="interactive-card-body">
        {url ? <img className="interactive-fallback-image" src={url} alt={spec.title} /> : null}
        <StaticRichText
          markdown={spec.fallback.markdown}
          lessonKey={lessonKey}
          context={context}
          interactionMode="fallback"
          basePath={basePath}
        />
      </div>
    </div>
  );
}

export function InteractiveEmbed({
  rawConfig,
  lessonKey,
  context,
  interactionMode,
  basePath = 'content.md',
}: InteractiveEmbedProps) {
  const requestKey = `${lessonKey}:${basePath}:${interactionMode}:${rawConfig}`;
  const [state, setState] = useState<{
    requestKey: string;
    loading: boolean;
    error: string | null;
    spec: InteractiveSpec | null;
    specPath: string;
    embedTitle?: string;
    embedHeight?: number;
    effectiveMode: InteractiveMode;
  }>({
    requestKey,
    loading: true,
    error: null,
    spec: null,
    specPath: basePath,
    effectiveMode: interactionMode,
  });

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const embedConfig = parseInteractiveEmbedConfig(rawConfig);
        const loadedSpec = await loadInteractiveSpecFile(lessonKey, embedConfig.spec, basePath);
        const effectiveMode = resolveInteractionMode(interactionMode, embedConfig.mode);

        if (cancelled) {
          return;
        }

        setState({
          requestKey,
          loading: false,
          error: null,
          spec: loadedSpec.spec,
          specPath: loadedSpec.resolvedPath,
          embedTitle: embedConfig.title,
          embedHeight: embedConfig.height,
          effectiveMode,
        });
      } catch (error) {
        if (cancelled) {
          return;
        }

        setState({
          requestKey,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to load interactive block.',
          spec: null,
          specPath: basePath,
          effectiveMode: interactionMode,
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [basePath, interactionMode, lessonKey, rawConfig, requestKey]);

  const activeState = state.requestKey === requestKey
    ? state
    : {
        requestKey,
        loading: true,
        error: null,
        spec: null,
        specPath: basePath,
        effectiveMode: interactionMode,
      };

  if (activeState.loading) {
    return <div className="interactive-loading">Loading interactive explanation...</div>;
  }

  if (activeState.error || !activeState.spec) {
    return <div className="interactive-error">{activeState.error || 'Interactive content is unavailable.'}</div>;
  }

  const spec = activeState.spec;

  if (!isSupportedInteractiveWidget(spec.widget)) {
    return (
      <InteractiveFallback
        spec={spec}
        lessonKey={lessonKey}
        context={context}
        basePath={activeState.specPath}
      />
    );
  }

  const registryEntry = interactiveRegistry[spec.widget];
  const shouldUseFallback =
    activeState.effectiveMode === 'fallback' ||
    (activeState.effectiveMode === 'readonly' && !registryEntry.supportsReadonly);

  if (shouldUseFallback) {
    return (
      <InteractiveFallback
        spec={spec}
        lessonKey={lessonKey}
        context={context}
        basePath={activeState.specPath}
      />
    );
  }

  const Widget = registryEntry.component;

  return (
    <Widget
      spec={spec}
      lessonKey={lessonKey}
      specPath={activeState.specPath}
      context={context}
      mode={activeState.effectiveMode}
      title={activeState.embedTitle}
      height={activeState.embedHeight}
    />
  );
}
