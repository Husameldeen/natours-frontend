import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";
import axios from "axios";
import { BASE_URL } from "../service/services";
// import Stripe from "stripe";

import { loadStripe } from "@stripe/stripe-js";

const stripe = await loadStripe(
  "pk_test_51U9qAbH3NW1hehkF8nALle3KtAmt8hES0xarAoqksB6McxP5SVXQlkfYznAA0AnKD5Bd8DsI6peZDxQ7QW1LFVqm00yPCbXOW0",
);

function TourCta({ tour }) {
  const { duration, images, _id: id } = tour;

  const { user } = useUser();

  async function handleStripePayment(tourId) {
    if (!tourId) return;

    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `${BASE_URL}/booking/checkout-session/${tourId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    window.location.href = data.session.url;

    // await stripe.redirectToCheckout({ sessionId: data.session.id });
  }

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img
            src="https://res.cloudinary.com/peis3mhm/image/upload/v1787858261/logo-white.png"
            alt="Natours logo"
            className=""
          />
        </div>
        <img src={images[1]} alt="" className="cta__img cta__img--1" />
        <img src={images[0]} alt="" className="cta__img cta__img--2" />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          {user._id ? (
            <button
              onClick={() => handleStripePayment(id)}
              className="btn btn--green span-all-rows"
            >
              Book tour now!
            </button>
          ) : (
            <Link to={"/login"} className="btn btn--green span-all-rows">
              Login to book a tour
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default TourCta;
