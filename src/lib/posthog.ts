import PostHog from "posthog-js";

export const initPostHog = () => {
    if (typeof window === "undefined") return; // Ensure this runs only in the browser
    if (PostHog.__loaded) return; // Prevent re-initialization

    PostHog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: true,
        capture_pageleave: true,
        autocapture: false,
        persistence: "memory",
    });
};

export { PostHog as posthog };