import React, { useEffect, useState } from "react";

const Form = ({ addFeedback, edit, updateFeedback }) => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEdit
      ? updateFeedback(edit.feedback.id, rating, review)
      : addFeedback({ rating, review });
    setReview("");
  };

  useEffect(() => {
    setRating(edit.feedback.rating);
    setReview(edit.feedback.review);
  }, [edit]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-100 d-flex align-items-center justify-content-center flex-column"
    >
      <div className="mb-3 w-75 d-flex align-items-center justify-content-center">
        <label for="rating" className="form-label me-3 h4">
          Rating
        </label>
        <select
          name="rating"
          id="rating"
          className="form-select w-25"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5" selected>
            5
          </option>
        </select>
      </div>
      <div className="mb-3 d-flex align-items-center justify-content-center w-75">
        <label for="review" className="form-label me-3 h4">
          Review
        </label>
        <textarea
          name="review-area"
          id="review-area"
          className="form-control w-25"
          placeholder="Review Here ..."
          style={{ height: "100px" }}
          onChange={(e) => setReview(e.target.value)}
          value={review}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-25">
        Submit
      </button>
    </form>
  );
};

export default Form;
