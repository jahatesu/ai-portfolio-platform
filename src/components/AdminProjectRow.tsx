"use client";

import { supabase } from "../lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Project = {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string;
};

interface Props {
  project: Project;
}

export default function AdminProjectRow({ project }: Props) {
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleDelete() {
    if (!confirm(`Are you sure you want to delete "${project.title}"?`)) return;

    setIsUpdating(true);

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", project.id);

    if (error) {
      alert(`Delete failed: ${error.message}`);
      setIsUpdating(false);
    } else {
      window.location.reload();
    }
  }

  async function handleEdit() {
    const newTitle = prompt("Enter new title", project.title);

    if (newTitle === null || newTitle.trim() === "" || newTitle === project.title) return;

    setIsUpdating(true);

    const { error } = await supabase
      .from("projects")
      .update({ title: newTitle.trim() })
      .eq("id", project.id);

    if (error) {
      alert(`Update failed: ${error.message}`);
      setIsUpdating(false);
    } else {
      window.location.reload();
    }
  }

  return (
    <div className={`border p-4 rounded flex justify-between items-center ${isUpdating ? "opacity-50 pointer-events-none" : ""}`}>
      <span className="font-medium">{project.title}</span>

      <div className="space-x-4">
        <button
          onClick={handleEdit}
          className="text-blue-600 hover:underline"
          disabled={isUpdating}
        >
          Edit
        </button>

        <button
          onClick={handleDelete}
          className="text-red-600 hover:underline"
          disabled={isUpdating}
        >
          Delete
        </button>
      </div>
    </div>
  );
}