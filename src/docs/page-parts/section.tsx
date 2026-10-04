type SectionProps = {
  /** Used for the URL anchor (#id) and the "On this page" list. */
  id: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  /** `h3` for a sub-section inside another section. */
  level?: "h2" | "h3";
};

/** A titled block of content. Every `h2` here is listed in the "On this page" menu. */
export function Section({ id, title, description, children, level = "h2" }: SectionProps) {
  const Heading = level;

  return (
    <section className="flex scroll-mt-24 flex-col gap-4" id={id}>
      <div className="flex flex-col gap-1">
        <Heading className={level === "h2" ? "typo-h2 text-fg-heading" : "typo-h3 text-fg-primary"}>
          {title}
        </Heading>
        {description && <p className="typo-body-m text-fg-secondary">{description}</p>}
      </div>
      {children}
    </section>
  );
}
