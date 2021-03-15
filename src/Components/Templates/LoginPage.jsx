import React, { useState } from 'react';
import Axios from 'axios';

function LoginPage(){
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
    }).then((res) => console.log(res));
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
    }).then((res) => console.log(res));
  };

return (
    <div className="App">
    <main> 
   <section className="glass">
     <div className="register"> 
     <h1> Register </h1>
     <input placeholder="username"
     onChange={(e) => setRegisterUsername(e.target.value)}/> 
     <input placeholder="password"
     onChange={(e) => setRegisterPassword(e.target.value)}/> 
     <button onClick={register}>Submit</button>
     </div>
   </section>

   <section>
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
   <div className="headline"> 
    <h1>Binger</h1>
    </div>
   </main>
   
  
   <div className="circle1">  </div>
   <div className="circle2">  </div>
   <div className="circle3">  </div>
   
  </div>
)

}



export default LoginPage; 