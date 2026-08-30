import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../service/services";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  async function getLoggedinUser(bearerToken) {
    if (!bearerToken) return;

    const { data } = await axios.get(`${BASE_URL}/users/is-loggedin`, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    return data.data.user;
  }

  const { isPending, error, data } = useQuery({
    queryKey: ["user", token],
    queryFn: () => getLoggedinUser(token),
    enabled: !!token,
  });

  useEffect(() => {
    if (data) {
      // eslint-disable-next-line
      setUser(data);
    }
  }, [data]);

  function login(user, token) {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
  }

  function signup(user, token) {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setUser({});
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        signup,
        logout,
        isPending,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("User context was used outside its provider!");

  return context;
}

// eslint-disable-next-line
export { UserProvider, useUser };
