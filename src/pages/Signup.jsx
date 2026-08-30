import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { BASE_URL } from "../service/services";
import { useUser } from "../context/userContext";

function Signup() {
  const { signup: signupContext } = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  async function signupUser() {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, {
      name,
      email,
      password,
      passwordConfirm,
    });

    return data;
  }

  const { mutate, isPending } = useMutation({
    mutationFn: signupUser,
    mutationKey: ["user"],
    onSuccess: (data) => {
      signupContext(data.data.user, data.token);
      navigate("/");
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
        <h2 className="heading-secondary ma-bt-lg">Create your account</h2>

        <form className="form">
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Your name
            </label>
            <input
              id="name"
              type="text"
              className="form__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="form__input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="••••••••"
              minLength="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Confirm password
            </label>
            <input
              id="passwordConfirm"
              type="password"
              className="form__input"
              placeholder="••••••••"
              minLength="8"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </div>

          <div className="form__group">
            <button className="btn btn--green" onClick={handleSubmit} required>
              {isPending ? <ScaleLoader color="#eee" height={15} /> : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;
