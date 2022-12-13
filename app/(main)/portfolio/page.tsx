import { NextSeo } from "next-seo";
import React from "react";
import { Suspense } from "react";
import PinnedRepo from "./PinnedRepo";
import PageHeader from "@components/PageHeader";

/**
 * A page is UI that is unique to a route.
 *
 * @see https://beta.nextjs.org/docs/api-reference/file-conventions/page
 */
export default function Page() {
  return (
    <>
      <NextSeo
        useAppDir
        title="作品集"
        description="pan 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師。本頁面主要呈現其個人專案和作品。"
      />

      <main>
        <PageHeader
          title="作品集"
          description="pan 的程式專案、設計作品集，以及一些其他東西 🥰"
        />

        <div className="TwoColumns">
          <section className="PinnedRepo">
            <h2>Pinned Repositories</h2>

            <Suspense fallback={<div>Loading repositories…</div>}>
              {/* @ts-expect-error Server Component */}
              <PinnedRepo />
            </Suspense>
          </section>
          <section className="PublishedDesign">
            <h2>Published Designs</h2>
            <p>WIP</p>
          </section>
        </div>
      </main>
    </>
  );
}
