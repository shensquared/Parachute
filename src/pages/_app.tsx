import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Inter } from "@next/font/google";
import Head from "next/head";

import { api } from "../utils/api";

import "../styles/globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// https://stackoverflow.com/questions/70717224/how-to-define-a-custom-base-path-when-nextauth-url-doesnt-work
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head><title>Self-hosted When2Meet | Shen Shen</title></Head>
    <main className={`${inter.variable} font-inter`}>
      <SessionProvider session={session} basePath='/w2m/api/auth'>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
    </>
  );
};

export default api.withTRPC(MyApp);
