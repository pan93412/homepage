import Image from "next/image";
import { type Work } from "../types";
import { RightArrow } from "./RightArrow";
import Title from "./Title";
import "./Card.scss";

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
      <div className="DesignCard-container">
        <div className="DesignCard-content">
          <div className="DesignCard-header">
            <Title name={name} date={date} />
            <RightArrow />
          </div>
          <div className="DesignCard-description">{description}</div>
        </div>
        <CardBackground name={name} imageUrl={imageUrl} />
      </div>
    </a>
  );
}

/**
 * The background of the card.
 */
function CardBackground({
  name,
  imageUrl,
}: Pick<DesignWorkCardProps, "name" | "imageUrl">) {
  if (!imageUrl) return null;

  return (
    <>
      <div className="DesignCard-overlay" />
      <Image
        className="DesignCard-background"
        fill
        src={imageUrl}
        alt={`The background image of ${name}`}
        unoptimized
      />
    </>
  );
}
