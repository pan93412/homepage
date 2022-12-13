import dynamic from "next/dynamic";
import { Suspense } from "react";
import UserInfo from "./InfoBlock";

const SocialLinks = dynamic(() => import("./SocialBlock"));
const Introduction = dynamic(() => import("./Introduction"));

/**
 * The page of main app (`/`)
 */
export default function Page() {
  return (
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
  );
}
