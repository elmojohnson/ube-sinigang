import { User } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useUser = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  const login = () => {
    localStorage.setItem("access_token", "asd");
    router.reload();
  };

  const logout = () => {};

  useEffect(() => {}, []);

  return { user, isLoggedIn, login, logout };
};

export default useUser;
