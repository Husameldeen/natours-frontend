import SideNav from "../components/SideNav";

function Account({ children }) {
  return (
    <div className="user-view">
      <SideNav />
      {children}
    </div>
  );
}

export default Account;
