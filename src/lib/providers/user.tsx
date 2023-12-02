import { User } from "@/types/data";
import React, { useEffect } from "react";

const userContext = React.createContext<User>(null);

export function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
    }
  }, []);
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}

export function useUser() {
  const user = React.useContext(userContext);
  return user;
}
