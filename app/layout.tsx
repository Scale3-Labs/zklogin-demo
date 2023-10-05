import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Suspense } from "react";
import { inter, sfPro } from "./fonts";
import "./globals.css";
// import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Scale3 zkLogin - Authentication for your next project on Sui",
  description:
    "Scale3 zkLogin is the all-in-one solution for your next project on Sui. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Scale3 zkLogin - Authentication for your next project on Sui",
    description:
      "Scale3 zkLogin is the all-in-one solution for your next project on Sui. It includes a design system, authentication, analytics, and more.",
    creator: "@scale3labs",
  },
  metadataBase: new URL("https://zklogin.scale3labs.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-purple-200 via-white to-blue-200" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}
