import PinnedRepo from "./PinnedRepo";

/**
 * The page of portfolio (`/`)
 */
export default function Page() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PinnedRepo />
    </>
  );
}
