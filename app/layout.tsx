import "@styles/globals.scss";
// eslint-disable-next-line camelcase
import { Cabin, IBM_Plex_Mono } from "@next/font/google";
import Local from "@next/font/local";
import cx from "classix";
import { AnalyticsWrapper } from "./analytics";

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
      <AnalyticsWrapper />
      <body>{children}</body>
    </html>
  );
}
