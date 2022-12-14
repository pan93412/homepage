import cx from "classix";
import { useMemo } from "react";
import { type DesignWorkCardProps } from "./Card";
import { transitionClass } from "./styles";

/**
 * The props of {@link Title}
 */
export type HeaderProps = Pick<DesignWorkCardProps, "name" | "date">;

/**
 * The title (name of work & date) of a card.
 */
export default function Title({ name: title, date }: HeaderProps) {
  const humanReadableDate = useMemo(
    () =>
      date.toLocaleDateString("zh-tw", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }),
    [date]
  );

  return (
    <div className={cx("DesignCard-title", "flex flex-col-reverse gap-1")}>
      {/* H3: Title > Section > This Block */}
      <h3 className="text-white text-2xl leading-none reset">{title}</h3>
      <p
        className={cx(
          "text-neutral-500 group-hover:text-neutral-300",
          transitionClass,
          "text-sm leading-none"
        )}
      >
        {humanReadableDate}
      </p>
    </div>
  );
}
