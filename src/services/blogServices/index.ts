/* eslint-disable @typescript-eslint/no-explicit-any */


export interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
 ratting: number
}

export const createBlog = async (BlogData: any) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`;
  // console.log("Request URL:", uri); 
  // console.log("Payload:", BlogData); 

  const headers: HeadersInit = {
    "Content-Type": "application/json",    
  };

  const res = await fetch(uri, {
    method: "POST",
    headers,
    body: JSON.stringify(BlogData), 
  });

  // console.log("Response Status:", res.status); 

  if (!res.ok) {
    const error = await res.json();
    // console.error("Error Response:", error); 
    throw new Error(error.message || "Failed to create Blog");
  }

  return await res.json();
};


export const getAllBlogs = async (): Promise<Blog[]> => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`;
  console.log("Request URL:", uri);

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
    throw new Error(error.message || "Failed to fetch Blogs");
  }

  return await res.json();
};

export const updateBlog = async (id: string, BlogData: any) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`;

  // console.log("Payload:", BlogData);

  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("API URL is not defined");
  }

    const headers: HeadersInit =  {
    "Content-Type": "application/json",
  };

  const res = await fetch(uri, {
    method: "PATCH",
    headers,
    body: JSON.stringify(BlogData),
  });

  // console.log("Response Status:", res.status);

  if (!res.ok) {
    const error = await res.json();
    // console.error("Error Response:", error);
    throw new Error(error.message || "Failed to update Blog");
  }

  return await res.json();
};

export const deleteBlog = async (id: string) => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`;
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
    throw new Error(error.message || "Failed to delete Blog");
  }

  return await res.json();
};

export const getBlogDetails = async (id: string): Promise<Blog> => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`;
  // console.log("Request URL:", uri);

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
    throw new Error(error.message || "Failed to fetch Blog details");
  }

  return await res.json();
};


