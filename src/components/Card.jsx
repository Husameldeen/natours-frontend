import { NavLink } from "react-router-dom";
import { LuCalendar, LuFlag, LuMapPin, LuUsers } from "react-icons/lu";

function Card({ tour }) {
  const {
    difficulty,
    duration,
    // id,
    // description,
    // durationWeeks,
    // guides,
    imageCover,
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
          <img src={imageCover} alt="Tour 1" className="card__picture-img" />
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
          <LuMapPin className="card__icon" />
          <span>{startLocation.description}</span>
        </div>
        <div className="card__data">
          <LuCalendar className="card__icon" />
          <span>April 2021</span>
        </div>
        <div className="card__data">
          <LuFlag className="card__icon" />
          <span>{locations.length} stops</span>
        </div>
        <div className="card__data">
          <LuUsers className="card__icon" />
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
