import "../styles/globals.css";
import "../styles/night-owl.css";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { components } from "../components/markdown";
import { Layout } from "../components/Layout";
import { ThemeProvider } from "../theme";
import { ClientOnly } from "components/ClientOnly";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, pageProps: AppProps) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider>
      <MDXProvider components={components}>
        <ClientOnly>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ClientOnly>
      </MDXProvider>
    </ThemeProvider>
  );
}
export default MyApp;
