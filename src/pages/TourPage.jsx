import { useParams } from "react-router-dom";
import TourHeader from "../components/TourHeader";
import TourDescription from "../components/TourDescription";
import TourPictures from "../components/TourPictures";
import TourMap from "../components/TourMap";
import TourReviews from "../components/TourReviews";
import TourCta from "../components/TourCta";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../service/services";
import Loading from "../components/Loading";
import Error from "../components/Error";

function TourPage() {
  const { slug } = useParams();

  async function getTourBySlug(slugValue) {
    const { data } = await axios.get(
      `${BASE_URL}/api/v1/tours?slug=${slugValue}`,
    );

    return data;
  }

  const { isPending, isError, data } = useQuery({
    queryKey: ["tour", slug],
    queryFn: () => getTourBySlug(slug),
  });

  if (isPending) return <Loading />;

  if (isError) return <Error />;

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
