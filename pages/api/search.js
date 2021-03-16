export default async (req, res) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const { searchInput } = JSON.parse(req.body);
  const response = await fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${searchInput}&page=1&r=json`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${api_key}`,
      },
    }
  );
  const data = await response.json();
  res.status(200).json({ searchInput, data });
};

