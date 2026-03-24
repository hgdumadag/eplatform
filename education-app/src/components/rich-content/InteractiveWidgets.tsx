import { useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { InteractiveWidgetComponentProps } from './interactiveDefinitions';
import { MiniAppHost } from './MiniAppHost';
import { StaticRichText } from './StaticRichText';
import { useResolvedLessonAsset } from './useResolvedLessonAsset';

function asRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return value as Record<string, unknown>;
}

function getString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

function getNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && !Number.isNaN(value) ? value : fallback;
}

function getBoolean(value: unknown, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
}

function getStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function InteractiveCard({
  title,
  runtime,
  prompt,
  children,
  footer,
  lessonKey,
  specPath,
  context,
  mode,
}: {
  title: string;
  runtime: string;
  prompt?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  lessonKey: string;
  specPath: string;
  context: InteractiveWidgetComponentProps['context'];
  mode: InteractiveWidgetComponentProps['mode'];
}) {
  return (
    <div className="interactive-card">
      <div className="interactive-card-header">
        <h3 className="interactive-card-title">
          <span>{title}</span>
          <span className="interactive-card-badge">{runtime}</span>
        </h3>
      </div>
      <div className="interactive-card-body">
        {prompt && (
          <StaticRichText
            markdown={prompt}
            lessonKey={lessonKey}
            context={context}
            interactionMode={mode}
            basePath={specPath}
            className="interactive-card-prompt"
          />
        )}
        {children}
      </div>
      {footer ? <div className="interactive-card-footer">{footer}</div> : null}
    </div>
  );
}

