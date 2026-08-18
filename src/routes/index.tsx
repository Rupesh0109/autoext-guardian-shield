import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoExt — Vehicle Fire Detection & Suppression" },
      {
        name: "description",
        content:
          "AutoExt builds intelligent multi-sensor fire detection and suppression systems for ICE engine bays and EV battery packs.",
      },
      { property: "og:title", content: "AutoExt — Detect Fire Before It Escalates" },
      {
        property: "og:description",
        content:
          "Multi-sensor fusion at the edge: thermal, gas, optical, electrochemical and vibration sensing with automated suppression.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The AutoExt landing page is a single self-contained HTML file served from
// /public/autoext.html; it is mounted full-viewport at the site root.
function Index() {
  return (
    <iframe
      src="/autoext.html"
      title="AutoExt — intelligent vehicle fire detection and suppression"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
