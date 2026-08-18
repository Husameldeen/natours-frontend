function TourPictures({ tour }) {
  const { name, images } = tour;

  return (
    <section className="section-pictures">
      <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--1"
          src={`src/assets/tours/${images?.at(0)}`}
          alt={name + " " + images}
        />
      </div>
      <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--2"
          src={`src/assets/tours/${images?.at(1)}`}
          alt={name + " " + images}
        />
      </div>
      <div className="picture-box">
        <img
          className="picture-box__img picture-box__img--3"
          src={`src/assets/tours/${images?.at(2)}`}
          alt={name + " " + images}
        />
      </div>
    </section>
  );
}

export default TourPictures;
