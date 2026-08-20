function TourGuides({ guide }) {
  return (
    <div className="overview-box__detail">
      <img
        src={`src/assets/users/${guide.photo}`}
        alt="Lead guide"
        className="overview-box__img"
      />
      <span className="overview-box__label">{guide.role}</span>
      <span className="overview-box__text">{guide.name}</span>
    </div>
  );
}

export default TourGuides;
