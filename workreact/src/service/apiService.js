import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;


export const fetchExercises = async (endpoint, params = {}) => {
  const options = {
    method: "GET",
    url: `https://exercisedb.p.rapidapi.com/${endpoint}`,
    params: params,
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Example usage:
