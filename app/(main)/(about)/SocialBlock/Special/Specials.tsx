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
  return (
    <SocialButton
      className={cx(
        className,
        "SpecializedSocialButton",
        "group",
        "relative overflow-hidden leading-none",
        // The common style of children
        "[&>*]:transition-transform [&>*]:duration-300"
      )}
      {...props}
    >
      <div
        className="
          SpecializedSocialButton-main
          absolute
          translate-y-0 opacity-100
          group-hover:-translate-y-12 group-hover:opacity-0"
      >
        {children}
      </div>
      <div
        className="
          SpecializedSocialButton-hover
          translate-y-12 opacity-0
          group-hover:translate-y-0 group-hover:opacity-100"
      >
        {childrenOnHover}
      </div>
    </SocialButton>
  );
}
