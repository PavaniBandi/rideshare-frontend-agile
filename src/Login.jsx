import { useState } from "react";
import { apiRequest } from "./api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiRequest("/auth/login", "POST", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("name", data.name);
      localStorage.setItem("userId", data.id);
      onLogin && onLogin(data);
    } catch (err) {
      setError("Login failed:" + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded px-3 py-2 bg-white text-gray-900"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded px-3 py-2 bg-white text-gray-900"
        required
      />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
}
