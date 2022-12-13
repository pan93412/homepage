import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import UserInfo from "./InfoBlock";

const SocialLinks = dynamic(() => import("./SocialBlock"));
const Introduction = dynamic(() => import("./Introduction"));

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
        title="關於"
        description="pan 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師。本頁面主要呈現其個人介紹。"
      />
      <main className="grid justify-between gap-12 md:grid-cols-2">
        <section>
          <div className="sticky top-8 flex flex-col gap-2 text-neutral-200">
            <UserInfo />
            <hr />
            <SocialLinks />
          </div>
        </section>
        <article className="article text-neutral-200">
          <Suspense fallback={<p>Hi 🥰</p>}>
            <Introduction />
          </Suspense>
        </article>
      </main>
    </>
  );
}
