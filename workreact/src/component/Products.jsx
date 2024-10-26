import React from "react";
import BackExercises from "./TargetList";
import BodyPartList from "./BodyPartList";
import EquipmentList from "./EquipmentList";
import ExerciseList from "./ExerciseList";

const Products = () => {
  return (
    <div>
      <BodyPartList />
      <BackExercises />
      <EquipmentList />
      <ExerciseList />
    </div>
  );
};

export default Products;
