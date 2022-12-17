import cx from "classix";

/**
 * The wrapper to place an article.
 */
export function Article({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"article">) {
  return <article className={cx(className, "leading-relaxed")} {...props} />;
}
