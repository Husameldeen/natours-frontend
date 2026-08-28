import { LuCalendar, LuStar, LuTrendingUp, LuUser } from "react-icons/lu";
import TourGuides from "./TourGuides";

function TourDescription({ tour }) {
  const {
    name,
    difficulty,
    description,
    maxGroupSize,
    ratingsAverage,
    guides,
  } = tour;

  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <div className="overview-box__detail">
              <LuCalendar className="overview-box__icon" />
              <span className="overview-box__label">Next date</span>
              <span className="overview-box__text">August 2021</span>
            </div>
            <div className="overview-box__detail">
              <LuTrendingUp className="overview-box__icon" />
              <span className="overview-box__label">Difficulty</span>
              <span className="overview-box__text">{difficulty}</span>
            </div>
            <div className="overview-box__detail">
              <LuUser className="overview-box__icon" />
              <span className="overview-box__label">Participants</span>
              <span className="overview-box__text">{maxGroupSize} people</span>
            </div>
            <div className="overview-box__detail">
              <LuStar className="overview-box__icon" />
              <span className="overview-box__label">Rating</span>
              <span className="overview-box__text">{ratingsAverage} / 5</span>
            </div>
          </div>

          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>

            {guides.map((guide) => (
              <TourGuides guide={guide} key={guide._id} />
            ))}
          </div>
        </div>
      </div>

      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">About {name} tour</h2>
        <p className="description__text">{description}</p>
      </div>
    </section>
  );
}

export default TourDescription;
