import { useTranslation } from "react-i18next";

export type PartRow = {
  /** Sub-component name, e.g. "FieldLabel". */
  name: string;
  /** What it renders, e.g. "<label>". */
  element: string;
  description: string;
};

/** "Anatomy" table: the sub-components a component is made of. */
export function PartsTable({ rows }: { rows: PartRow[] }) {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto rounded-md border border-border bg-surface">
      <table className="w-full min-w-[480px] text-left">
        <thead className="bg-subtle typo-label-s text-fg-secondary">
          <tr>
            <th className="px-4 py-3">{t("parts.component")}</th>
            <th className="px-4 py-3">{t("parts.element")}</th>
            <th className="px-4 py-3">{t("props.description")}</th>
          </tr>
        </thead>
        <tbody className="typo-body-m">
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-border align-top">
              <td className="px-4 py-3">
                <code className="font-mono text-[13px] text-fg-link">{row.name}</code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[13px] text-fg-secondary">{row.element}</code>
              </td>
              <td className="px-4 py-3 text-fg-secondary">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
