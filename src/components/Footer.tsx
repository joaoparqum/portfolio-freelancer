"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-white border-t border-neutral-500">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; João Paulo Arquim
    </div>
  );
};
