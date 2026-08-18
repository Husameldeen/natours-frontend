// import Card from "../components/Card";
// import CardContainer from "../components/CardContainer";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { useEffect, useState } from "react";
import TourHeader from "../components/TourHeader";
import TourDescription from "../components/TourDescription";
import TourPictures from "../components/TourPictures";
import TourMap from "../components/TourMap";
import TourReviews from "../components/TourReviews";
import TourCta from "../components/TourCta";

function TourPage() {
  const { slug } = useParams();

  const [tour, setTour] = useState({});

  useEffect(
    () =>
      async function () {
        const data = await fetch(
          `http://127.0.0.1:5000/api/v1/tours?slug=the-forest-hiker`,
        );

        const tourData = await data.json();
        setTour(tourData.data[0]);
      },
    [slug],
  );

  return (
    <>
      <Header />
      <>
        <TourHeader tour={tour} />
        <TourDescription tour={tour} />
        <TourPictures tour={tour} />
        <TourMap tour={tour} />
        <TourReviews tour={tour} />
        <TourCta tour={tour} />
      </>
      <Footer />
    </>
  );
}

export default TourPage;
