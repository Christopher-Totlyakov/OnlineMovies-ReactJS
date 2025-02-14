import { useState, useEffect } from "react";
import { DataRequest } from "../../api/dataMovies";

export function useLoadContent(tupe, initialSeries = []) {
    const [movies, setMovies] = useState(initialSeries);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                const data = await DataRequest(tupe, controller.signal);
                setMovies(data.results || initialSeries);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError("Грешка при зареждане на съдържанието!");
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort(); 
    }, [tupe]);

    const searchContent = async (query) => {
        const controller = new AbortController();

        try {
            setLoading(true);
            setError(null);

            const data = await DataRequest(
                tupe, controller.signal, 
                query.prYear, query.gteYear, query.lteYear,
                query.page, query.gteVote, query.lteVote
            );

            setMovies(data.results || initialSeries);
        } catch (err) {
            if (err.name !== "AbortError") { 
                setError("Грешка при зареждане на съдържанието!");
            }
        } finally {
            setLoading(false);
        }
    };

    return { movies, searchContent, loading, error };
}
