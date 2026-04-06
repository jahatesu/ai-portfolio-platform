"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function CreateProjectForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.from("projects").insert([
      {
        title,
        description,
        tech_stack: techStack.split(",").map((t) => t.trim()),
        github_url: githubUrl,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Project added!");
      setTitle("");
      setDescription("");
      setTechStack("");
      setGithubUrl("");
      router.refresh(); // ✅ Safe Next.js 13/14/15 way to refresh server data
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Add New Project</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full border p-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Tech Stack (comma separated)"
        className="w-full border p-2"
        value={techStack}
        onChange={(e) => setTechStack(e.target.value)}
      />

      <input
        type="text"
        placeholder="GitHub URL"
        className="w-full border p-2"
        value={githubUrl}
        onChange={(e) => setGithubUrl(e.target.value)}
      />

      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Add Project
      </button>
    </form>
  );
}