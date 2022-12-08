import classNames from "classnames";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { featuredName } from "./featuredHeader";
import "./header.css";

/**
 * The available entries in the header
 */
export type HeaderEntry = "About" | "Projects" | "Speeches" | "Contributions";

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
  const name = useMemo(() => featuredName("Pan93412"), []);
  const activeClass = useCallback(
    (entry: HeaderEntry) => {
      return classNames(
        "transition transition-all ease-in-out",
        "py-1 px-2 rounded",
        {
          "font-bold bg-neutral-800": entry === active,
          "hover:bg-neutral-800": entry !== active,
        }
      );
    },
    [active]
  );

  return (
    <header className="mb-6 flex flex-col items-center justify-between gap-1 md:flex-row">
      <div className="Name block font-mono">{name}</div>
      <nav>
        <ul className="Nav inline list-none space-x-6 transition-all">
          <li className={activeClass("About")}>
            <Link href="/">About</Link>
          </li>
          <li className={activeClass("Projects")}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={activeClass("Speeches")}>
            <Link href="/speeches">Speeches</Link>
          </li>
          <li className={activeClass("Contributions")}>
            <Link href="/contrib">Contributions</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
