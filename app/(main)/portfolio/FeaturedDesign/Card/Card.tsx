import Image from "next/image";
import cx from "classix";
import { useMemo } from "react";
import { BsArrowRight } from "react-icons/bs";
import { type Work } from "../types";
import { transitionClass } from "./styles";

/**
 * The props of {@link DesignWorkCard}
 */
export type DesignWorkCardProps = Omit<Work, "id">;

/**
 * The card placing a design work.
 */
export function DesignWorkCard({
  name,
  description,
  designUrl,
  imageUrl,
  date,
}: DesignWorkCardProps) {
  return (
    <a
      href={designUrl}
      title={`navigate to design ${name}`}
      target="_blank"
      rel="noreferrer"
      className="DesignCard group h-[1fr]"
    >
      <Container>
        <Content>
          <Header>
            <Title name={name} date={date} />
            <RightArrow />
          </Header>
          <Description>{description}</Description>
        </Content>
        <Background name={name} imageUrl={imageUrl} />
      </Container>
    </a>
  );
}

/**
 * The container of {@link DesignWorkCard}.
 */
function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        className,
        "relative overflow-hidden",
        "rounded-2xl",
        "relative"
      )}
      {...props}
    />
  );
}

/**
 * The content of {@link DesignWorkCard}
 */
function Content({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={cx(className, "flex flex-col", "gap-12 px-5 py-4")}
      {...props}
    />
  );
}

/**
 * The header of {@link FeaturedDesign}
 */
function Header({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"header">) {
  return (
    <header
      className={cx(className, "flex justify-between items-center")}
      {...props}
    />
  );
}

/**
 * The description of {@link DesignWorkCard}.
 */
function Description({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cx(
        className,
        transitionClass,
        "leading-6 opacity-100 group-hover:opacity-0"
      )}
      {...props}
    />
  );
}

/**
 * The props of {@link Title}
 */
type HeaderProps = Pick<DesignWorkCardProps, "name" | "date">;

/**
 * The title (name of work & date) of a card.
 */
function Title({ name: title, date }: HeaderProps) {
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
    <div className={cx("flex flex-col-reverse gap-1.5")}>
      {/* H3: Title > Section > This Block */}
      <h3 className="text-white text-2xl leading-tight reset">{title}</h3>
      <p
        className={cx(
          "text-neutral-300 group-hover:text-neutral-100",
          "transition-opacity",
          transitionClass,
          "text-sm leading-none"
        )}
      >
        {humanReadableDate}
      </p>
    </div>
  );
}

/**
 * The right arrow indicator with the transitionClass.
 *
 * It is the indicator of DesignCard.
 */
function RightArrow() {
  return (
    <div
      className={cx(
        "DesignCard-indicator",
        "transition",
        transitionClass,
        "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
      )}
    >
      <BsArrowRight />
    </div>
  );
}

/**
 * The background of the card.
 */
function Background({
  name,
  imageUrl,
}: Pick<DesignWorkCardProps, "name" | "imageUrl">) {
  if (!imageUrl) return null;

  return (
    <>
      <div
        className={cx(
          transitionClass,
          "transition-opacity",
          "-z-10",
          "absolute left-0 top-0 w-full h-full",
          "bg-neutral-800",
          "opacity-75 group-hover:opacity-50"
        )}
      />
      <Image
        className="-z-20 object-cover"
        fill
        src={imageUrl}
        alt={`The background image of ${name}`}
        unoptimized
      />
    </>
  );
}
