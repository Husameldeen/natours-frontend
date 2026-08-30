import { LuStar } from "react-icons/lu";

function Review({ review }) {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={review?.user?.photo.url}
          alt="Jim Brown"
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{review?.user?.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">
        {[...Array(5)].map((_, i) =>
          i < review.rating ? (
            <LuStar key={i} className="reviews__star reviews__star--active" />
          ) : (
            <LuStar key={i} className="reviews__star reviews__star--inactive" />
          ),
        )}
      </div>
    </div>
  );
}

export default Review;
