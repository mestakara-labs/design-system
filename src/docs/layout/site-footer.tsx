import { useTranslation } from "react-i18next";

/** Small line at the bottom of the landing and blocks pages. */
export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-screen-2xl px-4 py-6 typo-body-s text-fg-tertiary md:px-6">
        {t("footer.text")}
      </div>
    </footer>
  );
}
