import { NavLink } from "react-router-dom";

function Card({ tour }) {
  const {
    difficulty,
    duration,
    // id,
    // description,
    // durationWeeks,
    // guides,
    // imageCover,
    // images,
    // secretTour,
    // startDates,
    locations,
    maxGroupSize,
    name,
    price,
    ratingsAverage,
    ratingsQuantity,
    slug,
    startLocation,
    summary,
  } = tour;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src="src/assets/tour-1-cover.jpg"
            alt="Tour 1"
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>{name}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">
          {difficulty} {duration}-days tour
        </h4>
        <p className="card__text">{summary}</p>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="src/assets/icons.svg#icon-map-pin"></use>
          </svg>
          <span>{startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="src/assets/icons.svg#icon-calendar"></use>
          </svg>
          <span>April 2021</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="src/assets/icons.svg#icon-flag"></use>
          </svg>
          <span>{locations.length} stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use xlinkHref="src/assets/icons.svg#icon-user"></use>
          </svg>
          <span>{maxGroupSize} people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">${price} </span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{ratingsAverage} </span>
          <span className="card__footer-text">rating ({ratingsQuantity})</span>
        </p>
        <NavLink to={`/${slug}`} className="btn btn--green btn--small">
          Details
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
