/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getAllProjects, updateProject, deleteProject, Project } from "@/services/ProjectServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function AllProject() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editProject, setEditProject] = useState<Project | null>(null);
  const [editForm, setEditForm] = useState<Partial<Project>>({});

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        console.log("Fetched Projects:", data);
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      toast.success("Project deleted successfully");
      const data = await getAllProjects();
      setProjects(data);
    } catch (err: any) {
      toast.error(err.message || "Failed to delete project");
    }
  };

  const handleEdit = (project: Project) => {
    setEditProject(project);
    setEditForm({
      title: project.title,
      description: project.description,
      image: project.image,
      liveLink: project.liveLink,
      frontendCode: project.frontendCode,
      backendCode: project.backendCode,
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProject) return;
    try {
      await updateProject(editProject.id, editForm);
      toast.success("Project updated successfully");
      const data = await getAllProjects();
      setProjects(data);
      setEditProject(null);
      setEditForm({});
    } catch (err: any) {
      toast.error(err.message || "Failed to update project");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setEditProject(null);
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
      <section id="project-section">
        <h1
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="text-4xl text-center text-cyan-400 font-bold mb-12"
        >
          --- PROJECT ---
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:my-20 my-8">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="zoom-in"
              className="card bg-base-100 shadow-xl border-4 border-cyan-300 overflow-hidden"
            >
              <figure>
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body text-gray-300 p-4 bg-blue-950 rounded-b-xl border-b-2">
                <h2 className="card-title text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>

                <div className="flex justify-between items-center my-4">
                  <p className="text-lg font-semibold">Code Source:</p>
                  <div className="flex justify-between items-center mr-4 gap-8 lg:gap-12">
                    <a
                      href={project.frontendCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 font-semibold text-base hover:underline"
                    >
                      Client
                    </a>
                    <a
                      href={project.backendCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 font-semibold text-base hover:underline"
                    >
                      Server
                    </a>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-1/2 text-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-base px-5 py-3"
                  >
                    Live
                  </a>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className="text-cyan-400 hover:text-cyan-600"
                      title="Edit Project"
                    >
                      <FaEdit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="text-red-400 hover:text-red-600"
                      title="Delete Project"
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

      {editProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-950 p-6 rounded-lg shadow-xl max-w-lg w-full">
            <h2 className="text-2xl text-cyan-400 font-bold mb-4">Edit Project</h2>
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
                <label className="block text-gray-300 mb-1">Description</label>
                <textarea
                  name="description"
                  value={editForm.description || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-gray-300 border border-cyan-300"
                  rows={4}
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
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Live Link (optional)</label>
                <input
                  type="url"
                  name="liveLink"
                  value={editForm.liveLink || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-gray-300 border border-cyan-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Frontend Code (optional)</label>
                <input
                  type="url"
                  name="frontendCode"
                  value={editForm.frontendCode || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-gray-300 border border-cyan-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Backend Code (optional)</label>
                <input
                  type="url"
                  name="backendCode"
                  value={editForm.backendCode || ""}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 text-gray-300 border border-cyan-300"
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