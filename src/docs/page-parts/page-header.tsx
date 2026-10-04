type PageHeaderProps = {
  title: string;
  description: string;
  /** Optional small label above the title, e.g. the category name. */
  overline?: string;
};

/** Title + description at the top of every docs page. */
export function PageHeader({ title, description, overline }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-2">
      {overline && <p className="typo-overline text-fg-accent">{overline}</p>}
      <h1 className="typo-display-l text-fg-brand">{title}</h1>
      <p className="max-w-2xl typo-body-l text-fg-secondary">{description}</p>
    </header>
  );
}
