export default function sitemap() {
  const baseUrl = "https://mocviengroup.vn";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bao-gia-thiet-ke`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/thiet-ke-nha`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/du-an`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lien-he`,
      lastModified: new Date(),
    },
  ];
}