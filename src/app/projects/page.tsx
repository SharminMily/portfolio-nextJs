/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { getAllProjects, Project } from "@/services/ProjectServices";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Fetch projects
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
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* <div className="flex justify-between items-center my-4">
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
                </div> */}

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-base px-5 py-3 mb-3"
                >
                  Live
                </a>

                <a
                  href={`/projects/${project.id}`}
                  className="block w-full text-center text-cyan-400 border border-cyan-400 hover:bg-cyan-500 hover:text-white transition duration-300 font-medium rounded-lg text-base px-5 py-2"
                >
                  Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
