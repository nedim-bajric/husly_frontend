import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-3">
        <h1 className="text-4xl font-semibold">Page Not Found</h1>
        <p className="text-center max-w-xs">
          The page you are looking for doesn't exist or hase been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-3 py-1 rounded-lg text-lg"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
