function TourHeader({ tour }) {
  const {
    duration,
    name,
    startLocation,
    // difficulty,
    // id,
    // description,
    // durationWeeks,
    // guides,
    // imageCover,
    // images,
    // secretTour,
    // startDates,
    // locations,
    // maxGroupSize,
    // price,
    // ratingsAverage,
    // ratingsQuantity,
    // slug,
    // summary,
  } = tour;

  console.log(tour);

  return (
    <section className="section-header">
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>{name} TOUR</span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use xlinkHref="src/assets/icons.svg#icon-clock"></use>
            </svg>
            <span className="heading-box__text">{duration} days</span>
          </div>
          <div className="heading-box__detail">
            <svg className="heading-box__icon">
              <use xlinkHref="src/assets/icons.svg#icon-map-pin"></use>
            </svg>
            <span className="heading-box__text">
              {startLocation?.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourHeader;
