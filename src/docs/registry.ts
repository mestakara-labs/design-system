/**
 * REGISTRY — the single list of every page in the docs site.
 * ---------------------------------------------------------------------------
 * The sidebar, the routes and the "Components" overview are all built from this file.
 *
 * To add a component page:
 *   1. Create `pages/components/<slug>.tsx` (copy `button.tsx` as a starting point).
 *   2. Add one line to `COMPONENTS` below.
 */
import type { ParseKeys } from "i18next";
import { lazy } from "react";
import { foundationPath, PATHS } from "./paths";

/** Groups shown in the sidebar. Labels are in `locales/<lang>/common.json` → "categories". */
export const COMPONENT_CATEGORIES = [
  "form",
  "data-display",
  "overlay",
  "navigation",
  "chat",
] as const;
export type ComponentCategory = (typeof COMPONENT_CATEGORIES)[number];

export type ComponentEntry = {
  /** URL part: /components/<slug>. Also the file name of the component. */
  slug: string;
  /** Component name, same in every language. */
  name: string;
  category: ComponentCategory;
  /** The docs page. `lazy` = only downloaded when the page is opened. */
  Page: React.LazyExoticComponent<React.ComponentType>;
};

export const COMPONENTS: ComponentEntry[] = [
  // A. Form & Input
  {
    slug: "button",
    name: "Button",
    category: "form",
    Page: lazy(() => import("./pages/components/button")),
  },
  {
    slug: "button-group",
    name: "Button Group",
    category: "form",
    Page: lazy(() => import("./pages/components/button-group")),
  },
  {
    slug: "calendar",
    name: "Calendar",
    category: "form",
    Page: lazy(() => import("./pages/components/calendar")),
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "form",
    Page: lazy(() => import("./pages/components/checkbox")),
  },
  {
    slug: "combobox",
    name: "Combobox",
    category: "form",
    Page: lazy(() => import("./pages/components/combobox")),
  },
  {
    slug: "date-picker",
    name: "Date Picker",
    category: "form",
    Page: lazy(() => import("./pages/components/date-picker")),
  },
  {
    slug: "field",
    name: "Field",
    category: "form",
    Page: lazy(() => import("./pages/components/field")),
  },
  {
    slug: "form",
    name: "Form",
    category: "form",
    Page: lazy(() => import("./pages/components/form")),
  },
  {
    slug: "input",
    name: "Input",
    category: "form",
    Page: lazy(() => import("./pages/components/input")),
  },
  {
    slug: "input-group",
    name: "Input Group",
    category: "form",
    Page: lazy(() => import("./pages/components/input-group")),
  },
  {
    slug: "input-otp",
    name: "Input OTP",
    category: "form",
    Page: lazy(() => import("./pages/components/input-otp")),
  },
  {
    slug: "label",
    name: "Label",
    category: "form",
    Page: lazy(() => import("./pages/components/label")),
  },
  {
    slug: "native-select",
    name: "Native Select",
    category: "form",
    Page: lazy(() => import("./pages/components/native-select")),
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    category: "form",
    Page: lazy(() => import("./pages/components/radio-group")),
  },
  {
    slug: "select",
    name: "Select",
    category: "form",
    Page: lazy(() => import("./pages/components/select")),
  },
  {
    slug: "slider",
    name: "Slider",
    category: "form",
    Page: lazy(() => import("./pages/components/slider")),
  },
  {
    slug: "switch",
    name: "Switch",
    category: "form",
    Page: lazy(() => import("./pages/components/switch")),
  },
  {
    slug: "textarea",
    name: "Textarea",
    category: "form",
    Page: lazy(() => import("./pages/components/textarea")),
  },
  {
    slug: "toggle",
    name: "Toggle",
    category: "form",
    Page: lazy(() => import("./pages/components/toggle")),
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    category: "form",
    Page: lazy(() => import("./pages/components/toggle-group")),
  },

  // B. Data Display
  {
    slug: "alert",
    name: "Alert",
    category: "data-display",
    Page: lazy(() => import("./pages/components/alert")),
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    category: "data-display",
    Page: lazy(() => import("./pages/components/aspect-ratio")),
  },
  {
    slug: "avatar",
    name: "Avatar",
    category: "data-display",
    Page: lazy(() => import("./pages/components/avatar")),
  },
  {
    slug: "badge",
    name: "Badge",
    category: "data-display",
    Page: lazy(() => import("./pages/components/badge")),
  },
  {
    slug: "card",
    name: "Card",
    category: "data-display",
    Page: lazy(() => import("./pages/components/card")),
  },
  {
    slug: "carousel",
    name: "Carousel",
    category: "data-display",
    Page: lazy(() => import("./pages/components/carousel")),
  },
  {
    slug: "chart",
    name: "Chart",
    category: "data-display",
    Page: lazy(() => import("./pages/components/chart")),
  },
  {
    slug: "data-table",
    name: "Data Table",
    category: "data-display",
    Page: lazy(() => import("./pages/components/data-table")),
  },
  {
    slug: "empty",
    name: "Empty",
    category: "data-display",
    Page: lazy(() => import("./pages/components/empty")),
  },
  {
    slug: "item",
    name: "Item",
    category: "data-display",
    Page: lazy(() => import("./pages/components/item")),
  },
  {
    slug: "kbd",
    name: "Kbd",
    category: "data-display",
    Page: lazy(() => import("./pages/components/kbd")),
  },
  {
    slug: "progress",
    name: "Progress",
    category: "data-display",
    Page: lazy(() => import("./pages/components/progress")),
  },
  {
    slug: "separator",
    name: "Separator",
    category: "data-display",
    Page: lazy(() => import("./pages/components/separator")),
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    category: "data-display",
    Page: lazy(() => import("./pages/components/skeleton")),
  },
  {
    slug: "spinner",
    name: "Spinner",
    category: "data-display",
    Page: lazy(() => import("./pages/components/spinner")),
  },
  {
    slug: "table",
    name: "Table",
    category: "data-display",
    Page: lazy(() => import("./pages/components/table")),
  },
  {
    slug: "typography",
    name: "Typography",
    category: "data-display",
    Page: lazy(() => import("./pages/components/typography")),
  },

  // C. Overlay
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    category: "overlay",
    Page: lazy(() => import("./pages/components/alert-dialog")),
  },
  {
    slug: "command",
    name: "Command",
    category: "overlay",
    Page: lazy(() => import("./pages/components/command")),
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    category: "overlay",
    Page: lazy(() => import("./pages/components/context-menu")),
  },
  {
    slug: "dialog",
    name: "Dialog",
    category: "overlay",
    Page: lazy(() => import("./pages/components/dialog")),
  },
  {
    slug: "drawer",
    name: "Drawer",
    category: "overlay",
    Page: lazy(() => import("./pages/components/drawer")),
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    category: "overlay",
    Page: lazy(() => import("./pages/components/dropdown-menu")),
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    category: "overlay",
    Page: lazy(() => import("./pages/components/hover-card")),
  },
  {
    slug: "menubar",
    name: "Menubar",
    category: "overlay",
    Page: lazy(() => import("./pages/components/menubar")),
  },
  {
    slug: "popover",
    name: "Popover",
    category: "overlay",
    Page: lazy(() => import("./pages/components/popover")),
  },
  {
    slug: "sheet",
    name: "Sheet",
    category: "overlay",
    Page: lazy(() => import("./pages/components/sheet")),
  },
  {
    slug: "sonner",
    name: "Sonner",
    category: "overlay",
    Page: lazy(() => import("./pages/components/sonner")),
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    category: "overlay",
    Page: lazy(() => import("./pages/components/tooltip")),
  },

  // D. Navigation & Layout
  {
    slug: "accordion",
    name: "Accordion",
    category: "navigation",
    Page: lazy(() => import("./pages/components/accordion")),
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    category: "navigation",
    Page: lazy(() => import("./pages/components/breadcrumb")),
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    category: "navigation",
    Page: lazy(() => import("./pages/components/collapsible")),
  },
  {
    slug: "direction",
    name: "Direction",
    category: "navigation",
    Page: lazy(() => import("./pages/components/direction")),
  },
  {
    slug: "navigation-menu",
    name: "Navigation Menu",
    category: "navigation",
    Page: lazy(() => import("./pages/components/navigation-menu")),
  },
  {
    slug: "pagination",
    name: "Pagination",
    category: "navigation",
    Page: lazy(() => import("./pages/components/pagination")),
  },
  {
    slug: "resizable",
    name: "Resizable",
    category: "navigation",
    Page: lazy(() => import("./pages/components/resizable")),
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    category: "navigation",
    Page: lazy(() => import("./pages/components/scroll-area")),
  },
  {
    slug: "sidebar",
    name: "Sidebar",
    category: "navigation",
    Page: lazy(() => import("./pages/components/sidebar")),
  },
  {
    slug: "tabs",
    name: "Tabs",
    category: "navigation",
    Page: lazy(() => import("./pages/components/tabs")),
  },

  // E. Chat & Conversation
  {
    slug: "attachment",
    name: "Attachment",
    category: "chat",
    Page: lazy(() => import("./pages/components/attachment")),
  },
  {
    slug: "bubble",
    name: "Bubble",
    category: "chat",
    Page: lazy(() => import("./pages/components/bubble")),
  },
  {
    slug: "marker",
    name: "Marker",
    category: "chat",
    Page: lazy(() => import("./pages/components/marker")),
  },
  {
    slug: "message",
    name: "Message",
    category: "chat",
    Page: lazy(() => import("./pages/components/message")),
  },
  {
    slug: "message-scroller",
    name: "Message Scroller",
    category: "chat",
    Page: lazy(() => import("./pages/components/message-scroller")),
  },
  {
    slug: "questionnaire",
    name: "Questionnaire",
    category: "chat",
    Page: lazy(() => import("./pages/components/questionnaire")),
  },
];

