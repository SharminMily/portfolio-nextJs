/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSkill } from "@/services/SkillServices";

// Define TypeScript interface for Skill data
interface SkillData {
  title: string;
  image: string;  
}

export default function AddSkill() {
  const router = useRouter();
  const [formData, setFormData] = useState<SkillData>({
    title: "",
    image: "",    
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
      const payload: SkillData = {
        title: formData.title,
        image: formData.image,        
      };

      const result = await createSkill(payload);
      console.log("Success:", result);
      router.push("/dashboard/skills/allSkills");
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Failed to create Skill");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Skill</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Skill Title"
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
       
       
        <button
          type="submit"
          className={`w-full py-2 rounded text-white ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-900 hover:bg-black"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Skill"}
        </button>
      </form>
    </div>
  );
}