import React, { useEffect, useState } from "react";
import { fetchExercises } from "../service/apiService";
import { Link } from "react-router-dom";

const BodyPartList = () => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const getBodyPartList = async () => {
      try {
        const data = await fetchExercises("exercises/bodyPartList");
        setBodyParts(data);
      } catch (error) {
        console.error("Error fetching body part list:", error);
      }
    };

    getBodyPartList();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Body Parts</h2>
      <div className="flex flex-wrap gap-2">
        {bodyParts.length > 0 ? (
          bodyParts.map((part) => (
            <Link
              key={part}
              to={`/exercises/bodyPart/${part}`}
              className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
              {part}
            </Link>
          ))
        ) : (
          <div>No body parts found.</div>
        )}
      </div>
    </div>
  );
};

export default BodyPartList;
