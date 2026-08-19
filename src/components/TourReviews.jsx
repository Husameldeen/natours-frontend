import { useEffect, useState } from "react";
import Review from "./Review";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function TourReviews({ id }) {
  async function getTourReviews() {
    const { data } = await axios.get(
      `http://127.0.0.1:5000/api/v1/tours/${id}/reviews`,
    );

    return data;
  }

  const { isPending, isError, data, error } = useQuery({
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
