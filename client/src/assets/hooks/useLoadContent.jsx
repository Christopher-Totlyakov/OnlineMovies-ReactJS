import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DataRequest } from "../../api/dataMovies";
import { useLoadGenres } from "./useLoadGenres"

export function useLoadContent(type, initialSeries = []) {
    const [movies, setMovies] = useState(initialSeries);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();
    const { genres, genresLoading, genresError } = useLoadGenres(type);
    const page = Number(searchParams.get("page")) || 1;

    const [query, setQuery] = useState({
        page: page,
        year: searchParams.get("year") || "",
        gteYear: searchParams.get("gteYear") || "1900",
        lteYear: searchParams.get("lteYear") || "2025",
        gteVote: searchParams.get("gteVote") || "",
        lteVote: searchParams.get("lteVote") || "10",
        name: searchParams.get("name") || "",
        genres: searchParams.get("genres") || "",
    });

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                const data = await DataRequest(type, controller.signal, query.year, query.gteYear, query.lteYear, page, query.gteVote, query.lteVote, query.name, query.genres);
                setMovies(data.results || []);
                setTotalPages(data.total_pages || 1);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError("Грешка при зареждане на съдържанието!");
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [type, page, query]);

    useEffect(() => {
        const newQuery = {
            page: page,
            year: searchParams.get("year") || "",
            gteYear: searchParams.get("gteYear") || "1900",
            lteYear: searchParams.get("lteYear") || "2025",
            gteVote: searchParams.get("gteVote") || "0",
            lteVote: searchParams.get("lteVote") || "10",
            name: searchParams.get("name") || "",
            genres: searchParams.get("genres") || "",
        };
        setQuery(newQuery); 
    }, [searchParams, page]);

    const searchContent = async (newQuery) => {
        setQuery(newQuery);

        const updatedParams = {};

        if (newQuery.name) updatedParams.name = newQuery.name;
        if (newQuery.year) updatedParams.year = newQuery.year;
        if (newQuery.genres) updatedParams.genres = newQuery.genres;
        if (newQuery.gteYear && newQuery.gteYear !== "1900") updatedParams.gteYear = newQuery.gteYear;
        if (newQuery.lteYear && newQuery.lteYear !== "2025") updatedParams.lteYear = newQuery.lteYear;
        if (newQuery.gteVote) updatedParams.gteVote = newQuery.gteVote;
        if (newQuery.lteVote && newQuery.lteVote !== 10) updatedParams.lteVote = newQuery.lteVote;

        updatedParams.page = 1; 

        setSearchParams(updatedParams);
    };

    const setPage = (newPage) => {
        setSearchParams((prevParams) => {
            const updatedParams = new URLSearchParams(prevParams);

            updatedParams.set("page", newPage);

            if (!updatedParams.get("name")) updatedParams.delete("name");
            if (!updatedParams.get("year")) updatedParams.delete("year");
            if (!updatedParams.get("genres")) updatedParams.delete("genres");
            if (!updatedParams.get("gteYear") || updatedParams.get("gteYear") === "1900") updatedParams.delete("gteYear");
            if (!updatedParams.get("lteYear") || updatedParams.get("lteYear") === "2025") updatedParams.delete("lteYear");
            if (!updatedParams.get("gteVote")) updatedParams.delete("gteVote");
            if (!updatedParams.get("lteVote") || updatedParams.get("lteVote") === "10") updatedParams.delete("lteVote");

            return updatedParams;
        });
    };


    return { movies, searchContent, loading, error, page, setPage, totalPages, genres };
}
