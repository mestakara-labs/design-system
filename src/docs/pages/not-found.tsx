/** Docs page: shown for any unknown URL. */
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";

import { PageHeader } from "../page-parts/page-header";
import { PATHS } from "../paths";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start gap-6">
      <PageHeader title={t("notFound.title")} description={t("notFound.description")} />
      <Button asChild variant="tonal">
        <Link to={PATHS.home}>{t("notFound.backHome")}</Link>
      </Button>
    </div>
  );
}
