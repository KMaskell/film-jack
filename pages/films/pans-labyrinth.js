// example fetch pan's labyrinth data from api and render

import React from "react";

class PansData extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch(
      "https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt0457430&type=movie&r=json&plot=short&y=2016",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "c01e7d8ab3mshed11ca996f5a03ap1b56f0jsn38e2aaaa8838",
        },
      }
    );
    const json = await res.json();
    return {
      title: json.Title,
      year: json.Year,
      synopsis: json.Plot,
      thumbnail: json.Poster,
    };
  }

  render() {
    return (
      <div>
        <img
          src={this.props.thumbnail}
          alt="Pan's Labyrinth packshot"
          width="100"
        ></img>
        <h4>{this.props.title}</h4>
        <h5>Released: {this.props.year}</h5>
        <h5>Synopsis</h5>
        {this.props.synopsis}
      </div>
    );
  }
}

export default PansData;
