import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Card from "./Components/Card";
import AverageRating from "./Components/AverageRating";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      rating: 5,
      review: "Excellent Product",
    },
  ]);

  const [avgRating, setAvgRating] = useState(5);
  const [edit, setEdit] = useState({ feedback: {}, isEdit: false });

  const addFeedback = ({ rating, review }) => {
    setFeedbacks([{ id: crypto.randomUUID(), rating, review }, ...feedbacks]);
  };

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
  };

  // console.log(feedbacks);

  const editFeedback = ({ id, rating, review }) => {
    setEdit({ feedback: { id, rating, review }, isEdit: true });
  };

  const updateFeedback = (oldId, newRating, newReview) => {
    setFeedbacks(
      feedbacks.map((feedback) => {
        if (feedback.id === oldId) {
          return { id: oldId, rating: newRating, review: newReview };
        } else {
          return feedback;
        }
      })
    );
    setEdit({ feedback: {}, isEdit: false });
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="w-100 my-5">
        <Form
          addFeedback={addFeedback}
          edit={edit}
          updateFeedback={updateFeedback}
        />
        <AverageRating feedbacks={feedbacks} />
        <div className="card-section my-5 d-flex align-items-center justify-content-evenly flex-wrap">
          {feedbacks.map((feedback) => {
            return (
              <Card
                key={feedback.id}
                id={feedback.id}
                rating={feedback.rating}
                review={feedback.review}
                deleteFeedback={deleteFeedback}
                editFeedback={editFeedback}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
