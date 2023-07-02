import "server-only";
import Airtable, { type Attachment } from "airtable";
import { type Work } from "./types";

/**
 * Our schema of Airtable.
 * @see {@link Work}
 */
type AirtableSchema = {
  // eslint-disable-next-line jsdoc/require-jsdoc
  Name: string;
  // eslint-disable-next-line jsdoc/require-jsdoc
  Description: string;
  // eslint-disable-next-line jsdoc/require-jsdoc
  "Authored on": string;
  // eslint-disable-next-line jsdoc/require-jsdoc
  "Figma URL": string;
  // eslint-disable-next-line jsdoc/require-jsdoc
  Screenshot: Attachment[];
};

/**
 * Get the pinned repos from GitHub.
 */
export async function getWorks(): Promise<Work[]> {
  const BASE_KEY = "appqrvtdqDJDwSnie";
  const TABLE_NAME = "Figma 作品";

  const apiKey = process.env.AIRTABLE_API_KEY;

  if (!apiKey) {
    throw new Error("Airtable API key is not defined.");
  }

  const base = new Airtable({ apiKey }).base(BASE_KEY);
  const data = await base.table<AirtableSchema>(TABLE_NAME).select().all();

  return data.map(
    (item) =>
      ({
        id: item.getId(),
        name: item.get("Name"),
        description: item.get("Description"),
        date: new Date(item.get("Authored on")),
        designUrl: item.get("Figma URL"),
        imageUrl: item.get("Screenshot").at(0)?.url,
      } satisfies Work)
  );
}
