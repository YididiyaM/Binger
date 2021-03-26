import React, { useState } from "react";
import Axios from "axios";
//Styling
import loginPage from "./loginPage.css";
function LoginPage() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => {
      if (res.data === "Created") {
        window.location.href = "/home";
      }
    });
  };

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      if (res.data === "Successful") {
        window.location.href = "/home";
      }
    });
  };

  return (
    <div className="App">
      <main>
        <section className="headline">
          <h1>BINGER.</h1>
          <h2>
            <span className="first_word"> Match</span>
            <span className="rotate_texts">
              <span> movies </span>
              <span> shows</span>
              <span> playlists</span>
            </span>
            <span className="last_words"> with your loved ones.</span>
          </h2>
        </section>

        <section className="glass">
          <div className="register">
            <h1> Register </h1>
            <input
              placeholder="username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />

            <input
              placeholder="password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button onClick={register}>Submit</button>
          </div>
          <div>
            <h1>Login</h1>
            <input
              placeholder="username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              placeholder="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={login}>Submit</button>
          </div>
        </section>
      </main>

      <div className="circle1"> </div>
      <div className="circle2"> </div>
      <div className="circle3"> </div>
      <div className="circle4"> </div>
    </div>
  );
}

export default LoginPage;
