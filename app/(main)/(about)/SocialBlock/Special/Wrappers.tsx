"use client";

import { type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const LOADING_PLACEHOLDER = <>…</>;
export const ERROR_PLACEHOLDER = <>###</>;

/**
 * Fallback to {@link LOADING_PLACEHOLDER} or {@link ERROR_PLACEHOLDER}
 * when the component is loading or failed.
 */
export function NotFatalSuspenseWrapper(props: {
  /**
   * The component to be wrapped.
   */
  children: ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={() => ERROR_PLACEHOLDER}
      onError={console.error}
    >
      <Suspense fallback={LOADING_PLACEHOLDER}>{props.children}</Suspense>
    </ErrorBoundary>
  );
}
