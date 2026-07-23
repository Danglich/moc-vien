export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://mocviengroup.vn/sitemap.xml",
    host: "https://mocviengroup.vn",
  };
}