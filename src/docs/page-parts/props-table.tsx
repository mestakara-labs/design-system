import { useTranslation } from "react-i18next";

export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

/** API reference table: one row per prop. */
export function PropsTable({ rows }: { rows: PropRow[] }) {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto rounded-md border border-border bg-surface">
      <table className="w-full min-w-[560px] text-left">
        <thead className="bg-subtle typo-label-s text-fg-secondary">
          <tr>
            <th className="px-4 py-3">{t("props.prop")}</th>
            <th className="px-4 py-3">{t("props.type")}</th>
            <th className="px-4 py-3">{t("props.default")}</th>
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
                <code className="font-mono text-[13px] break-words text-fg-secondary">
                  {row.type}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[13px] text-fg-secondary">
                  {row.default ?? "—"}
                </code>
              </td>
              <td className="px-4 py-3 text-fg-secondary">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
