import { User } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const useUser = () => {
  const router = useRouter();

  // Login data
  const [loginUrl, setLoginUrl] = useState<string>("");

  // User data
  const [user, setUser] = useState<User>();

  // Generate login url
  const getLoginUrl = async () => {
    try {
      const result = await axios.get("/api/auth/login_url");
      setLoginUrl(result.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  // Get access token and refresh token by providing a code
  // Store access token and refresh token to local storage
  const getTokens = async (code: string) => {
    try {
      const result = await axios.post("/api/auth/callback", { code });

      // Set tokens to local storage
      localStorage.setItem("access_token", result.data.access_token);
      localStorage.setItem("refresh_token", result.data.refresh_token);

      // Remove code's query params and reload
      if(localStorage.getItem("access_token")) {
        router.push("/")
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Check if access token is present
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      getLoginUrl();
    }
  }, []);

  // Check if login url changed value
  useEffect(() => {
    // Execute this if there's a value for loginUrl
    if (loginUrl) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get("code");

      if (code) {
        getTokens(code);
      }
    }
  }, [loginUrl]);

  return { user, loginUrl };
};

export default useUser;
