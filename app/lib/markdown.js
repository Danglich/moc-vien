import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/projects");

export function getProjectBySlug(slug) {
  const filePath = path.join(contentDir, `${slug}.md`);

  console.log(slug)

  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(file);

  return {
    ...data,
    content,
    slug,
  };
}

export function getAllSlugs() {
  return fs
    .readdirSync(contentDir)
    .map((file) => file.replace(".md", ""));
}