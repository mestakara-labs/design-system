/**
 * One block on a page of its own (/view/<name>), without the site's top bar.
 * This is what the preview iframe on /blocks shows, and what "open in new tab" opens.
 */
import { createElement } from "react";
import { useParams } from "react-router";

import { findBlock, getBlockPage } from "@/blocks/registry";

import NotFoundPage from "./not-found";

export default function BlockViewPage() {
  const { name = "" } = useParams();

  if (!findBlock(name)) return <NotFoundPage />;
  // createElement instead of <BlockPage />: the page component is looked up, not declared here.
  return createElement(getBlockPage(name));
}
