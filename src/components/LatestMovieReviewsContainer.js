import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: [],
  };

  getMovies = (newFilms) => {
    this.setState({
      reviews: newFilms,
    });
  };

  componentDidMount = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => this.getMovies(data.results))
      .catch((error) => console.error("ERROR: ", error));
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
