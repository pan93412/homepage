import { type LinkProps } from "@utils/NextLinkProps";
import { cx } from "classix";
import Link from "next/link";
import React from "react";

/**
 * The wrapper of `next/link`, with some customized styles.
 */
export const Href = React.forwardRef(function LinkBlockBase(
  { className, ...props }: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Link
      className={cx(className, "LinkBlock", "underline")}
      ref={ref}
      {...props}
    />
  );
});

export default Href;
