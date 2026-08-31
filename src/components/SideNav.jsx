import {
  LuBriefcase,
  LuCreditCard,
  LuMap,
  LuSettings,
  LuStar,
  LuUsers,
} from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../context/userContext";

function SideNav() {
  const { user } = useUser();
  const location = useLocation();

  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <li
          className={location.pathname === "/account" ? "side-nav--active" : ""}
        >
          <Link to="/account">
            <LuSettings className="lu-icon" />| Settings
          </Link>
        </li>
        <li
          className={
            location.pathname === "/my-bookings" ? "side-nav--active" : ""
          }
        >
          <Link to="/my-bookings">
            <LuBriefcase className="lu-icon" />| My bookings
          </Link>
        </li>
        <li className="">
          <Link to="">
            <LuStar className="lu-icon" />| My reviews
          </Link>
        </li>
        <li className="">
          <Link to="">
            <LuCreditCard className="lu-icon" />| Billing
          </Link>
        </li>
      </ul>
      {user.role === "admin" && <AdminPanel />}
    </nav>
  );
}

function AdminPanel() {
  return (
    <div className="admin-nav">
      <h5 className="admin-nav__heading">Admin</h5>
      <ul className="side-nav">
        <li>
          <Link to="">
            <LuMap className="lu-icon" />| Manage tours
          </Link>
        </li>
        <li>
          <Link to="">
            <LuUsers className="lu-icon" />| Manage users
          </Link>
        </li>
        <li>
          <Link to="">
            <LuStar className="lu-icon" />| Manage reviews
          </Link>
        </li>
        {/* <li>
              <Link to="">
                <svg>
                  <use xlinkHref="src/assets/icons.svg#icon-briefcase"></use>
                </svg>
              </Link>
            </li> */}
      </ul>
    </div>
  );
}

export default SideNav;
