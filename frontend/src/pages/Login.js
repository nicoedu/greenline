import React, { useState } from "react";
import { login as loginauth } from "../services/auth";
import "./Login.css";
import logo from "../assets/images/logo.svg";

import api from "../services/api";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    const response = await api.post("/login", {
      username,
      password
    });
    loginauth(response.data.token);
    history.push("/");
  }

  function navigateToRegister() {
    history.push("/register");
  }

  return (
    <div className="login-container">
      <form onSubmit={login}>
        <img src={logo} alt="Green Line" />
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
        <button type="submit"> Entrar </button>
        <button type="button" onClick={navigateToRegister}>
          {" "}
          Registrar{" "}
        </button>
      </form>
    </div>
  );
}
