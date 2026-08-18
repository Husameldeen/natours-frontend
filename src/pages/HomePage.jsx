import { useEffect, useState } from "react";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

function HomePage() {
  const [tours, setTours] = useState([]);

  useEffect(
    () =>
      async function () {
        const data = await fetch("http://127.0.0.1:5000/api/v1/tours");

        const toursData = await data.json();
        setTours(toursData.data);
      },
    [],
  );

  return (
    <>
      <Header />
      <Main>
        <CardContainer>
          {tours.length > 0 &&
            tours.map((tour) => <Card tour={tour} key={tour.id} />)}
        </CardContainer>
      </Main>
      <Footer />
    </>
  );
}

export default HomePage;