export function StepRevealWidget({
  spec,
  lessonKey,
  specPath,
  context,
  mode,
  title,
}: InteractiveWidgetComponentProps) {
  const props = asRecord(spec.props);
  const steps = Array.isArray(props.steps) ? props.steps.map(asRecord) : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const readonly = mode === 'readonly';

  return (
    <InteractiveCard
      title={title || spec.title}
      runtime={readonly ? 'readonly' : 'native'}
      prompt={spec.prompt}
      lessonKey={lessonKey}
      specPath={specPath}
      context={context}
      mode={mode}
      footer={readonly ? 'Assessment mode shows the steps without progressive reveal.' : 'Use the buttons to unpack the explanation one piece at a time.'}
    >
      {steps.length === 0 ? (
        <div className="interactive-empty">No steps have been configured for this explanation.</div>
      ) : (
        <>
          {!readonly && (
            <div className="interactive-controls">
              <button
                type="button"
                className="interactive-button-secondary"
                onClick={() => setActiveIndex((current) => Math.max(0, current - 1))}
                disabled={activeIndex === 0}
              >
                Previous step
              </button>
              <button
                type="button"
                className="interactive-button"
                onClick={() => setActiveIndex((current) => Math.min(steps.length - 1, current + 1))}
                disabled={activeIndex === steps.length - 1}
              >
                Next step
              </button>
              <span className="interactive-state-note">
                Step {activeIndex + 1} of {steps.length}
              </span>
            </div>
          )}
          <div className="step-reveal-list">
            {steps.map((step, index) => {
              const visible = readonly || index === activeIndex;
              const stepTitle = getString(step.title, `Step ${index + 1}`);
              const stepContent = getString(step.content, '');
              return (
                <div
                  key={`${spec.id}-step-${index}`}
                  className={`step-reveal-step ${visible ? 'is-active' : ''}`}
                >
                  <div className="step-reveal-step-header">
                    <span className="step-reveal-step-index">{index + 1}</span>
                    <span>{stepTitle}</span>
                  </div>
                  {visible && (
                    <div className="step-reveal-step-content">
                      <StaticRichText
                        markdown={stepContent}
                        lessonKey={lessonKey}
                        context={context}
                        interactionMode={mode}
                        basePath={specPath}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </InteractiveCard>
  );
}

function buildGraphPoints(specProps: Record<string, unknown>, sliderValue: number): Array<{ x: number; y: number }> {
  const domain = asRecord(specProps.domain);
  const relation = asRecord(specProps.relation);
  const start = getNumber(domain.start, -5);
  const end = getNumber(domain.end, 5);
  const step = getNumber(domain.step, 1);
  const relationType = getString(relation.type, 'linear');
  const controlled = getString(relation.controlled, relationType === 'linear' ? 'm' : 'a');
  const fixed = asRecord(relation.fixed);
  const points: Array<{ x: number; y: number }> = [];

  for (let x = start; x <= end; x += step) {
    let y = 0;
    if (relationType === 'quadratic') {
      const a = controlled === 'a' ? sliderValue : getNumber(fixed.a, 1);
      const b = controlled === 'b' ? sliderValue : getNumber(fixed.b, 0);
      const c = controlled === 'c' ? sliderValue : getNumber(fixed.c, 0);
      y = a * x * x + b * x + c;
    } else {
      const m = controlled === 'm' ? sliderValue : getNumber(fixed.m, 1);
      const b = controlled === 'b' ? sliderValue : getNumber(fixed.b, 0);
      y = m * x + b;
    }

    points.push({ x, y });
  }

  return points;
}

function describeGraph(specProps: Record<string, unknown>, sliderValue: number): string {
  const relation = asRecord(specProps.relation);
  const relationType = getString(relation.type, 'linear');
  const controlled = getString(relation.controlled, relationType === 'linear' ? 'm' : 'a');
  const fixed = asRecord(relation.fixed);

  if (relationType === 'quadratic') {
    const a = controlled === 'a' ? sliderValue : getNumber(fixed.a, 1);
    const b = controlled === 'b' ? sliderValue : getNumber(fixed.b, 0);
    const c = controlled === 'c' ? sliderValue : getNumber(fixed.c, 0);
    return `y = ${a}x² ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x ${c >= 0 ? '+' : '-'} ${Math.abs(c)}`;
  }

  const m = controlled === 'm' ? sliderValue : getNumber(fixed.m, 1);
  const b = controlled === 'b' ? sliderValue : getNumber(fixed.b, 0);
  return `y = ${m}x ${b >= 0 ? '+' : '-'} ${Math.abs(b)}`;
}

export function SliderGraphWidget({
  spec,
  lessonKey,
  specPath,
  context,
  mode,
  title,
}: InteractiveWidgetComponentProps) {
  const props = asRecord(spec.props);
  const parameter = asRecord(props.parameter);
  const initialValue = getNumber(parameter.initial, 1);
  const [sliderValue, setSliderValue] = useState(initialValue);
  const readonly = mode === 'readonly';
  const activeValue = readonly ? initialValue : sliderValue;
  const graphPoints = buildGraphPoints(props, activeValue);
  const equation = describeGraph(props, activeValue);

  return (
    <InteractiveCard
      title={title || spec.title}
      runtime={readonly ? 'readonly' : 'native'}
      prompt={spec.prompt}
      lessonKey={lessonKey}
      specPath={specPath}
      context={context}
      mode={mode}
      footer="Watch how the graph changes as the parameter changes."
    >
      <div className="slider-graph-summary">
        <div className="slider-graph-equation">{equation}</div>
        <div className="slider-graph-equation">
          {getString(parameter.label, 'Parameter')} = {activeValue}
        </div>
      </div>
      <div className="interactive-controls">
        <input
          className="interactive-range"
          type="range"
          min={getNumber(parameter.min, -5)}
          max={getNumber(parameter.max, 5)}
          step={getNumber(parameter.step, 1)}
          value={activeValue}
          disabled={readonly}
          onChange={(event) => setSliderValue(Number(event.target.value))}
          aria-label={getString(parameter.label, 'Interactive parameter')}
        />
        {readonly && <span className="interactive-state-note">Controls are disabled in assessment mode.</span>}
      </div>
      <div className="slider-graph-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={graphPoints}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#2b6cb0" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </InteractiveCard>
  );
}

export function NumberLineWidget({
  spec,
  lessonKey,
  specPath,
  context,
  mode,
  title,
}: InteractiveWidgetComponentProps) {
  const props = asRecord(spec.props);
  const min = getNumber(props.min, -5);
  const max = getNumber(props.max, 5);
  const step = getNumber(props.step, 1);
  const target = getNumber(props.target, min);
  const initialSelection = getNumber(props.initialSelection, min);
  const [selected, setSelected] = useState(initialSelection);
  const readonly = mode === 'readonly';
  const values: number[] = [];

  for (let current = min; current <= max; current += step) {
    values.push(current);
  }

  return (
    <InteractiveCard
      title={title || spec.title}
      runtime={readonly ? 'readonly' : 'native'}
      prompt={spec.prompt}
      lessonKey={lessonKey}
      specPath={specPath}
      context={context}
      mode={mode}
      footer="Choose a point on the line and compare it with the target value."
    >
      <div className="number-line">
        <div className="number-line-track">
          {values.map((value) => {
            const isSelected = value === (readonly ? target : selected);
            return (
              <button
                key={`${spec.id}-${value}`}
                type="button"
                className={`number-line-tick ${isSelected ? 'is-selected' : ''} ${readonly && value === target ? 'is-target' : ''}`}
                onClick={() => setSelected(value)}
                disabled={readonly}
              >
                {value}
              </button>
            );
          })}
        </div>
        <div className="number-line-feedback">
          {readonly ? (
            <>Target value: <strong>{target}</strong></>
          ) : selected === target ? (
            <>Nice work. You landed on the target value <strong>{target}</strong>.</>
          ) : (
            <>Selected value: <strong>{selected}</strong>. Compare it with the target value.</>
          )}
        </div>
      </div>
    </InteractiveCard>
  );
}

export function HotspotDiagramWidget({
  spec,
  lessonKey,
  specPath,
  context,
  mode,
  title,
}: InteractiveWidgetComponentProps) {
  const props = asRecord(spec.props);
  const image = getString(props.image);
  const hotspots = Array.isArray(props.hotspots) ? props.hotspots.map(asRecord) : [];
  const [activeId, setActiveId] = useState(getString(hotspots[0]?.id));
  const readonly = mode === 'readonly';
  const { url, loading, error } = useResolvedLessonAsset(lessonKey, image, specPath);
  const activeHotspot = hotspots.find((hotspot) => getString(hotspot.id) === activeId) || hotspots[0];

  return (
    <InteractiveCard
      title={title || spec.title}
      runtime={readonly ? 'readonly' : 'native'}
      prompt={spec.prompt}
      lessonKey={lessonKey}
      specPath={specPath}
      context={context}
      mode={mode}
      footer="Select a marker to reveal the explanation tied to that part of the diagram."
    >
      {loading && <div className="interactive-loading">Loading diagram...</div>}
      {error && <div className="interactive-error">{error}</div>}
      {!loading && !error && url && (
        <>
          <div className="hotspot-figure">
            <img src={url} alt={getString(props.imageAlt, spec.title)} />
            {!readonly && hotspots.map((hotspot) => (
              <button
                key={getString(hotspot.id)}
                type="button"
                className="hotspot-button"
                style={{
                  left: `${getNumber(hotspot.x, 50)}%`,
                  top: `${getNumber(hotspot.y, 50)}%`,
                }}
                onClick={() => setActiveId(getString(hotspot.id))}
                aria-label={getString(hotspot.label, 'Open hotspot explanation')}
              >
                {getString(hotspot.marker, String(hotspots.indexOf(hotspot) + 1))}
              </button>
            ))}
          </div>
          {activeHotspot && (
            <div className="hotspot-details">
              <strong>{getString(activeHotspot.label, 'Detail')}</strong>
              <StaticRichText
                markdown={getString(activeHotspot.content)}
                lessonKey={lessonKey}
                context={context}
                interactionMode={mode}
                basePath={specPath}
              />
            </div>
          )}
          {readonly && hotspots.length > 1 && (
            <div className="interactive-state-note">
              Assessment mode shows one explanation at a time without allowing hotspot changes.
            </div>
          )}
        </>
      )}
    </InteractiveCard>
  );
}

export function MatchSortWidget({
  spec,
  lessonKey,
  specPath,
  context,
  mode,
  title,
}: InteractiveWidgetComponentProps) {
  const props = asRecord(spec.props);
  const pairs = Array.isArray(props.pairs) ? props.pairs.map(asRecord) : [];
  const readonly = mode === 'readonly';
  const rightOptions = getStringArray(props.options).length > 0
    ? getStringArray(props.options)
    : pairs.map((pair) => getString(pair.right));
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const correctCount = pairs.filter((pair, index) => answers[index] === getString(pair.right)).length;

  return (
    <InteractiveCard
      title={title || spec.title}
      runtime={readonly ? 'readonly' : 'native'}
      prompt={spec.prompt}
      lessonKey={lessonKey}
      specPath={specPath}
      context={context}
      mode={mode}
      footer={readonly ? 'Assessment mode shows the confirmed pairings.' : 'Match each prompt with the best partner.'}
    >
      {pairs.length === 0 ? (
        <div className="interactive-empty">No match or sort pairs have been configured yet.</div>
      ) : readonly ? (
        <div className="match-sort-readonly">
          {pairs.map((pair, index) => (
            <div key={`${spec.id}-pair-${index}`} className="match-sort-readonly-item">
              <strong>{getString(pair.left)}</strong> → {getString(pair.right)}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="match-sort-grid">
            {pairs.map((pair, index) => (
              <div className="match-sort-row" key={`${spec.id}-pair-${index}`}>
                <div className="match-sort-label">{getString(pair.left)}</div>
                <select
                  className="match-sort-select"
                  value={answers[index] || ''}
                  onChange={(event) =>
                    setAnswers((current) => ({
                      ...current,
                      [index]: event.target.value,
                    }))}
                >
                  <option value="">Select a match...</option>
                  {rightOptions.map((option) => (
                    <option key={`${spec.id}-${index}-${option}`} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="match-sort-results">
            Correct matches so far: <strong>{correctCount}</strong> of <strong>{pairs.length}</strong>
          </div>
        </>
      )}
    </InteractiveCard>
  );
}

export function TableExplorerWidget({
  spec,
  lessonKey,
  specPath,
  context,
  mode,
  title,
}: InteractiveWidgetComponentProps) {
  const props = asRecord(spec.props);
  const columns = Array.isArray(props.columns) ? props.columns.map(asRecord) : [];
  const rows = Array.isArray(props.rows) ? props.rows.map(asRecord) : [];
  const initialSortKey = getString(props.initialSortKey, getString(columns[0]?.key));
  const [sortKey, setSortKey] = useState(initialSortKey);
  const [ascending, setAscending] = useState(getBoolean(props.ascending, true));
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const readonly = mode === 'readonly';

  const sortedRows = (() => {
    if (!sortKey) {
      return rows;
    }

    return [...rows].sort((left, right) => {
      const leftValue = left[sortKey];
      const rightValue = right[sortKey];
      if (leftValue === rightValue) {
        return 0;
      }

      if (leftValue === undefined || leftValue === null) {
        return 1;
      }

      if (rightValue === undefined || rightValue === null) {
        return -1;
      }

      if (typeof leftValue === 'number' && typeof rightValue === 'number') {
        return ascending ? leftValue - rightValue : rightValue - leftValue;
      }

      const result = String(leftValue).localeCompare(String(rightValue));
      return ascending ? result : -result;
    });
  })();

  const activeRow = sortedRows[activeRowIndex] || sortedRows[0];

  return (
    <InteractiveCard
      title={title || spec.title}
      runtime={readonly ? 'readonly' : 'native'}
      prompt={spec.prompt}
      lessonKey={lessonKey}
      specPath={specPath}
      context={context}
      mode={mode}
      footer="Sort the table to compare rows, then inspect a row for details."
    >
      {!readonly && (
        <div className="table-explorer-toolbar">
          <select
            className="table-explorer-select"
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value)}
          >
            {columns.map((column) => (
              <option key={getString(column.key)} value={getString(column.key)}>
                Sort by {getString(column.label, getString(column.key))}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="interactive-button-secondary"
            onClick={() => setAscending((current) => !current)}
          >
            {ascending ? 'Ascending' : 'Descending'}
          </button>
        </div>
      )}
      <table className="table-explorer-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={`${spec.id}-${getString(column.key)}`}>
                {getString(column.label, getString(column.key))}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, rowIndex) => (
            <tr key={`${spec.id}-row-${rowIndex}`}>
              {columns.map((column, columnIndex) => {
                const key = getString(column.key);
                const cellValue = row[key];

                if (columnIndex === 0 && !readonly) {
                  return (
                    <td key={`${spec.id}-row-${rowIndex}-${key}`}>
                      <button
                        type="button"
                        className={`table-explorer-row-button ${rowIndex === activeRowIndex ? 'is-active' : ''}`}
                        onClick={() => setActiveRowIndex(rowIndex)}
                      >
                        {String(cellValue ?? '')}
                      </button>
                    </td>
                  );
                }

                return (
                  <td key={`${spec.id}-row-${rowIndex}-${key}`}>
                    {String(cellValue ?? '')}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {activeRow && (
        <div className="table-explorer-details">
          {columns.map((column) => {
            const key = getString(column.key);
            return (
              <div className="table-explorer-detail-card" key={`${spec.id}-detail-${key}`}>
                <strong>{getString(column.label, key)}</strong>
                <div>{String(activeRow[key] ?? '')}</div>
              </div>
            );
          })}
        </div>
      )}
    </InteractiveCard>
  );
}

export function SandboxHostWidget({
  spec,
  specPath,
  lessonKey,
  context,
  mode,
  title,
  height,
}: InteractiveWidgetComponentProps) {
  const props = asRecord(spec.props);
  const htmlPath = getString(props.htmlPath);

  return (
    <InteractiveCard
      title={title || spec.title}
      runtime={mode === 'readonly' ? 'readonly' : 'sandbox'}
      prompt={spec.prompt}
      lessonKey={lessonKey}
      specPath={specPath}
      context={context}
      mode={mode}
      footer="This richer mini-app runs inside a sandboxed frame."
    >
      {htmlPath ? (
        <MiniAppHost
          lessonKey={lessonKey}
          specPath={specPath}
          htmlPath={htmlPath}
          title={title || spec.title}
          height={height || getNumber(props.height, 420)}
        />
      ) : (
        <div className="interactive-error">Mini-app configuration is missing props.htmlPath.</div>
      )}
    </InteractiveCard>
  );
}
