import { BounceLoader } from "react-spinners";
import Main from "./Main";

function Loading() {
  return (
    <Main>
      <div
        style={{
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BounceLoader color="#55c57a" />
      </div>
    </Main>
  );
}

export default Loading;
