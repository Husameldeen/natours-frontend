import { useParams } from "react-router-dom";
import TourHeader from "../components/TourHeader";
import TourDescription from "../components/TourDescription";
import TourPictures from "../components/TourPictures";
import TourMap from "../components/TourMap";
import TourReviews from "../components/TourReviews";
import TourCta from "../components/TourCta";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Main from "../components/Main";
import { BounceLoader } from "react-spinners";

function TourPage() {
  const { slug } = useParams();

  async function getTourBySlug(slugValue) {
    const { data } = await axios.get(
      `http://127.0.0.1:5000/api/v1/tours?slug=${slugValue}`,
    );

    return data;
  }

  const { isPending, isError, data } = useQuery({
    queryKey: ["tour", slug],
    queryFn: () => getTourBySlug(slug),
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

  const { data: tourData } = data;

  const tour = tourData[0];

  return (
    <>
      <TourHeader tour={tour} />
      <TourDescription tour={tour} />
      <TourPictures tour={tour} />
      <TourMap tour={tour} />
      <TourReviews id={tour.id} />
      <TourCta tour={tour} />
    </>
  );
}

export default TourPage;
