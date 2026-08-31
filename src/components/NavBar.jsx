import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import axios from "axios";
import { BASE_URL } from "../service/services";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import { LuLogOut } from "react-icons/lu";

function NavBar() {
  const { user, logout: logoutContext } = useUser();

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
      logoutContext();
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
          <div className="header__logo">
            <img
              src="https://res.cloudinary.com/peis3mhm/image/upload/v1787858262/logo-green.png"
              alt="Natours logo"
            />
          </div>
        </Link>
        {/* <form className="nav__search">
          <button className="nav__search-btn">
            <LuSearch />
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form> */}
      </nav>
      {/* <div className="header__logo">
        <img
          src="https://res.cloudinary.com/peis3mhm/image/upload/v1787858261/logo-white.png"
          alt="Natours logo"
        />
      </div> */}
      <nav className="nav nav--user">
        {user._id ? (
          <>
            <Link to="/account" className="nav__el">
              <img
                src={user?.photo?.url}
                alt="User photo"
                className="nav__user-img"
              />
              <span>{user.name}</span>
            </Link>
            <button className="nav__el" onClick={handleLogout}>
              {isPending ? (
                <ScaleLoader color="#eee" height={15} />
              ) : (
                <>
                  <LuLogOut />
                </>
              )}
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
