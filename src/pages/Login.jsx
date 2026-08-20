import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function loginUser() {
    const { data } = await axios.post(
      "http://127.0.0.1:5000/api/v1/users/login",
      {
        email,
        password,
      },
    );

    return data;
  }

  const { mutate, isPending, isError, data } = useMutation({
    mutationFn: loginUser,
    mutationKey: ["user"],
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.data.user.name);
      navigate(-1, { replace: true });
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    mutate();
  }

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form className="form">
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form__input"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength="8"
              required
            />
          </div>
          <div className="form__group">
            <button className="btn btn--green" onClick={handleSubmit} required>
              {isPending ? <ScaleLoader color="#eee" height={15} /> : "Log in"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
