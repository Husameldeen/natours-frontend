import Main from "./Main";

function Error() {
  return (
    <Main>
      <div className="error__title">
        <h2 className="heading-secondary heading-secondary--error">
          Uh oh! Something went wrong!
        </h2>
        <h2 className="error__emoji">😢 🤯</h2>
      </div>
      <div className="error__msg">Page wasn't found!</div>
    </Main>
  );
}

export default Error;
