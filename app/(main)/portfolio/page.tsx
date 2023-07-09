import React from "react";
import { Suspense } from "react";
import PinnedRepo from "./PinnedRepo";
import FeaturedDesign from "./FeaturedDesign";
import PageHeader from "@components/PageHeader";

// Update every 12 hours.
export const revalidate = 43200; // 12hr

export const metadata = {
  title: "作品集",
};

/**
 * A page is UI that is unique to a route.
 * @see https://beta.nextjs.org/docs/api-reference/file-conventions/page
 */
export default function Page() {
  return (
    <>
      <main>
        <PageHeader
          title="作品集"
          description="pan 的程式專案、設計作品集，以及一些其他東西 🥰"
        />

        <div className="space-y-4">
          {/* Pinned Repositories */}
          <section>
            <h2>Pinned Repositories</h2>

            <Suspense fallback={<div>Loading repositories…</div>}>
              {/* @ts-expect-error Server Component */}
              <PinnedRepo />
            </Suspense>
          </section>

          {/* Featured Designs */}
          <section>
            <h2>Featured Designs</h2>

            <Suspense fallback={<div>Loading designs…</div>}>
              {/* @ts-expect-error Server Component */}
              <FeaturedDesign />
            </Suspense>
          </section>
        </div>
      </main>
    </>
  );
}
