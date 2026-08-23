import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

function NavBar() {
  const { user } = useUser();

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
            <Link to="#" className="nav__el">
              My bookings
            </Link>
            <Link to="/account" className="nav__el">
              <img
                src={`src/assets/users/${user.photo}`}
                alt="User photo"
                className="nav__user-img"
              />
              <span>{user.name}</span>
            </Link>
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
