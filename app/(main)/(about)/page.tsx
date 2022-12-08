import { LinkBlock } from "../../../components/Core/LinkBlock";
import { UserInfo } from "./Info";
import { SocialLinks } from "./Social";

/**
 * The page of main app (`/`)
 */
export default function Page() {
  return (
    <main className="mx-auto grid max-w-3xl justify-between gap-12 md:grid-cols-2">
      <section className="flex flex-col gap-2">
        <UserInfo />
        <hr />
        <SocialLinks />
      </section>
      <article className="article">
        <section className="ProgrammingSkill">
          <h2>程式能力</h2>
          <p>
            我主要是寫 Rust、TypeScript、Python 以及一些 scripts (POSIX sh,
            fish, etc.)。算是個雜食型工程師 😂 知名專案可以參考{" "}
            <LinkBlock href="/projects">Projects</LinkBlock>。
          </p>
        </section>

        <section className="TranslatingSkill">
          <h2>翻譯能力</h2>
          <p>
            我目前是 Git、GNU nano、Weblate、Keka、OBS Studio
            等軟體的長期翻譯員，也是{" "}
            <LinkBlock href="https://t.me/l10n_tw">@l10n-tw</LinkBlock> 的成員。
            在本地化方面有一些經驗，歡迎來 l10n-tw 回饋翻譯或交流意見 ✌️
          </p>
        </section>

        <section className="DesigningSkill">
          <h2>設計能力</h2>
          <p>
            尚是業餘設計師，仍在持續學習 🏃！目前是 Open-Edu-Tw/CourseAPI 的
            UI/UX 設計師， 除此之外也設計過不少業餘作品，但目前還沒有整理作品集
            orz
          </p>
        </section>
      </article>
    </main>
  );
}
