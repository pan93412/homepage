import cx from "classix";
import { BsArrowRight } from "react-icons/bs";
import { transitionClass } from "./styles";

/**
 * The right arrow indicator with the transitionClass.
 *
 * It is the indicator of DesignCard.
 */
export function RightArrow() {
  return (
    <div
      className={cx(
        "DesignCard-indicator",
        transitionClass,
        "opacity-0 group-hover:opacity-100"
      )}
    >
      <BsArrowRight />
    </div>
  );
}
