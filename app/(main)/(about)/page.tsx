import { NextSeo } from "next-seo";
import React from "react";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import UserInfo from "./InfoBlock";
import { Article } from "@components/Article";

const SocialLinks = React.lazy(() => import("./SocialBlock"));

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
      <main className="TwoColumns">
        <section>
          <div className="sticky top-8 flex flex-col gap-2">
            <UserInfo />
            <hr />
            <Suspense
              fallback={<p>Hold on, loading Pan&apos;s social accounts…</p>}
            >
              <SocialLinks />
            </Suspense>
          </div>
        </section>
        <Article>
          <section className="ProgrammingSkill">
            <h2>程式能力</h2>
            <p>
              我主要是寫 Rust、TypeScript、Python 以及一些 scripts (POSIX sh,
              fish, etc.)。算是個雜食型工程師 😂 知名專案可以參考{" "}
              <Link className="pure" href="/portfolio">
                Portfolio
              </Link>
              。
            </p>
          </section>

          <section className="TranslatingSkill">
            <h2>翻譯能力</h2>
            <p>
              我目前是 Git、GNU nano、Weblate、Keka、OBS Studio
              等軟體的長期翻譯員，也是{" "}
              <Link className="pure" href="https://t.me/l10n_tw">
                @l10n-tw
              </Link>{" "}
              的成員。 在本地化方面有一些經驗，歡迎來 l10n-tw 回饋翻譯或交流意見
              ✌️
            </p>
          </section>

          <section className="DesigningSkill">
            <h2>設計能力</h2>
            <p>
              尚是業餘設計師，仍在持續學習 🏃！目前是 Open-Edu-Tw/CourseAPI 的
              UI/UX 設計師，除此之外也設計過不少業餘作品，但目前還沒有整理作品集
              orz
            </p>
          </section>

          <section className="GitHubStats">
            <h2>GitHub 統計資訊</h2>
            <Image
              src="https://github-readme-stats.vercel.app/api?username=pan93412&count_private=true&show_icons=true&bg_color=90,DAFFEF,FCFFFD"
              alt="GitHub Stats"
              width={300}
              height={195 * (300 / 495)}
              unoptimized
            />
            <Image
              className="pt-2"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=pan93412&bg_color=90,DAFFEF,FCFFFD"
              alt="GitHub - Language Stats"
              width={300}
              height={285}
              unoptimized
            ></Image>
          </section>
        </Article>
      </main>
    </>
  );
}
