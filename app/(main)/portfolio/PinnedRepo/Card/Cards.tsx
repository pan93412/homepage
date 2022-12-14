import cx from "classix";

/**
 * The container to place cards.
 */
export function RepoCards({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        className,
        "Cards grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
      )}
      {...props}
    ></div>
  );
}
