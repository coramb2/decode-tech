import posthog from "posthog-js";

export const initPostHog = () => {
  if (typeof window === "undefined") return;
  if (posthog.__loaded) return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "https://us.i.posthog.com",
    defaults: "2026-01-30",
  });
};

export { posthog };