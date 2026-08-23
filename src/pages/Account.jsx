import SideNav from "../components/SideNav";
import AccountSettings from "../components/AccountSettings";
import axios from "axios";
import { BASE_URL } from "../service/services";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useUser } from "../context/userContext";

function Account() {
  const token = localStorage.getItem("token");
  const { setUser } = useUser();

  async function getME() {
    const { data } = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  const { isPending, isError, data } = useQuery({
    queryKey: ["me"],
    queryFn: getME,
  });

  if (isPending) return <Loading />;

  if (isError) return <Error />;

  if (data) setUser(data.data.data);

  return (
    <div className="user-view">
      <SideNav />
      <AccountSettings user={data.data.data} />
    </div>
  );
}

export default Account;
