import { ReactElement } from "react";
import type { AppProps } from "next/app";

const Layout = ({
  children,
  pageProps,
}: {
  children: ReactElement;
  pageProps: AppProps;
}) => {
  return <div>{children}</div>;
};

export default Layout;
