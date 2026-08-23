import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../service/services";
import { useMutation } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import toast from "react-hot-toast";

function ChangeAccountData({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  async function updateUser() {
    const token = localStorage.getItem("token");

    const { data } = await axios.patch(
      `${BASE_URL}/users/update-me`,
      {
        name,
        email,
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
    mutationFn: updateUser,
    mutationKey: ["me"],
    onSuccess: () => {
      toast.success(`Your informations updated successfully`);
    },
    onError: (err) => {
      console.log(err);

      toast.error(`There was error updating your informations`);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email) return;

    mutate();
  }

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      <form className="form form-user-data">
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            type="text"
            className="form__input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form__group ma-bt-md">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            className="form__input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src={`src/assets/users/${user.photo}`}
            alt={`${user.name}`}
          />
          <Link className="btn-text">Choose new photo</Link>
        </div>
        <div className="form__group right">
          <button className="btn btn--small btn--green" onClick={handleSubmit}>
            {isPending ? (
              <ScaleLoader color="#eee" height={15} />
            ) : (
              "Save settings"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangeAccountData;
