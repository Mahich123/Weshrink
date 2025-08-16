"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function CopyButton({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(text)}>
      {children}
    </Button>
  );
}
