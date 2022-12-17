import cx from "classix";

/**
 * The badge component to tag something.
 */
export function Badge({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(className, "rounded bg-neutral-800 px-1.5 py-2")}
      {...props}
    />
  );
}
