/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProject } from "@/services/ProjectServices";

// Define TypeScript interface for project data
interface ProjectData {
  title: string;
  image: string;
  description: string;
  technology?: string | string[];
  projectTime?: string;
  liveLink?: string;
  frontendCode?: string;
  backendCode?: string;
}

export default function AddProject() {
  const router = useRouter();
  const [formData, setFormData] = useState<ProjectData>({
    title: "",
    image: "",
    description: "",
    technology: "",
    projectTime: "",
    liveLink: "",
    frontendCode: "",
    backendCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Omit empty optional fields
      const payload: ProjectData = {
        title: formData.title,
        image: formData.image,
        description: formData.description,
        projectTime: formData.projectTime,
         ...(typeof formData.technology === "string"
  ? { technology: formData.technology.split(",").map(t => t.trim()) }
  : { technology: formData.technology }
),  // convert to array
        ...(formData.liveLink && { liveLink: formData.liveLink }),
        ...(formData.frontendCode && { frontendCode: formData.frontendCode }),
        ...(formData.backendCode && { backendCode: formData.backendCode }),
      };

      const result = await createProject(payload);
      console.log("Success:", result);
      router.push("/dashboard/projects/all");
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Failed to create project");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        {/* Tecnology */}
          <input
          type="text"
          name="technology"
          placeholder="Tecnology [example - React ,Js, TS etc]"
          value={formData.technology as string}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {/* Project Time */}
          <input
          type="text"
          name="projectTime"
          placeholder="Project Timing (example - Mar 2025 - July 2025)"
          value={formData.projectTime}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="liveLink"
          placeholder="Live Link (optional)"
          value={formData.liveLink}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="frontendCode"
          placeholder="Frontend Code URL (optional)"
          value={formData.frontendCode}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="backendCode"
          placeholder="Backend Code URL (optional)"
          value={formData.backendCode}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-900 hover:bg-black"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Project"}
        </button>
      </form>
    </div>
  );
}