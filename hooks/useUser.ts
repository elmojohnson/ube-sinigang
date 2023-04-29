import { User } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const useUser = () => {
  const router = useRouter();

  // Login
  const [loginUrl, setLoginUrl] = useState<string>("");

  // User
  const [user, setUser] = useState<User>();

  const getLoginUrl = async () => {
    try {
      const result = await axios.get("/api/auth/login_url");
      setLoginUrl(result.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  const getTokens = async () => {
    try {
      const result = await axios.post("/api/auth/tokens")
    } catch (error) {
      console.error(error);
    }
  }

  // Check if access token is present
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      getLoginUrl();
    }
  }, []);

  // Check if login url changed value
  useEffect(() => {
    // Run this if there's a value for loginUrl
    if (loginUrl) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get("code");

      if (code) {
        console.log(code);
      }
    }
  }, [loginUrl]);

  return { user, loginUrl };
};

export default useUser;
