import { cx } from "classix";
import Link from "next/link";
import React from "react";

/**
 * The available entries in the header
 */
export type HeaderEntry = "About" | "Portfolio" | "Speeches" | "OSS";

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
      <div className="Name block font-mono">
        <Link href="/">$ pan93412</Link>
      </div>
      <NavContainer>
        <NavItem href="/" active={active === "About"}>
          About
        </NavItem>
        <NavItem href="/portfolio" active={active === "Portfolio"}>
          Portfolio
        </NavItem>
        <NavItem href="/speeches" active={active === "Speeches"}>
          Speeches
        </NavItem>
        <NavItem href="/oss" active={active === "OSS"}>
          OSS
        </NavItem>
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
          "inline list-none space-x-6 transition-all"
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
  ...props
}: (typeof Link extends (p: infer P) => unknown ? P : never) & {
  /**
   * Is this entry active?
   */
  active?: boolean;
}) {
  return (
    <li
      className={cx(
        className,
        "NavItem",
        "inline",
        "transition-all ease-in-out",
        "rounded py-1 px-2",
        "hover:bg-neutral-800",
        active && "bg-neutral-800 font-bold"
      )}
    >
      <Link {...props} />
    </li>
  );
}

export default Header;
