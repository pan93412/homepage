import { NextSeo } from "next-seo";
import Header from "@components/Header";

/**
 * Portfolio page.
 */
export default function Layout({
  children,
}: {
  // eslint-disable-next-line jsdoc/require-jsdoc
  children: React.ReactNode;
}) {
  return (
    <>
      <NextSeo
        useAppDir
        title="作品集"
        description="pan 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師。本頁面主要呈現其個人專案和作品。"
      />
      <Header active="Portfolio" />
      <section className="mx-auto max-w-3xl">{children}</section>
    </>
  );
}
