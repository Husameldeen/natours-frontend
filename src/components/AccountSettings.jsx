import { useUser } from "../context/userContext";
import ChangeAccountData from "./ChangeAccountData";
import ChangeAccountPassword from "./ChangeAccountPassword";
import Loading from "./Loading";

function AccountSettings() {
  const { user, isPending } = useUser();

  if (isPending) return <Loading />;
  return (
    <div className="user-view__content">
      <ChangeAccountData user={user} />
      <div className="line">&nbsp;</div>
      <ChangeAccountPassword />
    </div>
  );
}

export default AccountSettings;
