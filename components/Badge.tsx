import { type ReactNode } from "react";

/**
 * Badge configuration.
 */
export interface BadgeProps {
  /**
   * The text in the badge.
   */
  children: ReactNode;
}

/**
 * The badge component.
 */
export function Badge({ children }: BadgeProps) {
  return (
    <div className="Badge rounded bg-neutral-800 px-1.5 py-2">{children}</div>
  );
}
