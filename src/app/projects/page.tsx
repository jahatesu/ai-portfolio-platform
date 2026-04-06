

import { supabase } from "../../lib/supabase";
import ProjectCard from "../../components/ProjectCard";
export default async function ProjectsPage() {
  const { data: projects } = await supabase
    .from("projects")
    .select("*");

  return (
    <div className="p-8 grid gap-6 md:grid-cols-2">
      {projects?.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          techStack={project.tech_stack.split(",")}
          link={project.github_url}
        />
      ))}
    </div>
  );
}