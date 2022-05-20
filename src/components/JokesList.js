import React from "react";
import Joke from "./Joke";
import { Item } from "semantic-ui-react";

const JokesList = ({ jokes, collectRating }) => {
  return (
    <Item.Group divided>
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke.joke} collectRating={collectRating} />
      ))}
    </Item.Group>
  );
};

export default JokesList;
