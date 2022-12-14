import { cx } from "classix";
import Image from "next/image";
import { type ReactNode, useMemo } from "react";
import { BsArrowRight } from "react-icons/bs";

/**
 * The props of {@link DesignWorkCard}
 */
export interface DesignWorkCardProps {
  /**
   * The name of this work.
   */
  title: string;
  /**
   * The introduction or description of this work.
   */
  description: ReactNode;
  /**
   * The date when this work made.
   */
  date: Date;
  /**
   * The URL to the design file.
   */
  designUrl: string;
  /**
   * The thumbnail image URL of this work.
   */
  imageUrl: string;
}

/**
 * The card placing a design work.
 */
export function DesignWorkCard({
  title,
  description,
  designUrl,
  imageUrl,
  date,
}: DesignWorkCardProps) {
  const transitionClass = "transition duration-300";

  return (
    <a
      href={designUrl}
      title={`navigate to design ${title}`}
      target="_blank"
      rel="noreferrer"
      className="DesignCard group"
    >
      <div
        className={cx(
          "DesignCard-container",
          "transition relative overflow-hidden",
          "rounded-2xl",
          "relative",
          "group-hover:shadow group-hover:shadow-neutral-800"
        )}
      >
        <div
          className={cx(
            "DesignCard-content",
            "flex flex-col",
            "gap-12 px-5 py-4"
          )}
        >
          <div
            className={cx(
              "DesignCard-header",
              "flex justify-between items-center"
            )}
          >
            <div
              className={cx("DesignCard-title", "flex flex-col-reverse gap-1")}
            >
              {/* H3: Title > Section > This Block */}
              <h3 className="text-white text-2xl leading-none reset">
                {title}
              </h3>
              <p className="text-neutral-500 group-hover:text-neutral-300 text-sm leading-none">
                {useMemo(
                  () =>
                    date.toLocaleDateString("zh-tw", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    }),
                  [date]
                )}
              </p>
            </div>
            <div
              className={cx(
                "DesignCard-indicator",
                transitionClass,
                "opacity-0 group-hover:opacity-100"
              )}
            >
              <BsArrowRight />
            </div>
          </div>
          <div
            className={cx(
              "DesignCard-description",
              "leading-6",
              transitionClass,
              "group-hover:opacity-0"
            )}
          >
            {description}
          </div>
        </div>
        <div
          className={cx(
            "DesignCard-Overlay",
            "-z-10",
            "absolute left-0 top-0 w-full h-full",
            transitionClass,
            "bg-gradient-to-b from-neutral-800/60 to-neutral-800",
            "opacity-100 group-hover:opacity-50"
          )}
        />
        <Image
          className={cx("DesignCard-image", "-z-20", "object-cover")}
          fill
          src={imageUrl}
          alt={`The background image of ${title}`}
          unoptimized
        />
      </div>
    </a>
  );
}
