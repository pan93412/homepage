import classNames from "classnames";
import Link from "next/link";
import React from "react";

/**
 * The available props is as same as what `Link` provides.
 */
type LinkProps = typeof Link extends (p: infer P) => unknown
  ? Omit<P, "ref">
  : never;

/**
 * The wrapper of `next/link`, with some customized styles.
 */
export const LinkBlock = React.forwardRef(function LinkBlockBase(
  { className, ...props }: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Link
      className={classNames("LinkBlock", "underline", className)}
      ref={ref}
      {...props}
    />
  );
});
