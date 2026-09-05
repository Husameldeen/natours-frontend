import Review from "./Review";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../service/services";

function TourReviews({ id }) {
  async function getTourReviews() {
    const { data } = await axios.get(`${BASE_URL}/tours/${id}/reviews`);

    return data;
  }

  const { isPending, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: getTourReviews,
  });

  if (isPending) return <p>Loading...</p>;

  const { data: reviews } = data;

  return (
    <section className="section-reviews">
      <div className="reviews">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </section>
  );
}

export default TourReviews;
