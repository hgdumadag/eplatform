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

const CALLOUT_META = {
  note: { label: 'Note', title: 'Note' },
  tip: { label: 'Remember', title: 'Key Reminder' },
  important: { label: 'Important', title: 'Important' },
  warning: { label: 'Watch Out', title: 'Common Trap' },
  goal: { label: 'Goal', title: 'Weekly Goal' },
  target: { label: 'Target', title: 'Session Target' },
  example: { label: 'Example', title: 'Worked Example' },
  check: { label: 'Check', title: 'Checkpoint' },
  practice: { label: 'Exam Plan', title: 'How to Use the Exams' },
} as const;

type CalloutType = keyof typeof CALLOUT_META;

function isCalloutType(value: string): value is CalloutType {
  return value in CALLOUT_META;
}

function getTextContent(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => getTextContent(child)).join('');
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getTextContent(node.props.children);
  }

  return '';
}

function extractCallout(children: ReactNode): {
  type: CalloutType;
  label: string;
  title: string;
  body: ReactNode[];
} | null {
  const childArray = Children.toArray(children);
  if (childArray.length === 0) {
    return null;
  }

  const firstChild = childArray[0];
  if (!isValidElement<{ children?: ReactNode }>(firstChild)) {
    return null;
  }

  const markerText = getTextContent(firstChild.props.children).trim();
  const match = markerText.match(/^\[!([A-Z-]+)\]\s*(.*)$/i);
  if (!match) {
    return null;
  }

  const rawType = match[1].toLowerCase();
  const type: CalloutType = isCalloutType(rawType) ? rawType : 'note';
  const meta = CALLOUT_META[type];

  return {
    type,
    label: meta.label,
    title: match[2].trim() || meta.title,
    body: childArray.slice(1),
  };
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
          blockquote: ({ children, ...props }) => {
            const callout = extractCallout(children);

            if (!callout) {
              return <blockquote {...props}>{children}</blockquote>;
            }

            return (
              <div className={`rich-callout rich-callout-${callout.type}`} role="note">
                <div className="rich-callout-header">
                  <span className="rich-callout-label">{callout.label}</span>
                  <div className="rich-callout-title">{callout.title}</div>
                </div>
                {callout.body.length > 0 && (
                  <div className="rich-callout-body">{callout.body}</div>
                )}
              </div>
            );
          },
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
