import React, { useEffect, useState } from "react";
import { exerciseDb, fetchExercises } from "../service/apiService";
import BackExercises from "./TargetList";
import BodyPartList from "./BodyPartList";
import EquipmentList from "./EquipmentList";
import ExerciseList from "./ExerciseList";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   const fetchData = async () => {
  //     try {
  //       const response = await exerciseDb();
  //       setProducts(response);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const getAbductorExercises = async () => {
    const data = await fetchExercises("exercises/target/abductors", {
      limit: "10",
      offset: "0",
    });
    console.log(data);
  };

  const getBodyPartDetail = async (name) => {
    const data = await fetchExercises(`exercises/bodyPart/${name}`, {
      limit: "10",
      offset: "0",
    });
    console.log(data);
  };

  const getBodyPartList = async () => {
    const data = await fetchExercises("exercises/bodyPartList");
    console.log(data);
  };

  const getBodyPart = async (bodyPart) => {
    const data = await fetchExercises(`exercises/bodyPart/${bodyPart}`);
    console.log(data);
  };

  const getEquipmentList = async () => {
    const data = await fetchExercises("exercises/equipmentList");
    console.log(data);
  };

  const getEquipmentType = async (type) => {
    const data = await fetchExercises(`exercises/equipment/${type}`, {
      limit: "10",
      offset: "0",
    });
    console.log(data);
  };

  const getTargetList = async () => {
    const data = await fetchExercises("exercises/targetList");
    console.log(data);
  };

  const getEquipmentTargetDetail = async (target) => {
    const data = await fetchExercises(`exercises/target/${target}`, {
      limit: "10",
      offset: "0",
    });
    console.log(data);
  };
  const getExercise = async () => {
    const data = await fetchExercises("exercises", {
      limit: "10",
      offset: "0",
    });
    console.log(data);
  };

  const getExerciseId = async (exId) => {
    const data = await fetchExercises(`exercises/exercise/${exId}`);
    console.log(data);
  };

  const getExerciseByName = async (name) => {
    const data = await fetchExercises(`exercises/name/${name}`, {
      limit: "10",
      offset: "0",
    });
    console.log(data);
  };

  useEffect(() => {
    // fetchData();
    // getAbductorExercises();
    // getBackExercises();
    // getBodyPartList();
    // getEquipmentList();
    // getExercise();
    // getExerciseByName();
    // getExerciseId();
    // getTargetList();
  }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }

  return (
    <div>
      {/* {products.length > 0 ? (
        products.map((product) => <div key={product.id}>{product}</div>)
      ) : (
        <div>No products found.</div>
      )} */}
      <BodyPartList />
      <BackExercises />
      <EquipmentList />
      <ExerciseList />
    </div>
  );
};

export default Products;
