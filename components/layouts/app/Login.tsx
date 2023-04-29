import useUser from "@/hooks/useUser";
import React from "react";

const Login = () => {
  const { loginUrl } = useUser();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <a href={loginUrl}>Login</a>
      </div>
    </div>
  );
};

export default Login;
