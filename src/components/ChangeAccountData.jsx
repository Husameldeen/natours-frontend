import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../service/services";
import { useMutation } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import toast from "react-hot-toast";

function ChangeAccountData({ user }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPhoto, setNewPhoto] = useState(null);

  async function updateUser(formData) {
    const token = localStorage.getItem("token");

    const { data } = await axios.patch(
      `${BASE_URL}/users/update-me`,

      formData,

      {
        headers: {
          "Content-Type": "multipart/form-data",
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

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);

    if (newPhoto) formData.append("photo", newPhoto);

    mutate(formData);
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
            src={user?.photo?.url}
            alt={`${user.name}`}
          />

          <input
            type="file"
            className="form__upload"
            accept="image/*"
            id="photo"
            name="photo"
            onChange={(e) => setNewPhoto(e.target.files[0])}
          />
          <label htmlFor="photo" className="btn-text">
            Choose new photo
          </label>
        </div>
        <div className="form__group right">
          <button
            className="btn btn--small btn--green"
            disabled={isPending}
            onClick={handleSubmit}
          >
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
