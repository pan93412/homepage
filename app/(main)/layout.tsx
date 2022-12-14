import { NextSeo } from "next-seo";
import { DynamicHeader } from "./DynamicHeader";

/**
 * The layout of main app (`/*`)
 */
export default function MainAppLayout({
  children,
}: {
  /**
   * The page component
   */
  children: React.ReactNode;
}) {
  return (
    <div className="px-12 py-8 leading-relaxed">
      <Seo />
      <DynamicHeader />
      <section className="mx-auto max-w-3xl">{children}</section>
    </div>
  );
}

/**
 * The common SEO information.
 */
function Seo() {
  return (
    <NextSeo
      useAppDir={true}
      titleTemplate="Pan93412 自介｜%s"
      themeColor="#171717"
      canonical="https://pan93.com"
      twitter={{
        cardType: "summary",
        site: "@pan93412",
        handle: "@pan93412",
      }}
      openGraph={{
        title: "Pan93412 的自介",
        description:
          "pan93412 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師。" +
          "這個網站是他的個人簡歷與各項作品集。",
        url: "https://pan93.com",
        type: "profile",
        profile: {
          firstName: "Yi-Jyun",
          lastName: "Pan",
          username: "pan93412",
          gender: "male",
        },
      }}
    />
  );
}
