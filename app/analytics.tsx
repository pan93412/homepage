"use client";

import { Analytics } from "@vercel/analytics/react";

/**
 * Wrap Analytics in client component.
 */
export function AnalyticsWrapper() {
  return <Analytics />;
}
