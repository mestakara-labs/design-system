import { useTranslation } from "react-i18next";

/**
 * Every state the matrix can show.
 * - hover / focus / pressed are forced with CSS (see below).
 * - disabled / invalid are real props: use them in the render function, e.g.
 *   `disabled={state === "disabled"}`, `aria-invalid={state === "invalid"}`.
 */
export type PreviewState = "default" | "hover" | "focus" | "pressed" | "invalid" | "disabled";

const DEFAULT_STATES: readonly PreviewState[] = [
  "default",
  "hover",
  "focus",
  "pressed",
  "disabled",
];

type StateMatrixProps<Row extends string> = {
  /** One row per item, e.g. every button variant. */
  rows: readonly Row[];
  /** Columns to show. Defaults to default, hover, focus, pressed, disabled. */
  states?: readonly PreviewState[];
  /** Draws the component for one row in one state. */
  children: (state: PreviewState, row: Row) => React.ReactNode;
};

/**
 * Shows every state of a component side by side, without hovering or clicking.
 *
 * How it works: each cell is wrapped in `<div data-preview-state="hover">` (or focus/pressed).
 * `src/docs/docs.css` teaches Tailwind's `hover:`, `focus-visible:` and `active:` to also match
 * inside that wrapper. This only exists in the docs site — apps using the package are not affected.
 */
export function StateMatrix<Row extends string>({
  rows,
  states = DEFAULT_STATES,
  children,
}: StateMatrixProps<Row>) {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto rounded-md border border-border bg-surface">
      {/* table-fixed = every state column gets the same width */}
      <table className="w-full min-w-[600px] table-fixed">
        <thead>
          <tr className="typo-label-s text-fg-tertiary">
            <th className="w-32 px-3 py-3 text-left" />
            {states.map((state) => (
              <th key={state} className="px-2 py-3 text-center">
                {t(`states.${state}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row} className="border-t border-border">
              <th className="px-3 py-4 text-left">
                <code className="font-mono text-[13px] font-normal text-fg-secondary">{row}</code>
              </th>
              {states.map((state) => (
                <td key={state} className="px-2 py-4 text-center">
                  <div data-preview-state={state} className="flex w-full justify-center">
                    {children(state, row)}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
