import { useState } from "react";
import { SearchBar } from "../SearchBar";
import { getSeries } from "../../../api/dataMovies";
import { SeriesList } from "./SeriesList";

const seriesArr =[
    {
      "Title": "My Hero Academia",
      "Year": "2016–",
      "imdbID": "tt5626028",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The Rising of the Shield Hero",
      "Year": "2019–",
      "imdbID": "tt9529546",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjc4ZGZkNjMtZTRkYS00Mjk4LTgwMzAtMzg1MWZlZjcxNDRhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Show Me a Hero",
      "Year": "2015",
      "imdbID": "tt2492296",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDc3ZTkxNTgtNWFmMC00ZTE1LTkxYzktOWUxMDVhZjNkOWUzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Weak Hero Class 1",
      "Year": "2022–",
      "imdbID": "tt20234568",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2FhM2JmYjktMDY0Ni00OWJiLTk4ODktNjVlNzNkOTU2YzU1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "The Greatest American Hero",
      "Year": "1981–1983",
      "imdbID": "tt0081871",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTIwOTc3OTk5Nl5BMl5BanBnXkFtZTcwOTYwODcyMQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Cautious Hero: The Hero Is Overpowered but Overly Cautious",
      "Year": "2019",
      "imdbID": "tt10974198",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTY0MWU2OTEtNTFkNi00ZDcxLWE4NzItY2RlNGI1YWQ0MjU2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Big Hero 6: The Series",
      "Year": "2017–2021",
      "imdbID": "tt5515212",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTc3YTYwNTQtNzNmOC00YTg1LWJiNTgtYWU0ZjgyMzRjNDc2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "How a Realist Hero Rebuilt the Kingdom",
      "Year": "2021–2022",
      "imdbID": "tt13399402",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDkxYzNhYTctNDA0Zi00MTI2LTk2NGQtY2Q3MjEyMjdmMWFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Penn Zero: Part-Time Hero",
      "Year": "2014–2017",
      "imdbID": "tt3293184",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODRkMTQxNGQtZDVlMC00YzEyLThmZDMtNDZlMjQ3NWFiNGUyXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "My Hero",
      "Year": "2000–2007",
      "imdbID": "tt0233084",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3NTI5MjA2MV5BMl5BanBnXkFtZTcwODEyMDk0MQ@@._V1_SX300.jpg"
    }
  ]


export function SeriesPage(){
    const [movies, setMovies] = useState(seriesArr);

 

    const handleSearch = async (query) => {
        const data = await getSeries(query.prYear, query.gteYear, query.lteYear, query.page, query.gteVote, query.lteVote);
        setMovies(data.results || seriesArr); 
        console.log(data.results);
    };

    return (
        <article>
            <h1>series & TV shows</h1>
            <SearchBar onSearch={handleSearch} />
            <SeriesList movies={movies} />
        </article>
    );
}