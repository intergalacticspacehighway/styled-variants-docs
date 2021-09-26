import React, { useEffect, useLayoutEffect } from "react";

export const ClientOnly = ({ children }: any) => {
  const [mounted, setMounted] = React.useState(false);
  const effect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  effect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : null;
};
