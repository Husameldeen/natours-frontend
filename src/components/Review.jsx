function Review({ review }) {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={`src/assets/users/${review?.user?.photo}`}
          alt="Jim Brown"
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{review?.user?.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">
        {[...Array(5)].map((_, i) =>
          i < review.rating ? (
            <svg key={i} className="reviews__star reviews__star--active">
              <use xlinkHref="src/assets/icons.svg#icon-star"></use>
            </svg>
          ) : (
            <svg key={i} className="reviews__star reviews__star--inactive">
              <use xlinkHref="src/assets/icons.svg#icon-star"></use>
            </svg>
          ),
        )}
      </div>
    </div>
  );
}

export default Review;
