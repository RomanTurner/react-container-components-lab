// Code MovieReviews Here
import React from "react";

const Review = ({ headline, byline, link, summary_short, multimedia}) => {
  return (
    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br />
        <img src={multimedia.src} />
        <br />
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};


function uniqBy(reviews) {
  let setKey = new Set();
  let uniqReviews = [];
  reviews.map((movie) =>
    setKey.has(movie.headline)
      ? false
      : setKey.add(movie.headline) && uniqReviews.push(movie)
  );
  return uniqReviews;
}



const MovieReviews = ({reviews}) => {
  return <div className="review-list">{uniqBy(reviews).map(Review)}</div>;
};

MovieReviews.defaultProps = {
  movies: [{
    headline: "Croops",
    byline: "Rocky Road",
    link: "no link",
    summary_short: "Smoopy",
    multimedia: {src:"boo"}
  }],
};

export default MovieReviews;
