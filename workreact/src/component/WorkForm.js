import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";

function WorkForm() {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch(`${process.env.REACT_APP_API_URI}/workout`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    

    console.log(response);
    
    const contentType = response.headers.get("content-type");
    const json = await response.json();

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("workout added ");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    } else {
      console.error("Unexpected response type:", contentType);
      setError("Unexpected response from the server");
    }
  };
  return (
    <>
      <div className=" flex sticky top-20 flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add New Workout
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-large font-medium leading-6 text-gray-900"
              >
                Exercise Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  required
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-large font-medium leading-6 text-gray-900"
              >
                Load(in kg)
              </label>
              <div className="mt-2">
                <input
                  id="load"
                  name="load"
                  type="text"
                  onChange={(e) => {
                    setLoad(e.target.value);
                  }}
                  value={load}
                  autoComplete="load"
                  required
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="load"
                  className="block text-large font-medium leading-6 text-gray-900"
                >
                  Reps
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="reps"
                  name="reps"
                  type="text"
                  onChange={(e) => {
                    setReps(e.target.value);
                  }}
                  value={reps}
                  autoComplete="reps"
                  required
                  className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Workout
              </button>
            </div>
            {error && (
              <div className="error border-2 rounded-md border-red-400 p-2 text-red-600">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default WorkForm;
