"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirstView = useRef(true);

  useEffect(() => {
    if (isFirstView.current) {
      isFirstView.current = false;
      return;
    }

    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
