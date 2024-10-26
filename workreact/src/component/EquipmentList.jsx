import React, { useEffect, useState } from "react";
import { fetchExercises } from "../service/apiService";
import { Link } from "react-router-dom";

const EquipmentList = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    const getEquipmentList = async () => {
      try {
        const data = await fetchExercises("exercises/equipmentList");
        setEquipment(data);
      } catch (error) {
        console.error("Error fetching equipment list:", error);
      }
    };

    getEquipmentList();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Equipment List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {equipment.length > 0 ? (
          equipment.map((item) => (
            <Link
              to={`/exercises/equipment/${item}`}
              key={item}
              className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-medium">{item}</h3>
            </Link>
          ))
        ) : (
          <div>No equipment found.</div>
        )}
      </div>
    </div>
  );
};

export default EquipmentList;
