import React from "react";

const AverageRating = ({ feedbacks }) => {
  const average = feedbacks.reduce(
    (p, c) => p + c.rating / feedbacks.length,
    0
  );
  return (
    <div className="my-2 w-100 d-flex align-items-center justify-content-center flex-column">
      <hr className="w-50" />
      <span className="w-100 d-flex align-items-center justify-content-center">
        <h5 className="me-5">Total Ratings : {feedbacks.length}</h5>
        <h5>Average Rating : {average.toFixed(2)}</h5>
      </span>
    </div>
  );
};

export default AverageRating;
