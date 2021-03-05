// fetch request with search param in query string

export default async (req, res) => {
  const { search } = req.body;
  const response = await fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${search}&page=1&r=json`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c01e7d8ab3mshed11ca996f5a03ap1b56f0jsn38e2aaaa8838",
      },
    }
  );
  const data = await response.json();
  res.status(200).json({ search, data });
};
