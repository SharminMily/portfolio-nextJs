/* eslint-disable @typescript-eslint/no-explicit-any */


export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  liveLink?: string;
  frontendCode?: string;
  backendCode?: string;
}

export const createProject = async (projectData: any) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;
  console.log("Request URL:", uri); 
  console.log("Payload:", projectData); 

  const headers: HeadersInit = {
    "Content-Type": "application/json",    
  };

  const res = await fetch(uri, {
    method: "POST",
    headers,
    body: JSON.stringify(projectData), 
  });

  console.log("Response Status:", res.status); 

  if (!res.ok) {
    const error = await res.json();
    console.error("Error Response:", error); 
    throw new Error(error.message || "Failed to create project");
  }

  return await res.json();
};


export const getAllProjects = async (): Promise<Project[]> => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;
  console.log("Request URL:", uri);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",    
  };

  const res = await fetch(uri, {
    method: "GET",
    headers,
  });

  console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    console.error("Error Response:", error);
    throw new Error(error.message || "Failed to fetch projects");
  }

  return await res.json();
};

export const updateProject = async (id: string, projectData: any) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`;

  console.log("Payload:", projectData);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined");
  }

    const headers: HeadersInit =  {
    "Content-Type": "application/json",
  };

  const res = await fetch(uri, {
    method: "PATCH",
    headers,
    body: JSON.stringify(projectData),
  });

  console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    console.error("Error Response:", error);
    throw new Error(error.message || "Failed to update project");
  }

  return await res.json();
};

export const deleteProject = async (id: string) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`;
  console.log("Request URL:", uri);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const res = await fetch(uri, {
    method: "DELETE",
    headers,
  });

  console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    console.error("Error Response:", error);
    throw new Error(error.message || "Failed to delete project");
  }

  return await res.json();
};

export const getProjectDetails = async (id: string): Promise<Project> => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`;
  console.log("Request URL:", uri);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const res = await fetch(uri, {
    method: "GET",
    headers,
  });

  console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    console.error("Error Response:", error);
    throw new Error(error.message || "Failed to fetch project details");
  }

  return await res.json();
};


