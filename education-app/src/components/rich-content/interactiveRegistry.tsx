import type { ComponentType } from 'react';
import type { InteractiveWidgetComponentProps } from './interactiveDefinitions';
import {
  HotspotDiagramWidget,
  MatchSortWidget,
  NumberLineWidget,
  SandboxHostWidget,
  SliderGraphWidget,
  StepRevealWidget,
  TableExplorerWidget,
} from './InteractiveWidgets';

export interface InteractiveRegistryEntry {
  component: ComponentType<InteractiveWidgetComponentProps>;
  supportsReadonly: boolean;
}

export const interactiveRegistry: Record<string, InteractiveRegistryEntry> = {
  'step-reveal': {
    component: StepRevealWidget,
    supportsReadonly: true,
  },
  'slider-graph': {
    component: SliderGraphWidget,
    supportsReadonly: true,
  },
  'number-line': {
    component: NumberLineWidget,
    supportsReadonly: true,
  },
  'hotspot-diagram': {
    component: HotspotDiagramWidget,
    supportsReadonly: true,
  },
  'match-sort': {
    component: MatchSortWidget,
    supportsReadonly: true,
  },
  'table-explorer': {
    component: TableExplorerWidget,
    supportsReadonly: true,
  },
  'sandbox-host': {
    component: SandboxHostWidget,
    supportsReadonly: false,
  },
};
