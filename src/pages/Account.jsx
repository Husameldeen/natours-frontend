import SideNav from "../components/SideNav";
import AccountSettings from "../components/AccountSettings";

import Loading from "../components/Loading";
import { useUser } from "../context/userContext";

function Account({ children }) {
  return (
    <div className="user-view">
      <SideNav />
      {children}
    </div>
  );
}

export default Account;
