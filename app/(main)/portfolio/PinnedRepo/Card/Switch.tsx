import { cx } from "classix";
import { type ReactNode } from "react";

/**
 * The props of {@link CardSwitch}.
 */
export interface CardSwitchProps {
  /**
   * The default (not hovering) children.
   */
  children: ReactNode;

  /**
   * The children when hovering.
   */
  onHoverChildren: ReactNode;
}

/**
 * Switch elements by scrolling up when users hover this element.
 */
export function CardSwitch({ children, onHoverChildren }: CardSwitchProps) {
  const commonChildrenStyle = "transform transition duration-300";

  return (
    <div
      className={cx(
        "RepoCard-switch",
        "relative overflow-hidden",
        "text-sm text-neutral-300"
      )}
    >
      <div
        className={cx(
          "RepoCard-switchDefault",
          "absolute",
          "group-hover:-translate-y-6",
          "group-hover:opacity-0",
          commonChildrenStyle
        )}
      >
        {children}
      </div>
      <div
        className={cx(
          "RepoCard-switchHover",
          "translate-y-6 group-hover:translate-y-0",
          "opacity-0 group-hover:opacity-100",
          commonChildrenStyle
        )}
      >
        {onHoverChildren}
      </div>
    </div>
  );
}