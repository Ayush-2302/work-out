import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import { formatDistanceToNow } from 'date-fns'


function WorkoutDetails(props) {
  const { dispatch } = useWorkoutsContext();
  const { workout } = props;
  const handleClick = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URI}/api/workout/` + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <>
      <div className="max-w-sm h-32 rounded-md overflow-hidden flex  mt-5 justify-between shadow-lg w-96">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-green-500 mb-2">
            {workout.title}
          </div>
          <p className="text-gray-700 text-base">
            <strong>Load (kg):{workout.load}</strong>
          </p>
          <p className="text-gray-700 text-base">
            <strong>Reps (Times):{workout.reps}</strong>
          </p>
          <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })
          }</p>
        </div>
        <span onClick={handleClick} className="inline-flex items-center h-fit mt-5 mr-4 rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700 hover:cursor-pointer hover:bg-red-400 hover:text-white ring-1 ring-inset ring-red-600/10">Delete</span>

      </div>
    </>
  );
}

export default WorkoutDetails;
