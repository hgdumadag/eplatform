import { Children, isValidElement } from 'react';
import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import 'katex/dist/katex.min.css';
import type { InteractiveMode, RichContentContext } from '../../types';
import './RichContentRenderer.css';

interface StaticRichTextProps {
  markdown: string;
  lessonKey: string;
  context: RichContentContext;
  interactionMode: InteractiveMode;
  basePath?: string;
  className?: string;
  interactiveRenderer?: (rawConfig: string) => ReactNode;
}

function extractInteractiveCode(children: ReactNode): string | null {
  const childArray = Children.toArray(children);
  if (childArray.length !== 1) {
    return null;
  }

  const onlyChild = childArray[0];
  if (!isValidElement<{ className?: string; children?: ReactNode }>(onlyChild)) {
    return null;
  }

  const className = onlyChild.props.className || '';
  if (!className.includes('language-interactive')) {
    return null;
  }

  const codeChildren = Children.toArray(onlyChild.props.children).join('');
  return codeChildren.trim();
}

export function StaticRichText({
  markdown,
  className,
  interactiveRenderer,
}: StaticRichTextProps) {
  return (
    <div className={className ? `rich-content ${className}` : 'rich-content'}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeKatex]}
        components={{
          a: ({ href, children, ...props }) => (
            <a
              href={href}
              target={href?.startsWith('#') ? undefined : '_blank'}
              rel={href?.startsWith('#') ? undefined : 'noreferrer'}
              {...props}
            >
              {children}
            </a>
          ),
          img: ({ src, alt, ...props }) => (
            <img
              src={src}
              alt={alt || ''}
              loading="lazy"
              {...props}
            />
          ),
          pre: ({ children, ...props }) => {
            if (interactiveRenderer) {
              const rawConfig = extractInteractiveCode(children);
              if (rawConfig) {
                return <div className="interactive-embed">{interactiveRenderer(rawConfig)}</div>;
              }
            }

            return <pre {...props}>{children}</pre>;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
