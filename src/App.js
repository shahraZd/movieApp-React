import React from "react";
import "./App.css";
import { movies } from "./data";
import MovieList from "./components/MovieList";
import Add from "./components/Add";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    movieArray: movies,
    searchValue: "",
    searchRate: 0
  };
  addMovie = x => {
    this.setState({
      movieArray: [...this.state.movieArray, x]
    });
  };
  render() {
    return (
      <div className="App">
        <Search
          search={x => this.setState({ searchValue: x })}
          starInd={x =>
            this.setState({
              searchRate: x
            })
          }
        />
        <MovieList
          movies={this.state.movieArray}
          searchVal={this.state.searchValue}
          rateVal={this.state.searchRate}
        />
        <Add add={this.addMovie} />
      </div>
    );
  }
}

export default App;
