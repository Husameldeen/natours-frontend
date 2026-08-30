import SideNav from "../components/SideNav";
import AccountSettings from "../components/AccountSettings";
import axios from "axios";
import { BASE_URL } from "../service/services";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Error from "../components/Error";
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
