import { useTranslation } from "react-i18next";
import { Link } from "react-router";

/** Leaf mark + site name, links to the home page. */
export function Logo() {
  const { t } = useTranslation();

  return (
    <Link
      to="/"
      className="flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-focus"
    >
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <rect width="32" height="32" rx="8" className="fill-brand" />
        <path
          d="M9 21c0-6 5-11 14-11 0 9-5 14-11 14-1.2 0-2.2-.3-3-.8 2-3 4.5-5.5 7.5-7.2-3.6 1.2-6.4 3.4-8.5 6.4-.3-.4 1-1.4 1-1.4z"
          className="fill-green-500"
        />
      </svg>
      <span className="typo-label-l whitespace-nowrap text-fg-brand">{t("site.name")}</span>
    </Link>
  );
}
