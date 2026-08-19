import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Main from "../components/Main";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function HomePage() {
  async function getTours() {
    const { data } = await axios.get("http://127.0.0.1:5000/api/v1/tours");

    return data;
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });

  if (isPending) return <p>Loading...</p>;

  const { data: tours } = data;
  console.log(tours);

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
