import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import toast from "react-hot-toast";
import { BASE_URL } from "../service/services";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUser } = useUser();

  async function loginUser({ email, password }) {
    const { data } = await axios.post(`${BASE_URL}/users/login`, {
      email,
      password,
    });

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
      toast.success("Logged In Successfully!");
      navigate("/");
    },
    onError: () => {
      toast.error("Wronge email or password!");
    },
  });

  return { login, isPending, isError, user };
}
