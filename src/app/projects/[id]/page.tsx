'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProjectDetails } from '@/services/ProjectServices';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  liveLink?: string;
  frontendCode?: string;
  backendCode?: string;
}

const ProjectDetailsPage = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectDetails(id);
        setProject(data);
      } catch (err) {
        setError((err as Error).message || 'Failed to load project details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Project Details
        </h1>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md">
            <p className="font-semibold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && !project && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow-md">
            <p className="font-semibold">No Project Found</p>
            <p>The requested project could not be found.</p>
          </div>
        )}

        {project && (
          <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            {project.image && (
              <div className="mb-6">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={672}
                  height={378}
                  className="w-full h-48 object-cover rounded-lg"
                  priority
                />
              </div>
            )}

            <div className="border-b pb-4 mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Description</h3>
                <p className="text-gray-600">
                  {project.description || 'No description available'}
                </p>
              </div>
            </div>

            <div className="mt-6 md:flex gap-2 grid grid-cols-2 text-center justify-end space-x-4">
              {project.frontendCode && (
                <a
                  href={project.frontendCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:px-4 md:py-2 p-1 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                >
                  Frontend Code
                </a>
              )}
              {project.backendCode && (
                <a
                  href={project.backendCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:px-4 md:py-2 p-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Backend Code
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:px-4 md:py-2 p-1 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors"
                >
                  Live Demo
                </a>
              )}             
              <Link href="/projects">
                <button className="md:px-4 md:py-2 px-4 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                  Back to Projects
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;