import "./globals.css";
import "./article.css";
// eslint-disable-next-line camelcase
import { Cabin, IBM_Plex_Mono } from "@next/font/google";
import Local from "@next/font/local";
import { NextSeo } from "next-seo";
import cx from "classix";

// eslint-disable-next-line new-cap
const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  preload: true,
});

// eslint-disable-next-line new-cap
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["700"],
});

// eslint-disable-next-line new-cap
const harmonyosSans = Local({
  src: [
    // {
    //   path: "../vendor/harmonyos-font/HarmonyOS_Sans_TC/HarmonyOS_Sans_TC_Black.woff2",
    //   weight: "900",
    // },
    {
      path: "../vendor/harmonyos-font/HarmonyOS_Sans_TC/HarmonyOS_Sans_TC_Bold.woff2",
      weight: "700",
    },
    // {
    //   path: "../vendor/harmonyos-font/HarmonyOS_Sans_TC/HarmonyOS_Sans_TC_Medium.woff2",
    //   weight: "500",
    // },
    {
      path: "../vendor/harmonyos-font/HarmonyOS_Sans_TC/HarmonyOS_Sans_TC_Regular.woff2",
      weight: "400",
    },
    // {
    //   path: "../vendor/harmonyos-font/HarmonyOS_Sans_TC/HarmonyOS_Sans_TC_Light.woff2",
    //   weight: "300",
    // },
    // {
    //   path: "../vendor/harmonyos-font/HarmonyOS_Sans_TC/HarmonyOS_Sans_TC_Thin.woff2",
    //   weight: "100",
    // },
  ],
  variable: "--font-harmony",
  preload: true,
});

/**
 * The root layout.
 */
export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line jsdoc/require-jsdoc
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-tw"
      className={cx(
        cabin.variable,
        harmonyosSans.variable,
        ibmPlexMono.variable
      )}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </head>
      <body>{children}</body>
    </html>
  );
}
