import { LuClock5, LuMapPin } from "react-icons/lu";

function TourHeader({ tour }) {
  const { duration, name, startLocation, imageCover } = tour;

  return (
    <section className="section-header">
      <div className="header__hero">
        <div className="header__hero-overlay">&nbsp;</div>
        <img
          className="header__hero-img"
          src={imageCover}
          alt="The Sea Explorer"
        />
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">
          <span>{name} TOUR</span>
        </h1>
        <div className="heading-box__group">
          <div className="heading-box__detail">
            <LuClock5 className="heading-box__icon" />
            <span className="heading-box__text">{duration} days</span>
          </div>
          <div className="heading-box__detail">
            <LuMapPin className="heading-box__icon" />
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
