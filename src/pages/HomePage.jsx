import { BounceLoader } from "react-spinners";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Main from "../components/Main";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLogin } from "../hooks/useLogin";

function HomePage() {
  const { user } = useLogin();

  async function getTours() {
    const { data } = await axios.get("http://127.0.0.1:5000/api/v1/tours");

    return data;
  }

  const { isPending, isError, data } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  if (isPending)
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

  if (isError)
    return (
      <main className="main">
        <div className="error__title">
          <h2 className="heading-secondary heading-secondary--error">
            Uh oh! Something went wrong!
          </h2>
          <h2 className="error__emoji">😢 🤯</h2>
        </div>
        <div className="error__msg">Page wasn't found!</div>
      </main>
    );

  const { data: tours } = data;

  return (
    <Main>
      <CardContainer>
        {tours.length > 0 &&
          tours.map((tour) => <Card tour={tour} key={tour.id} />)}
      </CardContainer>
    </Main>
  );
}

export default HomePage;
