import React, { useEffect, useState, createContext, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showOnboarding, setShowOnboarding] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const alreadySawTheOnboarding = await AsyncStorage.getItem(
        "@LumeroBooks:passed_by_onboarding"
      );
      const userSigned = await AsyncStorage.getItem("@LumeroBooks:user");

      alreadySawTheOnboarding
        ? setShowOnboarding(false)
        : setShowOnboarding(true);

      userSigned ? setUser(JSON.parse(userSigned)) : setUser(null);

      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function PassedByOnboarding() {
    await AsyncStorage.setItem(
      "@LumeroBooks:passed_by_onboarding",
      JSON.stringify(true)
    );

    setShowOnboarding(false);
  }

  async function SignIn({ email, password }) {
    const response = await axios.post("user/auth", { email, password });

    if (!response.data?.error) {
      const { email, username } = response.data.user;

      let newUser = { email, username };

      setUser(newUser);

      await AsyncStorage.setItem("@LumeroBooks:user", JSON.stringify(newUser));
    } else {
      console.log("Invalid credentials");
    }
  }

  async function SignUp({ email, password, username }) {
    const response = await axios.post("user/create", {
      email,
      username,
      password,
    });

    if (!response.data?.error) {
      const { email, username } = response.data;

      let newUser = { email, username };

      setUser(newUser);

      await AsyncStorage.setItem("@LumeroBooks:user", JSON.stringify(newUser));
    } else {
      console.log("Invalid credentials");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        PassedByOnboarding,
        SignIn,
        SignUp,
        showOnboarding,
        loading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
