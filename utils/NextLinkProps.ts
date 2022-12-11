import type Link from "next/link";

/**
 * The available props is as same as what `Link` provides.
 */
export type LinkProps = typeof Link extends (p: infer P) => unknown
  ? Omit<P, "ref">
  : never;
