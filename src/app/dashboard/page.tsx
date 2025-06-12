"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");
    if (auth !== "true") {
      router.push("/login"); // redirect if not logged in
    } else {
      setLoading(false); // show content after auth check
    }
  }, [router]);

  if (loading) return <p className="text-center mt-20">Checking authentication...</p>;

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome to the Dashboard!</h1>
      <button
        onClick={() => {
          localStorage.removeItem("admin-auth");
          router.push("/login");
        }}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
