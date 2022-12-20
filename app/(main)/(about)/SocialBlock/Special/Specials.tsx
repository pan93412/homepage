import { cx } from "classix";
import { type ReactNode } from "react";
import { SocialButton, type SocialButtonProps } from "../Button";

/**
 * The props for {@link ScrollableSocialButton}.
 */
export interface ScrollableSocialButtonProps extends SocialButtonProps {
  /**
   * Hover 時的內容
   */
  childrenOnHover: ReactNode;
}

/**
 * The scrollable social button.
 */
export function ScrollableSocialButton({
  className,
  childrenOnHover,
  children,
  ...props
}: ScrollableSocialButtonProps) {
  const commonChildrenStyle = "transition-transform duration-300";

  return (
    <SocialButton
      className={cx(
        className,
        "group",
        "relative overflow-hidden leading-none"
      )}
      {...props}
    >
      <div
        className={cx(
          "absolute",
          "translate-y-0 opacity-100",
          "group-hover:-translate-y-12 group-hover:opacity-0",
          commonChildrenStyle
        )}
      >
        {children}
      </div>
      <div
        className={cx(
          "translate-y-12 opacity-0",
          "group-hover:translate-y-0 group-hover:opacity-100",
          commonChildrenStyle
        )}
      >
        {childrenOnHover}
      </div>
    </SocialButton>
  );
}
