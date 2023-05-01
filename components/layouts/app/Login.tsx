import useUser from "@/hooks/useUser";
import React from "react";

const Login = () => {
  const { loginUrl } = useUser();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="header">Spotify Clone</h1>
        <a href={loginUrl} className="btn bg-spotify text-white">Login with Spotify</a>
      </div>
    </div>
  );
};

export default Login;
