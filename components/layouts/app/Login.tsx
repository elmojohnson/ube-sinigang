import useUser from "@/hooks/useUser";
import React from "react";

const Login = () => {
  const { login } = useUser();
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;
