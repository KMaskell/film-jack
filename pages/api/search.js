// fetch request with search param in query string

// const dotenv = require("dotenv").config();

export default async (req, res) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const { search } = req.body;
  const response = await fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${search}&page=1&r=json`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${api_key}`,
      },
    }
  );
  const data = await response.json();
  res.status(200).json({ search, data });
};
