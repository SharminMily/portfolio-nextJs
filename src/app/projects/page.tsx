/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
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
        // console.log("Fetched Projects:", data);
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
          <div
            key={i}
            className="w-full h-48 bg-gray-700 animate-pulse rounded-xl"
          ></div>
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
       
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto px-4">
          {/* Left Side */}
          <div className="lg:text-left text-center">
            <h1
              data-aos="fade-right"
              className="text-cyan-400 md:text-4xl text-3xl font-bold"
            >
              P
              <span className="bg-gradient-to-b from-white to-cyan-600 bg-clip-text text-transparent">
                ROJECT
              </span>{" "}
              -
            </h1>
          </div>

          {/* Right Side */}
          <div className="lg:text-right text-center mt-4 lg:mt-0">
            <p className="text-gray-200 max-w-md">
              Every big achievement starts with a small idea, With effort 
              <br />
             And passion, that idea turns into reality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:my-20 my-8">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="zoom-in"
              className="card bg-base-50 rounded-xl shadow-xl border border-cyan-500 overflow-hidden"
            >
              <figure>
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-72"
                />
              </figure>
              <div className="card-body w-full h-full text-white p-4 bg-[#111930] rounded-b-xl border-b-2">
                <h2 className="card-title text-xl font-semibold">
                  {project.title}
                </h2>

                <div className="flex gap-3 mt-1 flex-wrap">
                  {project.technology?.map((tech: string, index: number) => (
                    <button
                      key={index}
                      className="px-2 rounded-tr-2xl rounded-bl-2xl rounded-rl-2xl text-black font-medium border border-cyan-950 bg-gradient-to-b from-cyan-200 to-cyan-600 
        transition hover:from-cyan-100 hover:to-cyan-400"
                    >
                      {tech}
                    </button>
                  ))}
                </div>

                <p className="text-gray-300 mb-4">
                  {project.description.split(" ").slice(0, 33).join(" ")}
                  {project.description.split(" ").length > 30 && "..."}
                </p>

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

                <div className=" flex justify-between">
                  <div className="">{project.projectTime} </div>
                  <div className=" flex gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-cyan-500 rounded-lg hover:bg-cyan-600 roun border px-2.5 "
                    >
                      Live
                    </a>
                    <a
                      href={`/projects/${project.id}`}
                      className="border-cyan-500 bg-cyan-600 hover:bg-cyan-800 rounded-lg border px-2.5 "
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
