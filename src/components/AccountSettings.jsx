import ChangeAccountData from "./ChangeAccountData";
import ChangeAccountPassword from "./ChangeAccountPassword";

function AccountSettings({ user }) {
  return (
    <div className="user-view__content">
      <ChangeAccountData user={user} />
      <div className="line">&nbsp;</div>
      <ChangeAccountPassword />
    </div>
  );
}

export default AccountSettings;
