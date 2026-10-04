import { CodeBlock } from "./code-block";

type InstallSnippetProps = {
  /** File name of the component, e.g. "button" or "dropdown-menu". */
  component: string;
  /** Names exported by the component file, e.g. ["Button"]. */
  exports: string[];
};

/** "Installation" section: the npm command and the import line. */
export function InstallSnippet({ component, exports }: InstallSnippetProps) {
  return (
    <div className="flex flex-col gap-3">
      <CodeBlock language="bash" code="npm install @mestakara/ui" />
      <CodeBlock code={`import { ${exports.join(", ")} } from "@mestakara/ui/${component}";`} />
    </div>
  );
}
