import PostHog from "posthog-js";

export const initPostHog = () => {
  if (typeof window === "undefined") return;
  if ((PostHog as any).__loaded) return;

  PostHog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false, // we handle this manually
    capture_pageleave: true,
    autocapture: false,
    persistence: "memory",
  });
};

export { PostHog as posthog };