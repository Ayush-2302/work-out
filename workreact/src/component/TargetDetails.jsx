import React, { useEffect, useState } from "react";
import { fetchExercises } from "../service/apiService";
import { useParams } from "react-router-dom";

const TargetDetails = () => {
  const { target } = useParams();
  console.log(target);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTargetDetail = async () => {
      setLoading(true);
      try {
        const response = await fetchExercises(`exercises/target/${target}`, {
          limit: 10,
          offset: 0,
        });
        setData(response);
        console.log(response);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    };
    getTargetDetail();
  }, [target]);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-bold mb-4">
        Exercises for {target}
      </h1>

      {loading ? (
        <p>Loading exercises...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((exercise, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={exercise.gifUrl}
                alt={exercise.name}
                className="w-full h-96 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium">{exercise.name}</h3>
              <p className="text-gray-600">Equipment: {exercise.equipment}</p>
              <p className="text-gray-600">Target: {exercise.target}</p>
              <div className="mt-2">
                <h4 className="font-semibold">Instructions:</h4>
                <ol className="list-decimal list-inside">
                  {exercise.instructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No exercises found for {target}</p>
      )}
    </div>
  );
};

export default TargetDetails;
