/**
 * A design work representation in Airtable.
 */
export interface Work {
  /**
   * The id of work.
   */
  id: string;
  /**
   * The name of this work.
   */
  name: string;
  /**
   * The introduction or description of this work.
   */
  description: string;
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
  imageUrl?: string | null;
}
