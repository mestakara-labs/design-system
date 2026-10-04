import { ComponentPreview } from "./component-preview";
import { Section } from "./section";

type ExampleProps = {
  /** URL anchor, e.g. "sizes". */
  id: string;
  title: string;
  description?: string;
  /** The example component (default export of a file in `examples/`). */
  example: React.ComponentType;
  /** Its source code, imported with `?raw`. */
  code: string;
  /** Extra classes for the preview box, e.g. "items-start" or "min-h-96". */
  previewClassName?: string;
};

/**
 * One example on a component page: a small heading, a description and a Preview/Code box.
 * Place it inside <Section id="examples">.
 */
export function Example({ id, title, description, example, code, previewClassName }: ExampleProps) {
  return (
    <Section level="h3" id={id} title={title} description={description}>
      <ComponentPreview example={example} code={code} className={previewClassName} />
    </Section>
  );
}
