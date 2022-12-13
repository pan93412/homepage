"use client";

import { usePathname } from "next/navigation";
import Header, { type HeaderEntry } from "@components/Header";

export const routeMap: Record<string, HeaderEntry> = {
  "/": "About",
  "/portfolio": "Portfolio",
  "/oss": "OSS",
  "/extras": "Extras",
};

/**
 * The component that wrapped Header for navigation.
 */
export function DynamicHeader() {
  const pathname = usePathname();
  const active = pathname ? routeMap[pathname] : null;

  return <Header active={active} />;
}
