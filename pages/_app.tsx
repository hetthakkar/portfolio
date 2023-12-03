import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  if (Component.displayName === "Waves") {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} firstName={"Het"} lastName={"Thakkar"} />
      <Analytics />
    </Layout>
  );
}
export default MyApp;
