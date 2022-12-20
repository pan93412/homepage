import cx from "classix";

/**
 * The container to place cards.
 */
export function DesignWorkCards({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(className, "grid gap-4 grid-cols-1 md:grid-cols-2")}
      {...props}
    ></div>
  );
}
