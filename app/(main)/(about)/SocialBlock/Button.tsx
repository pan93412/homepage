import cx from "classix";
import Link from "next/link";
import { type ReactNode } from "react";

/**
 * The configuration for {@link SocialButton}.
 */
export interface SocialButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * The name of this social platform.
   */
  name: string;
  /**
   * The content of the button.
   *
   * For example, an icon.
   */
  children: ReactNode;
  /**
   * The link to redirect to.
   */
  href: string;
}

/**
 * The button that can redirect users to the corresponding social platform.
 */
export function SocialButton({
  name,
  children,
  href,
  className,
  ...props
}: SocialButtonProps) {
  return (
    <Link href={href} rel="nofollow">
      <button
        type="button"
        className={cx(
          className,
          "block rounded hover:bg-neutral-800",
          "w-full p-4",
          "transition"
        )}
        aria-label={`Pan's social platform on ${name}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
}
