import Link from "next/link";
import { type ReactNode } from "react";

/**
 * The configuration for Social Buttons.
 */
export interface SocialButtonProps {
  /**
   * The name of this social platform.
   */
  name: string;
  /**
   * The content of the button.
   */
  children: ReactNode;
  /**
   * The link of this button.
   */
  href: string;
}

/**
 * The button that can redirect users to the corresponding social platform.
 */
export function SocialButton({ name, children, href }: SocialButtonProps) {
  return (
    <Link href={href} rel="nofollow">
      <button
        type="button"
        className="SocialButton block w-max rounded p-4 transition hover:bg-neutral-800"
        aria-label={`Pan's social platform on ${name}`}
      >
        {children}
      </button>
    </Link>
  );
}
