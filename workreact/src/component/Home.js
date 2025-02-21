import React, { useEffect } from "react";
import WorkoutDetails from "./WorkoutDetails";
import WorkForm from "./WorkForm";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
// {title:"",load:"",reps:""}
function Home() {
  const { workouts, dispatch } = useWorkoutsContext();
  
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/workout`);
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkout();
  }, [dispatch]);
  return (
    <>
      <div className="flex  justify-around ">
        <div className=" ml-16 grid  mt-10">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <div className="sticky top-0 mt-10 w-[30rem]">
          <WorkForm />
        </div>
      </div>
    </>
  );
}
export default Home;
