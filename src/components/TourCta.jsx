function TourCta({ tour }) {
  const { duration, images } = tour;

  const user = localStorage.getItem("user");

  return (
    <section className="section-cta">
      <div className="cta">
        <div className="cta__img cta__img--logo">
          <img
            src={`src/assets/logo-white.png`}
            alt="Natours logo"
            className=""
          />
        </div>
        <img
          src={`src/assets/tours/${images[1]}`}
          alt=""
          className="cta__img cta__img--1"
        />
        <img
          src={`src/assets/tours/${images[0]}`}
          alt=""
          className="cta__img cta__img--2"
        />

        <div className="cta__content">
          <h2 className="heading-secondary">What are you waiting for?</h2>
          <p className="cta__text">
            {duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
          {user ? (
            <button className="btn btn--green span-all-rows">
              Book tour now!
            </button>
          ) : (
            <button className="btn btn--green span-all-rows">
              Login to book a tour
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default TourCta;
