import { useEffect, useState } from "react";
import { movieTrending } from "../../api/dataMovies";

export function useLoadTrending(type) {
    const [details, setDetails] = useState({});
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

    useEffect(() => {

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                const response = await movieTrending(type, controller.signal);
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