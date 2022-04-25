import AdminPanel from "../components/AdminPanel";
import LoginForm from "../components/LoginForm";
import { useState, useEffect } from "react";

const Admin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        {token ? <AdminPanel /> : <LoginForm />}
      </div>
    </div>
  );
};

export default Admin;
