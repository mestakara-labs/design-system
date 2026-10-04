import { useEffect, useState } from "react";

import { Spinner } from "@/components/ui/spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getBlockSourceFiles } from "@/blocks/registry";

import { CodeBlock } from "../page-parts/code-block";

type SourceFile = { fileName: string; code: string };

/**
 * The "Code" tab of a block: one tab per file, each with a copy button.
 * The files are loaded only when this tab is opened.
 */
export function BlockCode({ name }: { name: string }) {
  const [files, setFiles] = useState<SourceFile[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getBlockSourceFiles(name).then((result) => {
      if (!cancelled) setFiles(result);
    });
    return () => {
      cancelled = true;
    };
  }, [name]);

  if (!files) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg border border-border">
        <Spinner className="size-6 text-fg-tertiary" />
      </div>
    );
  }

  return (
    <Tabs defaultValue={files[0].fileName} className="gap-2">
      <TabsList variant="line" className="w-full overflow-x-auto">
        {files.map((file) => (
          <TabsTrigger key={file.fileName} value={file.fileName} className="font-mono">
            {file.fileName}
          </TabsTrigger>
        ))}
      </TabsList>
      {files.map((file) => (
        <TabsContent key={file.fileName} value={file.fileName}>
          <CodeBlock
            language={file.fileName.endsWith(".json") ? "json" : "tsx"}
            // Blocks import from "@/components/ui/…"; apps import from "@mestakara/ui/…".
            code={file.code.replaceAll("@/components/ui/", "@mestakara/ui/")}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
