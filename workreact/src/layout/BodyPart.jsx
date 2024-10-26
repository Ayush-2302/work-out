import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchExercises } from "../service/apiService";
import ExerciseDetail from "./BodyPartDetail";

const BodyPart = () => {
  const { bodyPart } = useParams();
  const [data, setData] = useState([]);

  const getBodyPartDetail = async () => {
    try {
      const exercises = await fetchExercises(`exercises/bodyPart/${bodyPart}`, {
        limit: "10",
        offset: "0",
      });
      setData(exercises);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  useEffect(() => {
    getBodyPartDetail();
  }, [bodyPart]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises
      </h1>
      <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
          data.map((exercise) => (
            <ExerciseDetail key={exercise.id} exercise={exercise} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No exercises found for this body part.
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyPart;
