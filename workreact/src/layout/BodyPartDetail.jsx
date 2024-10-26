import React from "react";

const BodyPartDetail = ({ exercise }) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-2">{exercise.name}</h2>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        className="w-full rounded-lg mb-4"
      />

      <div className="mb-4">
        <h3 className="text-xl font-medium">Target Muscle</h3>
        <p>{exercise.target}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-medium">Secondary Muscles</h3>
        <p>{exercise.secondaryMuscles.join(", ")}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-medium">Equipment</h3>
        <p>{exercise.equipment}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-medium">Instructions</h3>
        <ol className="list-decimal list-inside">
          {exercise.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BodyPartDetail;
