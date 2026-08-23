import ChangeAccountData from "./ChangeAccountData";

function AccountSettings({ user }) {
  return (
    <div className="user-view__content">
      <ChangeAccountData user={user} />
      <div className="line">&nbsp;</div>

      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form className="form form-user-settings">
          <div className="form__group">
            <label htmlFor="password-current" className="form__label">
              Current password
            </label>
            <input
              type="password"
              className="form__input"
              id="password-current"
              minLength="8"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="password" className="form__label">
              New password
            </label>
            <input
              type="password"
              className="form__input"
              id="password"
              placeholder="••••••••"
              minLength="8"
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="password-confirm" className="form__label">
              Confirm password
            </label>
            <input
              type="password"
              className="form__input"
              id="password-confirm"
              placeholder="••••••••"
              minLength="8"
              required
            />
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green">Save password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountSettings;
