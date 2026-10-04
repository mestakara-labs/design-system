import { Component, type ReactNode } from "react";

type PageErrorBoundaryProps = {
  /** Reset the boundary when this changes (the current URL). */
  resetKey: string;
  /** What to show when a page fails, e.g. after a new deploy made an old page file disappear. */
  fallback: ReactNode;
  children: ReactNode;
};

type PageErrorBoundaryState = { hasError: boolean; resetKey: string };

/**
 * Catches errors while loading or rendering one docs page, so the header and sidebar keep working.
 * React only supports error boundaries as class components.
 */
export class PageErrorBoundary extends Component<PageErrorBoundaryProps, PageErrorBoundaryState> {
  state: PageErrorBoundaryState = { hasError: false, resetKey: this.props.resetKey };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // Navigating to another page clears the error.
  static getDerivedStateFromProps(props: PageErrorBoundaryProps, state: PageErrorBoundaryState) {
    if (props.resetKey !== state.resetKey) return { hasError: false, resetKey: props.resetKey };
    return null;
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
