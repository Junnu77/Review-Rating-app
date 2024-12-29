import React from "react";

const Card = ({ rating, review, id, deleteFeedback, editFeedback }) => {
  return (
    <div>
      <div className="card my-2 mx-1" style={{ width: "18rem" }}>
        <div className="card-body">
          <p>{id}</p>
          <h5 className="card-title">Rating : {rating}</h5>
          <p className="card-text">{review}</p>
          <span className="float-end">
            <button
              onClick={() => editFeedback({ id, rating, review })}
              className="btn btn-warning me-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteFeedback(id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
