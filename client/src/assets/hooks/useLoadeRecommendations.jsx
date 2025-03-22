import { useEffect, useState } from "react";
import { movieRecommendations } from "../../api/dataMovies";

export function useLoadeRecommendations(type, id) {
    const [movie, setMovieRecommendations] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                const response = await movieRecommendations(type, controller.signal, id);
                setMovieRecommendations(response);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Грешка при зареждането на филма:", err);
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [id]);
    return { movie, loading, error };
}
