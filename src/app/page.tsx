"use client";

import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    const stored = localStorage.getItem("locale");
    const locale = stored || "en";
    window.location.replace(`/${locale}`);
  }, []);

  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-200 border-t-amber-500" />
    </div>
  );
}
