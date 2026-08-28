import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

function TourCta({ tour }) {
  const { duration, images } = tour;

  const { user } = useUser();

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
            <button className="btn btn--green span-all-rows">
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
