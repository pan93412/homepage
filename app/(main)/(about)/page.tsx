import dynamic from "next/dynamic";
import { Suspense } from "react";
import { UserInfo } from "./Info";

const SocialLinks = dynamic(() => import("./Social"));
const Introduction = dynamic(() => import("./Introduction"));

/**
 * The page of main app (`/`)
 */
export default function Page() {
  return (
    <main className="mx-auto grid max-w-3xl justify-between gap-12 md:grid-cols-2">
      <section>
        <div className="sticky top-8 flex flex-col gap-2">
          <UserInfo />
          <hr />
          <SocialLinks />
        </div>
      </section>
      <article className="article">
        <Suspense fallback={<p>Hi 🥰</p>}>
          <Introduction />
        </Suspense>
      </article>
    </main>
  );
}
