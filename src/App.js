import React from "react";
import JokesList from "./components/JokesList";
import AverageMood from "./components/AverageMood";
import { Button, Loader } from "semantic-ui-react";
import { getRandomJoke } from "./api/getRandomJoke";
import "./App.css";

class App extends React.Component {
  state = {
    jokes: [],
    isLoading: false,
    ratedJokes: [],
  };

  // inicjujemy pierwsze 10 żartów
  componentDidMount() {
    this.addJokes(10);
  }

  // robimy set widzianych żartów
  get seenJokes() {
    return new Set(this.state.jokes.map((j) => j.joke));
  }

  async addJokes(num) {
    this.setState({ isLoading: true });

    const newJokes = [];

    while (newJokes.length < num) {
      const newJoke = await getRandomJoke();

      // sprawdzamy czy mamy już te żarty w newJokes[]
      const seenNewJokes = new Set(newJokes.map((j) => j.joke));
      if (
        !this.seenJokes.has(newJoke.joke) && // czy nie ma w starych
        !seenNewJokes.has(newJoke.joke) // czy nie ma w nowych
      ) {
        newJokes.push(newJoke);
      }
    }

    this.setState((st) => ({
      isLoading: false,
      jokes: [...st.jokes, ...newJokes],
    }));
  }

  collectRating = (rating) => {
    this.setState({ ratedJokes: [...this.state.ratedJokes, rating] });
  };

  render() {
    const { ratedJokes, isLoading, jokes } = this.state;

    return (
      <>
        <AverageMood ratedJokes={ratedJokes} />
        <div className="container">
          <h1 className="title">🙈 Rate random joke! 🙈</h1>
          <JokesList jokes={jokes} collectRating={this.collectRating} />
          {isLoading ? (
            <Loader active inline content="Loading" />
          ) : (
            <Button onClick={() => this.addJokes(3)} size="huge" color="violet">
              Load 3 More!
            </Button>
          )}
        </div>
      </>
    );
  }
}

export default App;
