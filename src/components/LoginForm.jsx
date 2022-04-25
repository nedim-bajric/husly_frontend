import React, { useState } from "react";
import apiReq from "../api/apiReq";
const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [confirm, setConfirm] = useState("");
  const handleLogin = async () => {
    if (data.password !== confirm) {
      console.log("Passwords must match!!!");
    } else {
      try {
        const response = await apiReq.post("/admin", data);
        window.localStorage.setItem("token", response.data.token);
        window.location.reload();
      } catch (err) {
        err.message.includes("400") && console.log("Wrong credentials.");
      }
    }
  };
  return (
    <div className="w-full h-full bg-gray-800">
      <div className="w-full h-full flex flex-col items-center justify-between py-10">
        <h1 className="text-4xl font-medium text-orange-500">Login</h1>
        <div className="flex flex-col items-center space-y-4 w-full px-10 text-white max-w-md">
          <input
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="Email"
            type="email"
            className="w-full py-2 bg-transparent border-b-2 border-orange-500 outline-none"
          />
          <input
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="Password"
            type="password"
            className="w-full py-2 bg-transparent border-b-2 border-orange-500 outline-none"
          />
          <input
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm Password"
            type="password"
            className="w-full  py-2 bg-transparent border-b-2 border-orange-500 outline-none"
          />
        </div>
        <button
          onClick={handleLogin}
          disabled={
            data.username === "" || data.password === "" || confirm === ""
              ? true
              : false
          }
          className="transition-opacity duration-300 bg-orange-500 px-10 disabled:opacity-20 py-2 rounded-full cursor-pointer text-white font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
