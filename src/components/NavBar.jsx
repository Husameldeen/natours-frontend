import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import axios from "axios";
import { BASE_URL } from "../service/services";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ScaleLoader } from "react-spinners";

function NavBar() {
  const { user, setUser } = useUser();
  console.log(user);

  const navigate = useNavigate();

  async function logout() {
    const { data } = await axios.get(`${BASE_URL}/users/logout`);

    return data;
  }

  const { isPending, mutate: handleLogout } = useMutation({
    mutationKey: ["me", "user"],
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logout successfully");
      localStorage.setItem("token", "");
      setUser("");
      navigate("/", { replace: true });
    },
    onError: () => {
      toast.error("Error logging out");
    },
  });

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use xlinkHref="src/assets/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <img src="src/assets/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {user._id ? (
          <>
            {/* <Link to="#" className="nav__el">
              My bookings
            </Link> */}
            <Link to="/account" className="nav__el">
              <img
                src={user.photo.url}
                alt="User photo"
                className="nav__user-img"
              />
              <span>{user.name}</span>
            </Link>
            <button className="nav__el" onClick={handleLogout}>
              {isPending ? <ScaleLoader color="#eee" height={15} /> : "Log Out"}
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"} className="nav__el">
              Log in
            </Link>
            <Link to={"/signup"} className="nav__el nav__el--cta">
              Sign up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
