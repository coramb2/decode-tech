"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initPostHog, posthog } from "@/lib/posthog";

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    initPostHog();
    posthog.capture("$pageview", { path: pathname });
  }, []);

  useEffect(() => {
    if (!posthog.__loaded) return;
    posthog.capture("$pageview", { path: pathname });
  }, [pathname]);

  return <>{children}</>;
}