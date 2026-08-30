import SideNav from "../components/SideNav";
import AccountSettings from "../components/AccountSettings";

import Loading from "../components/Loading";
import { useUser } from "../context/userContext";

function Account() {
  const { user, isPending } = useUser();

  if (isPending) return <Loading />;

  return (
    <div className="user-view">
      <SideNav />
      <AccountSettings user={user} />
    </div>
  );
}

export default Account;
