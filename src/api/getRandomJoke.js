import axios from "axios";

export const getRandomJoke = async () => {
  try {
    const response = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });

    return response.data;
  } catch (err) {
    alert(err);
  }
};
