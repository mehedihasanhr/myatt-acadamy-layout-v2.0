"use client";

import { useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return null;
}
