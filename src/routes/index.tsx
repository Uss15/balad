import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "معمل تعليب بلد للمنتجات الغذائية" },
      {
        name: "description",
        content:
          "معمل تعليب بلد في قضاء بلد، صلاح الدين، العراق - معجون الطماطة والمخللات والمنتجات الغذائية المعلبة.",
      },
      { property: "og:title", content: "معمل تعليب بلد للمنتجات الغذائية" },
      {
        property: "og:description",
        content: "منتجات غذائية معلبة بجودة عراقية من قضاء بلد، صلاح الدين.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/balad.html"
      title="معمل تعليب بلد للمنتجات الغذائية"
      style={{ width: "100vw", height: "100vh", border: "none", display: "block" }}
    />
  );
}
