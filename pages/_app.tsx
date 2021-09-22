import "../styles/globals.css";
import "../styles/night-owl.css";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { components } from "../components/markdown";
import { Layout } from "../components/Layout";
import { ThemeProvider } from "../theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, pageProps: AppProps) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ThemeProvider>
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>,
    pageProps
  );
}
export default MyApp;
