/* eslint-disable @typescript-eslint/no-explicit-any */


export interface Skill {
  id: string;
  title: string;
  image: string;
  }

export const createSkill = async (skillData: any) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/skills`;
  console.log("Request URL:", uri); 
  console.log("Payload:", skillData); 

  const headers: HeadersInit = {
    "Content-Type": "application/json",    
  };

  const res = await fetch(uri, {
    method: "POST",
    headers,
    body: JSON.stringify(skillData), 
  });

  console.log("Response Status:", res.status); 

  if (!res.ok) {
    const error = await res.json();
    console.error("Error Response:", error); 
    throw new Error(error.message || "Failed to create Skill");
  }

  return await res.json();
};


export const getAllSkills = async (): Promise<Skill[]> => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/skills`;
  // console.log("Request URL:", uri);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined");
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${userToken}`, // Uncomment and set token if needed
  };

  const res = await fetch(uri, {
    method: "GET",
    headers,
  });

  // console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    // console.error("Error Response:", error);
    throw new Error(error.message || "Failed to fetch Skills");
  }

  return await res.json();
};

export const updateSkill = async (id: string, skillData: any) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/skills/${id}`;

  // console.log("Payload:", skillData);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined");
  }

    const headers: HeadersInit =  {
    "Content-Type": "application/json",
  };

  const res = await fetch(uri, {
    method: "PATCH",
    headers,
    body: JSON.stringify(skillData),
  });

  // console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    // console.error("Error Response:", error);
    throw new Error(error.message || "Failed to update Skill");
  }

  return await res.json();
};

export const deleteSkill = async (id: string) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/skills/${id}`;
  // console.log("Request URL:", uri);

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

  // console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    // console.error("Error Response:", error);
    throw new Error(error.message || "Failed to delete Skill");
  }

  return await res.json();
};

export const getSkillDetails = async (id: string): Promise<Skill> => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/skills/${id}`;
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

  // console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    // console.error("Error Response:", error);
    throw new Error(error.message || "Failed to fetch Skill details");
  }

  return await res.json();
};


