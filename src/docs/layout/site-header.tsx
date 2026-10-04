import { cn } from "cn";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { PATHS } from "../paths";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { SearchCommand } from "./search-command";
import { Sidebar } from "./sidebar";

/**
 * Menu items of the top bar. To add a menu item, add one line here.
 * `isActive` decides when the item is highlighted, based on the current URL.
 */
const NAV_LINKS = [
  {
    to: PATHS.home,
    labelKey: "nav.home",
    isActive: (pathname: string) => pathname === PATHS.home,
  },
  {
    to: PATHS.docs,
    labelKey: "nav.docs",
    // Every docs page, except the component pages (they have their own item).
    isActive: (pathname: string) =>
      pathname.startsWith(PATHS.docs) && !pathname.startsWith(PATHS.components),
  },
  {
    to: PATHS.components,
    labelKey: "nav.components",
    isActive: (pathname: string) => pathname.startsWith(PATHS.components),
  },
  {
    to: PATHS.blocks,
    labelKey: "nav.blocks",
    isActive: (pathname: string) => pathname.startsWith(PATHS.blocks),
  },
] as const;

/**
 * Top bar of every page (like ui.shadcn.com):
 *   [☰] [Logo]  Beranda  Dokumentasi  Komponen  Blocks          [Cari… Ctrl K] [ID]
 * On phones the menu items move into a Sheet, together with every docs page.
 */
export function SiteHeader() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-screen-2xl items-center gap-6 px-4 md:px-6">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label={t("header.openMenu")}
          className="-ml-1 inline-flex size-9 cursor-pointer items-center justify-center rounded-sm hover:bg-subtle focus-visible:outline-2 focus-visible:outline-focus md:hidden"
        >
          <MenuIcon className="size-5" />
        </button>

        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={link.isActive(pathname) ? "page" : undefined}
              className={cn(
                "rounded-sm px-3 py-1.5 typo-label-m transition-colors focus-visible:outline-2 focus-visible:outline-focus",
                link.isActive(pathname)
                  ? "text-fg-brand"
                  : "text-fg-secondary hover:text-fg-primary",
              )}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <SearchCommand />
          <LanguageSwitcher />
        </div>
      </div>

      {/* Phone menu: the top bar items, then every docs page. */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="w-72 gap-0" closeLabel={t("header.closeMenu")}>
          <SheetHeader className="pb-0">
            <SheetTitle>{t("site.name")}</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-3 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-sm px-3 py-2 typo-label-l focus-visible:outline-2 focus-visible:outline-focus",
                  link.isActive(pathname) ? "bg-brand-subtle text-fg-brand" : "text-fg-primary",
                )}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
          <Separator className="mx-6 mt-4 w-auto" />
          <Sidebar onNavigate={() => setMenuOpen(false)} />
        </SheetContent>
      </Sheet>
    </header>
  );
}
