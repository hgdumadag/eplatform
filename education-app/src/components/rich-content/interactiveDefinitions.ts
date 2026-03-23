import type {
  InteractiveMode,
  InteractiveSpec,
  RichContentContext,
} from '../../types';

export const SUPPORTED_INTERACTIVE_WIDGETS = [
  'step-reveal',
  'slider-graph',
  'number-line',
  'hotspot-diagram',
  'match-sort',
  'table-explorer',
  'sandbox-host',
] as const;

export type SupportedInteractiveWidget = (typeof SUPPORTED_INTERACTIVE_WIDGETS)[number];

export interface InteractiveWidgetComponentProps {
  spec: InteractiveSpec;
  lessonKey: string;
  specPath: string;
  context: RichContentContext;
  mode: InteractiveMode;
  height?: number;
  title?: string;
}

export function isSupportedInteractiveWidget(value: unknown): value is SupportedInteractiveWidget {
  return typeof value === 'string' && SUPPORTED_INTERACTIVE_WIDGETS.includes(value as SupportedInteractiveWidget);
}
