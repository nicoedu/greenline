import React, { useState } from "react";
import api from "../services/api";

export default function Register({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    const response = await api.post("/user", {
      username,
      password
    });

    if (response.data.ok) history.push("/login");

    console.log(response.data);
  }
  return (
    <div className="login-container">
      <form onSubmit={register}>
        <input
          placeholder="usario"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder="senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit"> Registrar </button>
      </form>
    </div>
  );
}
