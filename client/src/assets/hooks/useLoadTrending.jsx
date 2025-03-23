import { useEffect, useState } from "react";
import { movieTrending } from "../../api/dataMovies";

export function useLoadTrending(type) {
    const [details, setDetails] = useState({});
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

    useEffect(() => {
        const cacheKey = `trending_${type}`;
        const cacheDateKey = `${cacheKey}_date`;

        const cachedData = localStorage.getItem(cacheKey);
        const cachedDate = localStorage.getItem(cacheDateKey);
        const today = new Date().toISOString().split("T")[0];

        if (cachedData && cachedDate === today) {
            setDetails(JSON.parse(cachedData));
            setLoading(false);
            return;
        }

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                const response = await movieTrending(type, controller.signal);
                
                localStorage.setItem(cacheKey, JSON.stringify(response));
                localStorage.setItem(cacheDateKey, today);

                setDetails(response);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error(`Грешка при зареждането на ${type}:`, err);
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [type]);
    
    return { details, loading, error };
}