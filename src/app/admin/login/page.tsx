"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/admin/projects"); // ✅ Safe Next.js navigation, no window access
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}