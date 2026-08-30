import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Main from "../components/Main";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUser } from "../context/userContext";
import { BASE_URL } from "../service/services";
import Loading from "../components/Loading";
import Error from "../components/Error";

function HomePage() {
  async function getTours() {
    const { data } = await axios.get(`${BASE_URL}/tours`);

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

  if (isPendingTour) return <Loading />;

  if (isErrorTour) return <Error />;

  const { data: tours } = dataTour;

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
