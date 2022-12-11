/**
 * Specials: The social button that provides some
 * additional features, such as “followers count”.
 */

import classNames from "classnames";
import { type ReactNode } from "react";
import { SocialButton, type SocialButtonProps } from "./Button";

/**
 * The specialized social button, including
 * some cool features such as
 * “change content on hovering”.
 */
export function SpecializedSocialButton({
  className,
  childrenOnHover,
  children,
  ...props
}: SocialButtonProps & {
  /**
   * Hover 時的內容
   */
  childrenOnHover: ReactNode;
}) {
  return (
    <SocialButton
      className={classNames(
        className,
        "SocialButtonWithFollowers",
        "group relative overflow-hidden leading-none"
      )}
      {...props}
    >
      <div
        className="
          absolute
          translate-y-0 opacity-100
          transition-transform
          group-hover:-translate-y-12 group-hover:opacity-0"
      >
        {children}
      </div>
      <div
        className="
            block
            translate-y-12 opacity-0
            transition-transform
            group-hover:translate-y-0 group-hover:opacity-100"
      >
        {childrenOnHover}
      </div>
    </SocialButton>
  );
}
