import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending, isError, user } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login({ email, password });
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
            <button
              className="btn btn--green"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              required
            >
              {isPending ? <ScaleLoader color="#eee" height={15} /> : "Log in"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
