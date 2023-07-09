import type { Metadata } from "next";
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
      <DynamicHeader />
      <section className="mx-auto max-w-3xl">{children}</section>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Pan93412 自介",
  themeColor: "#171717",
  twitter: {
    card: "summary",
    site: "@pan93412",
    creator: "@pan93412",
  },
  openGraph: {
    title: "Pan93412 的自介",
    description: "pan93412 是個來自台灣的程式開發者、翻譯員、UI/UX 設計師。這個網站是他的個人簡歷與各項作品集。",
    url: "https://pan93.com",
    type: "profile",
  }
}
