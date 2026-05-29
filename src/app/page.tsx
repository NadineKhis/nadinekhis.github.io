"use client";

import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    const stored = localStorage.getItem("locale");
    let locale = stored;
    if (!locale) {
      const navLang = navigator.language?.startsWith("ru") ? "ru" : "en";
      locale = navLang;
      localStorage.setItem("locale", locale);
    }
    window.location.replace(`/${locale}`);
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-200 border-t-amber-500" />
    </div>
  );
}
