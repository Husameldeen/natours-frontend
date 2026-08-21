import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUser } = useUser();

  async function loginUser({ email, password }) {
    const { data } = await axios.post(
      "http://127.0.0.1:5000/api/v1/users/login",
      {
        email,
        password,
      },
    );

    return data;
  }

  const {
    mutate: login,
    isPending,
    isError,
    data: user,
  } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    // mutationKey: ["user"],
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data.user);
      localStorage.setItem("token", data.token);
      setUser(data.data.user);
      navigate("/");
    },
  });

  return { login, isPending, isError, user };
}
