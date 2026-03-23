import { useEffect, useRef, useState } from 'react';
import type {
  InteractiveMode,
  RichContentContext,
} from '../../types';
import {
  resolveRichContentText,
  revokeObjectUrls,
} from '../../services/richContentService';
import { InteractiveEmbed } from './InteractiveEmbed';
import { StaticRichText } from './StaticRichText';

interface RichContentRendererProps {
  markdown: string;
  lessonKey: string;
  context: RichContentContext;
  interactionMode: InteractiveMode;
  basePath?: string;
  className?: string;
}

export function RichContentRenderer({
  markdown,
  lessonKey,
  context,
  interactionMode,
  basePath = 'content.md',
  className,
}: RichContentRendererProps) {
  const requestKey = `${lessonKey}:${basePath}:${markdown}`;
  const [state, setState] = useState({
    requestKey,
    resolvedMarkdown: markdown,
  });
  const objectUrlsRef = useRef<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    revokeObjectUrls(objectUrlsRef.current);
    objectUrlsRef.current = [];

    void resolveRichContentText(lessonKey, markdown, basePath)
      .then((resolvedContent) => {
        if (cancelled) {
          revokeObjectUrls(resolvedContent.objectUrls);
          return;
        }

        objectUrlsRef.current = resolvedContent.objectUrls;
        setState({
          requestKey,
          resolvedMarkdown: resolvedContent.content,
        });
      })
      .catch(() => {
        if (cancelled) {
          return;
        }

        setState({
          requestKey,
          resolvedMarkdown: markdown,
        });
      });

    return () => {
      cancelled = true;
      revokeObjectUrls(objectUrlsRef.current);
      objectUrlsRef.current = [];
    };
  }, [basePath, lessonKey, markdown, requestKey]);

  const renderedMarkdown = state.requestKey === requestKey ? state.resolvedMarkdown : markdown;

  return (
    <StaticRichText
      markdown={renderedMarkdown}
      lessonKey={lessonKey}
      context={context}
      interactionMode={interactionMode}
      basePath={basePath}
      className={className}
      interactiveRenderer={(rawConfig) => (
        <InteractiveEmbed
          rawConfig={rawConfig}
          lessonKey={lessonKey}
          context={context}
          interactionMode={interactionMode}
          basePath={basePath}
        />
      )}
    />
  );
}
