import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

import { COMPONENT_CATEGORIES, COMPONENTS, GUIDE_SECTIONS } from "../registry";
import { BLOCK_CATEGORIES } from "@/blocks/registry";

import { blocksCategoryPath, componentPath } from "../paths";

/**
 * Search button in the header + Ctrl+K popup listing every docs page and block category.
 * The lists come from the registries, so new pages are searchable automatically.
 */
export function SearchCommand() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Ctrl+K (Windows/Linux) or ⌘K (Mac) opens and closes the search.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function goTo(path: string) {
    setOpen(false);
    navigate(path);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("search.button")}
        className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-sm border border-border bg-surface px-2.5 text-fg-tertiary hover:bg-subtle focus-visible:outline-2 focus-visible:outline-focus md:w-60"
      >
        <SearchIcon className="size-4" />
        <span className="hidden flex-1 truncate text-left typo-body-m whitespace-nowrap md:inline">
          {t("search.button")}
        </span>
        <KbdGroup className="hidden md:inline-flex">
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={t("search.button")}
        description={t("search.placeholder")}
      >
        <CommandInput placeholder={t("search.placeholder")} />
        <CommandList>
          <CommandEmpty>{t("search.empty")}</CommandEmpty>

          {GUIDE_SECTIONS.map((section) => (
            <CommandGroup key={section.titleKey} heading={t(section.titleKey)}>
              {section.pages.map((page) => (
                <CommandItem
                  key={page.path}
                  value={t(page.titleKey)}
                  onSelect={() => goTo(page.path)}
                >
                  {t(page.titleKey)}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}

          {COMPONENT_CATEGORIES.map((category) => (
            <CommandGroup key={category} heading={t(`categories.${category}`)}>
              {COMPONENTS.filter((component) => component.category === category).map(
                (component) => (
                  <CommandItem
                    key={component.slug}
                    value={component.name}
                    onSelect={() => goTo(componentPath(component.slug))}
                  >
                    {component.name}
                  </CommandItem>
                ),
              )}
            </CommandGroup>
          ))}

          <CommandGroup heading={t("nav.blocks")}>
            {BLOCK_CATEGORIES.map((category) => (
              <CommandItem
                key={category}
                value={`Blocks ${t(`categories.${category}`, { ns: "blocks" })}`}
                onSelect={() => goTo(blocksCategoryPath(category))}
              >
                {t(`categories.${category}`, { ns: "blocks" })}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
