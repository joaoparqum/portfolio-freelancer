import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={twMerge("bg-zinc-500 px-1 py-0.5 rounded-lg", className)}>
      {children}
    </span>
  );
};
