import React, { useEffect, useState } from "react";
import { fetchExercises } from "../service/apiService";
import { useParams } from "react-router-dom";

const ExerciseDetails = () => {
  const { exercise_id } = useParams();
  const [data, setData] = useState(null);

  const getExerciseDetail = async () => {
    try {
      const exercises = await fetchExercises(
        `exercises/exercise/${exercise_id}`
      );
      setData(exercises);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  useEffect(() => {
    getExerciseDetail();
  }, [exercise_id]);

  if (!data) {
    return <p>Loading exercise details...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-5xl font-bold mb-6">Exercise Details</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img
          src={data.gifUrl}
          alt={data.name}
          className="w-3/4 mx-auto h-[500px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">{data.name}</h3>
        <p className="text-gray-700 mb-2">
          <strong>Target Muscles:</strong> {data.target}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Secondary Muscles:</strong> {data.secondaryMuscles.join(", ")}
        </p>

        <div className="mt-4">
          <h4 className="font-semibold text-lg">Instructions:</h4>
          <ol className="list-decimal list-inside text-gray-600">
            {data.instructions.map((instruction, idx) => (
              <li key={idx} className="mb-2">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
