import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-4xl w-full mx-auto py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-10`}>
      <div className="w-full space-y-6 sm:space-y-8">
        {children}
      </div>
    </main>
  );
};
