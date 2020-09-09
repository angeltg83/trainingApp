import React from "react";
import Card from "../components/Card";

const ExerciseList = ({ exercise }) => (
  <div>
    {exercise.map((e) => {
      return (
        <Card
          key={e._id}
          title={e.title}
          description={e.description}
          img={e.img}
          leftColor={e.leftColor}
          rightColor={e.rightColor}
        />
      );
    })}
  </div>
);

export default ExerciseList;
