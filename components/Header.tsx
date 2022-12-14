import { cx } from "classix";
import Link from "next/link";
import React from "react";
import { type LinkProps } from "@utils/NextLinkProps";

/**
 * The available entries in the header
 */
export type HeaderEntry = "About" | "Portfolio" | "OSS";

/**
 * The configuration of Header.
 */
export interface HeaderProps {
  /**
   * Which one is active?
   */
  active?: HeaderEntry | null;
}

/**
 * Header component
 */
export function Header({ active }: HeaderProps) {
  return (
    <header className="mb-6 flex flex-col items-center justify-between gap-1 md:flex-row">
      <div className="block font-mono">
        <Link href="/">$ pan93412</Link>
      </div>
      <NavContainer>
        <NavItem href="/" active={active === "About"}>
          About
        </NavItem>
        <NavItem href="/portfolio" active={active === "Portfolio"}>
          Portfolio
        </NavItem>
        <NavItem href="/oss" active={active === "OSS"}>
          OSS
        </NavItem>
        {/* <NavItem href="/extras" active={active === "Extras"}>
          Extras
        </NavItem> */}
      </NavContainer>
    </header>
  );
}

/**
 * The navigation container of {@link Header}.
 */
export function NavContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  return (
    <nav>
      <ul
        className={cx(
          className,
          "NavContainer",
          "list-none",
          "grid gap-x-2",
          "auto-cols-fr grid-flow-col",
          "transition-all"
        )}
        {...props}
      />
    </nav>
  );
}

/**
 * The navigation item of {@link Header}.
 */
export function NavItem({
  className,
  active,
  children,
  ...props
}: LinkProps & {
  /**
   * Is this entry active?
   */
  active?: boolean;
}) {
  return (
    <Link {...props}>
      <li
        className={cx(
          className,
          "NavItem",
          "transition-all ease-in-out",
          "rounded py-1 px-2",
          "min-w-21",
          "text-center",
          "hover:bg-neutral-800",
          active && "bg-neutral-800 font-bold"
        )}
      >
        {children}
      </li>
    </Link>
  );
}

export default Header;
