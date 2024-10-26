import React, { useEffect, useState } from "react";
import { fetchExercises } from "../service/apiService";
import { Link } from "react-router-dom";

const BackExercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getBackExercises = async () => {
      try {
        const data = await fetchExercises("exercises/targetList", {
          limit: "10",
          offset: "0",
        });

        setExercises(data);
      } catch (error) {
        console.error("Error fetching back exercises:", error);
      }
    };

    getBackExercises();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Target List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.length > 0 ? (
          exercises.map((exercise, index) => (
            <Link
              to={`/exercises/target/${exercise}`}
              key={index}
              className="bg-blue-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-medium">{exercise}</h3>
            </Link>
          ))
        ) : (
          <div>No back exercises found.</div>
        )}
      </div>
    </div>
  );
};

export default BackExercises;
