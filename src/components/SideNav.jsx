import { Link } from "react-router-dom";

function SideNav() {
  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <li className="side-nav--active">
          <Link to="">
            <svg>
              <use xlinkHref="src/assets/icons.svg#icon-settings"></use>
            </svg>
            | Settings
          </Link>
        </li>
        <li className="">
          <Link to="">
            <svg>
              <use xlinkHref="src/assets/icons.svg#icon-briefcase"></use>
            </svg>
            | My bookings
          </Link>
        </li>
        <li className="">
          <Link to="">
            <svg>
              <use xlinkHref="src/assets/icons.svg#icon-star"></use>
            </svg>
            | My reviews
          </Link>
        </li>
        <li className="">
          <Link to="">
            <svg>
              <use xlinkHref="src/assets/icons.svg#icon-credit-card"></use>
            </svg>
            | Billing
          </Link>
        </li>
      </ul>
      <AdminPanel />
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
            <svg>
              <use xlinkHref="src/assets/icons.svg#icon-map"></use>
            </svg>
            | Manage tours
          </Link>
        </li>
        <li>
          <Link to="">
            <svg>
              <use xlinkHref="src/assets/icons.svg#icon-users"></use>
            </svg>
            | Manage users
          </Link>
        </li>
        <li>
          <Link to="">
            <svg>
              <use xlinkHref="src/assets/icons.svg#icon-star"></use>
            </svg>
            | Manage reviews
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
