import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("RIDER");

  return (
    <form action="" className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        className="w-full border rounded px-3 py-2 bg-white text-gray-900"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="w-full border rounded px-3 py-2 bg-white text-gray-900"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="w-full border rounded px-3 py-2 bg-white text-gray-900"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border rounded px-3 py-2 bg-white text-gray-900"
      >
        <option value="RIDER">Rider</option>
        <option value="DRIVER">Driver</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Signup
      </button>
    </form>
  );
}
