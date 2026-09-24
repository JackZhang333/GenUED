"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

import { CommandMenu } from "@/components/CommandMenu";
import { MobileNavMenu } from "@/components/MobileNavMenu";

import { GlobalTopBar } from "./GlobalTopBar";

export function ClientShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  // Portfolio case studies have their own full-width layout and navigation.
  if (pathname.startsWith("/profile/")) {
    return <>{children}</>;
  }

  return (
    <>
      <Toaster position="bottom-center" />
      <CommandMenu />
      <MobileNavMenu />
      <GlobalTopBar />
      <main data-main-content className="relative isolate mx-auto flex min-h-svh w-full min-w-0">
        {children}
      </main>
    </>
  );
}
