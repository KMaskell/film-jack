export default async (req, res) => {
    const api_key = process.env.MOVIE_DATABASE_API_KEY;
    const { imdbId } = JSON.parse(req.body);
    const response = await fetch(
        `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${imdbId}&r=json&plot=short`,
        {
            method: "GET",
            headers: {
                "x-rapidapi-key": `${api_key}`,
            },
        }
    );
    const data = await response.json();
    res.status(200).json({ data });
};