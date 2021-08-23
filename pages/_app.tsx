import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { components } from "../components/markdown";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, pageProps: AppProps) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>,
    pageProps
  );
}
export default MyApp;
