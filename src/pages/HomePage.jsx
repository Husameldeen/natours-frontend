import { BounceLoader } from "react-spinners";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Main from "../components/Main";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUser } from "../context/userContext";

function HomePage() {
  const token = localStorage.getItem("token");
  const { setUser } = useUser();

  const BASE_URL = "http://127.0.0.1:5000/api/v1";

  async function getTours() {
    const { data } = await axios.get(`${BASE_URL}/tours`);

    return data;
  }

  async function getLoggedinUser() {
    const { data } = await axios.get(`${BASE_URL}/users/is-loggedin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }

  const {
    isPending: isPendingTour,
    isError: isErrorTour,
    data: dataTour,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  const { isPending: isPendingUser, data: dataUser } = useQuery({
    queryKey: ["user"],
    queryFn: getLoggedinUser,
  });

  if (isPendingTour || isPendingUser)
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

  if (isErrorTour)
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

  const { data: tours } = dataTour;

  if (dataUser) setUser(dataUser.data.user);

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
