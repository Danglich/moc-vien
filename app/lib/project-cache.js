import { cache } from "react";
import { unstable_cache } from "next/cache";
import { supabase } from "@/app/lib/supabase";

const getCachedProject = unstable_cache(
  async (slug) => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error) throw new Error(error.message);

    return data;
  },
  ["project-detail"],
  {
    revalidate: 3600,
    tags: ["projects"],
  }
);

export const getProject = cache((slug) =>
  getCachedProject(slug)
);

const getCachedRelatedProjects = unstable_cache(
  async (slug) => {
    const { data } = await supabase
      .from("projects")
      .select("id,name,slug,thumbnail")
      .neq("slug", slug)
      .order("created_at", {
        ascending: false,
      })
      .limit(5);

    return data || [];
  },
  ["related-projects"],
  {
    revalidate: 3600,
    tags: ["projects"],
  }
);

export const getRelatedProjects = cache((slug) =>
  getCachedRelatedProjects(slug)
);