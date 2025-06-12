"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");
    if (auth === "true") {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "sharmin@gmail.com" && password === "admin1234") {
      localStorage.setItem("admin-auth", "true");
      router.push("/dashboard");  
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold text-center mb-4 text-gray-700">Admin Login</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <div className="mb-4">
          <label className="text-sm block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="text-sm block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
