/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getAllSkills, updateSkill, deleteSkill, Skill } from "@/services/SkillServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";

export default function AllSkill() {
  const [Skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editSkill, setEditSkill] = useState<Skill | null>(null);
  const [editForm, setEditForm] = useState<Partial<Skill>>({});

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchSkills = async () => {
      try {
        const data = await getAllSkills();
        console.log("Fetched Skills:", data);
        setSkills(data);
      } catch (err: any) {
        setError(err.message || "Failed to load Skills");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this Skill?")) return;
    try {
      await deleteSkill(id);
      toast.success("Skill deleted successfully");
      const data = await getAllSkills();
      setSkills(data);
    } catch (err: any) {
      toast.error(err.message || "Failed to delete Skill");
    }
  };

  const handleEdit = (Skill: Skill) => {
    setEditSkill(Skill);
    setEditForm({
      title: Skill.title,      
      image: Skill.image,
    
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editSkill) return;
    try {
      await updateSkill(editSkill.id, editForm);
      toast.success("Skill updated successfully");
      const data = await getAllSkills();
      setSkills(data);
      setEditSkill(null);
      setEditForm({});
    } catch (err: any) {
      toast.error(err.message || "Failed to update Skill");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setEditSkill(null);
    setEditForm({});
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:my-20 my-8 px-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card bg-base-100 shadow-xl border-4 border-cyan-300">
            <div className="w-full h-48 bg-gray-700 animate-pulse" />
            <div className="card-body bg-blue-950 p-4">
              <div className="h-6 bg-gray-700 animate-pulse w-3/4" />
              <div className="h-4 bg-gray-700 animate-pulse w-full mt-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="lg:mx-16 px-4 py-8">
      <section id="Skill-section">
        <h1
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-4xl text-center text-cyan-400 font-bold mb-12"
        >
          --- Skill ---
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:my-20 my-8">
          {Skills.map((Skill) => (
            <div
              key={Skill.id}
              data-aos="zoom-in"
              className="card bg-base-100 shadow-xl border-4 border-cyan-300 overflow-hidden"
            >
              <figure>
                <Image height={100} width={100}
                  src={Skill.image}
                  alt={`Screenshot of ${Skill.title}`}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body text-gray-300 p-4 bg-blue-950 rounded-b-xl border-b-2">
                <h2 className="card-title text-xl font-semibold">{Skill.title}</h2>
                              

                <div className="flex justify-between items-center">
                
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(Skill)}
                      className="text-cyan-400 hover:text-cyan-600"
                      title="Edit Skill"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(Skill.id)}
                      className="text-red-400 hover:text-red-600"
                      title="Delete Skill"
                    >
                      <FaTrash size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {editSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-950 p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-2xl text-cyan-400 font-bold mb-4">Edit Skill</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editForm.title || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-gray-300 border border-cyan-300"
                  required
                />
              </div>
             
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={editForm.image || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-gray-300 border border-cyan-300"
                  required
                />
              </div>      
                     
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}