import cx from "classix";
import React from "react";

/**
 * The container to place cards.
 */
export function RepoCards({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(className, "Cards grid grid-cols-4 gap-2")}
      {...props}
    ></div>
  );
}