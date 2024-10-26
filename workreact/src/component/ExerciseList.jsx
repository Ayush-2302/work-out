import React, { useEffect, useState } from "react";
import { fetchExercises } from "../service/apiService";
import { Link } from "react-router-dom";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getExercise = async () => {
      try {
        const data = await fetchExercises("exercises", {
          limit: "10",
          offset: "0",
        });
        setExercises(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    getExercise();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <Link
              to={`/exercises/exercise/${exercise.id}`}
              key={exercise.id}
              className="bg-yellow-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-medium">{exercise.name}</h3>
            </Link>
          ))
        ) : (
          <div>No exercises found.</div>
        )}
      </div>
    </div>
  );
};

export default ExerciseList;
