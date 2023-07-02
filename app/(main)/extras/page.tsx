import { NextSeo } from "next-seo";
import { notFound } from "next/navigation";
import PageHeader from "@components/PageHeader";

/**
 * A page is UI that is unique to a route.
 * @see https://beta.nextjs.org/docs/api-reference/file-conventions/page
 */
export default function Page() {
  // We don't have any content for this page yet, so we'll just return a 404.
  return notFound();

  return (
    <>
      <NextSeo
        useAppDir
        title="其他內容"
        description="pan 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師。本頁面主要呈現其他資訊，如演講記錄。"
      />
      <main>
        <PageHeader title="其他內容" description="演講記錄以及各種雜項。" />
        <p>目前這裡面還沒有內容，只是先擺著而已～</p>
      </main>
    </>
  );
}
