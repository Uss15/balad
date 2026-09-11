import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "لوحة التحكم — معمل تعليب بلد" },
      { name: "description", content: "لوحة تحكم إدارة موقع معمل تعليب بلد للمنتجات الغذائية." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "لوحة التحكم — معمل تعليب بلد" },
      { property: "og:description", content: "لوحة تحكم إدارة موقع معمل تعليب بلد." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  return (
    <iframe
      src="/balad.html#admin"
      title="لوحة التحكم"
      style={{ width: "100vw", height: "100vh", border: "none", display: "block" }}
    />
  );
}
