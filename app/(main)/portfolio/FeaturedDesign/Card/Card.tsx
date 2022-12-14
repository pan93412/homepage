import Image from "next/image";
import { type ReactNode } from "react";
import { RightArrow } from "./RightArrow";
import Title from "./Title";
import "./Card.scss";

/**
 * The props of {@link DesignWorkCard}
 */
export interface DesignWorkCardProps {
  /**
   * The name of this work.
   */
  name: string;
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
      className="DesignCard group"
    >
      <div className="DesignCard-container">
        <div className="DesignCard-content">
          <div className="DesignCard-header">
            <Title name={name} date={date} />
            <RightArrow />
          </div>
          <div className="DesignCard-description">{description}</div>
        </div>
        <div className="DesignCard-overlay" />
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
  return (
    <Image
      className="DesignCard-background"
      fill
      src={imageUrl}
      alt={`The background image of ${name}`}
      unoptimized
    />
  );
}
