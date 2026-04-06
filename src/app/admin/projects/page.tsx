"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import AdminProjectRow from "../../../components/AdminProjectRow";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase.from("projects").select("*");
      setProjects(data || []);
    }

    fetchProjects();
  }, []);

  return (
    <div className="p-6 space-y-4">
      {projects.map((project) => (
        <AdminProjectRow key={project.id} project={project} />
      ))}
    </div>
  );
}