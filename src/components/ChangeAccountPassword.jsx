import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../service/services";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ScaleLoader } from "react-spinners";

function ChangeAccountPassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function updatePassword() {
    const token = localStorage.getItem("token");

    const { data } = await axios.patch(
      `${BASE_URL}/users/update-password`,
      {
        password,
        newPassword,
        passwordConfirm,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return data;
  }

  const { isPending, mutate } = useMutation({
    mutationFn: updatePassword,
    mutationKey: ["me"],
    onSuccess: () => {
      toast.success(`Your password updated successfully`);
    },
    onError: (err) => {
      console.log(err);

      toast.error(`There was error updating your password`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!password || !newPassword || !passwordConfirm) return;

    mutate();
  }

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Password change</h2>
      <form className="form form-user-settings">
        <div className="form__group">
          <label htmlFor="password-current" className="form__label">
            Current password
          </label>
          <input
            type="password"
            className="form__input"
            id="password-current"
            minLength="5"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            New password
          </label>
          <input
            type="password"
            className="form__input"
            id="password"
            placeholder="••••••••"
            minLength="5"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="password-confirm" className="form__label">
            Confirm password
          </label>
          <input
            type="password"
            className="form__input"
            id="password-confirm"
            placeholder="••••••••"
            minLength="5"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        <div className="form__group right">
          <button className="btn btn--small btn--green" onClick={handleSubmit}>
            {isPending ? (
              <ScaleLoader color="#eee" height={15} />
            ) : (
              "Save password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangeAccountPassword;
