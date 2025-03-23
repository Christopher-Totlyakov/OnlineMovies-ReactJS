import { useEffect, useState } from "react";
import { fetchGenres } from "../../api/dataMovies";

export function useLoadGenres(type) {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cacheKey = `genres_${type}`;
        const cacheDateKey = `${cacheKey}_date`;

        const cachedData = localStorage.getItem(cacheKey);
        const cachedDate = localStorage.getItem(cacheDateKey);
        const today = new Date().toISOString().split("T")[0];

        if (cachedData && cachedDate === today) {
            try {
                const parsedData = JSON.parse(cachedData);
                setGenres(Array.isArray(parsedData) ? parsedData : []);
            } catch (err) {
                console.error("Грешка при парсване на кешираните жанрове:", err);
                setGenres([]);
            }
            setLoading(false);
            return;
        }

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                const response = await fetchGenres(type, controller.signal);

                    localStorage.setItem(cacheKey, JSON.stringify(response.genres));
                    localStorage.setItem(cacheDateKey, today);
                    setGenres(response);

            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(`Грешка при зареждане на жанровете:`, err);
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [type]);

    return { genres, loading, error };
}