/** A translation key from `common.json`, e.g. "nav.colors". */
type CommonKey = ParseKeys<"common">;

export type GuidePage = {
  path: string;
  titleKey: CommonKey;
  Page: React.LazyExoticComponent<React.ComponentType>;
};

/** Pages that are not components ("Getting Started" and "Foundations"). */
export const GUIDE_SECTIONS: { titleKey: CommonKey; pages: GuidePage[] }[] = [
  {
    titleKey: "nav.gettingStarted",
    pages: [
      {
        path: PATHS.docs,
        titleKey: "nav.introduction",
        Page: lazy(() => import("./pages/introduction")),
      },
      {
        path: PATHS.installation,
        titleKey: "nav.installation",
        Page: lazy(() => import("./pages/installation")),
      },
    ],
  },
  {
    titleKey: "nav.foundations",
    pages: [
      {
        path: foundationPath("colors"),
        titleKey: "nav.colors",
        Page: lazy(() => import("./pages/foundations/colors")),
      },
      {
        path: foundationPath("typography"),
        titleKey: "nav.typography",
        Page: lazy(() => import("./pages/foundations/typography")),
      },
      {
        path: foundationPath("spacing"),
        titleKey: "nav.spacing",
        Page: lazy(() => import("./pages/foundations/spacing")),
      },
      {
        path: foundationPath("radius"),
        titleKey: "nav.radius",
        Page: lazy(() => import("./pages/foundations/radius")),
      },
      {
        path: foundationPath("elevation"),
        titleKey: "nav.elevation",
        Page: lazy(() => import("./pages/foundations/elevation")),
      },
    ],
  },
];
