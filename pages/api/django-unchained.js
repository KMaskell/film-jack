// example django unchained data fetch from api and pass as props

export default async function getStaticProps(context) {
  const res = await fetch(
    "https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt1853728&type=movie&r=json&plot=short&y=2012",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c01e7d8ab3mshed11ca996f5a03ap1b56f0jsn38e2aaaa8838",
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  // return data;
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: data.Title,
      year: data.Year,
      synopsis: data.Plot,
      thumbnail: data.Poster,
    }, // will be passed to the page component as props
  };
}
