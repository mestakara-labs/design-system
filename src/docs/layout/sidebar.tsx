import { cn } from "cn";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

import { COMPONENT_CATEGORIES, COMPONENTS, GUIDE_SECTIONS } from "../registry";
import { componentPath, PATHS } from "../paths";

type SidebarProps = {
  /** Called after a link is clicked (used to close the mobile menu). */
  onNavigate?: () => void;
};

/** Left navigation. Everything in it comes from `registry.ts`. */
export function Sidebar({ onNavigate }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <nav className="flex flex-col gap-6 px-3 py-6">
      {GUIDE_SECTIONS.map((section) => (
        <SidebarGroup key={section.titleKey} title={t(section.titleKey)}>
          {section.pages.map((page) => (
            <SidebarLink key={page.path} to={page.path} onNavigate={onNavigate}>
              {t(page.titleKey)}
            </SidebarLink>
          ))}
        </SidebarGroup>
      ))}

      <SidebarGroup title={t("nav.components")}>
        <SidebarLink to={PATHS.components} onNavigate={onNavigate}>
          {t("nav.allComponents")}
        </SidebarLink>
      </SidebarGroup>

      {COMPONENT_CATEGORIES.map((category) => {
        const components = COMPONENTS.filter((component) => component.category === category);
        if (components.length === 0) return null;

        return (
          <SidebarGroup key={category} title={t(`categories.${category}`)}>
            {components.map((component) => (
              <SidebarLink
                key={component.slug}
                to={componentPath(component.slug)}
                onNavigate={onNavigate}
              >
                {component.name}
              </SidebarLink>
            ))}
          </SidebarGroup>
        );
      })}
    </nav>
  );
}

function SidebarGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="px-3 pb-1 typo-overline text-fg-tertiary">{title}</p>
      {children}
    </div>
  );
}

type SidebarLinkProps = {
  to: string;
  onNavigate?: () => void;
  children: React.ReactNode;
};

function SidebarLink({ to, onNavigate, children }: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      end
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "rounded-sm px-3 py-1.5 typo-body-m focus-visible:outline-2 focus-visible:outline-focus",
          // Active item: light green pill + dark green text (DESIGN.md "Bottom Navigation").
          isActive
            ? "bg-brand-subtle font-semibold text-fg-brand"
            : "text-fg-secondary hover:bg-subtle hover:text-fg-primary",
        )
      }
    >
      {children}
    </NavLink>
  );
}
