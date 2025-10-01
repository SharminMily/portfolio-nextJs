

interface Skill {
  title: string;
  image: string;
}

export const getAllSkills = async (): Promise<Skill[]> => {
  const uri = `${process.env.NEXT_PUBLIC_API_URL}/api/skills`;
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
    throw new Error(error.message || "Failed to fetch Skills");
  }

  const data = await res.json();
  // console.log("Fetched Skills:", data);
  return data;
};
