import { useCallback, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from './components/SearchBar.module.css';
import MultiRangeSlider from "./components/MultiRangeSlider";
import TextBox from "./components/TextBox";

export function SearchBar({ onSearch, genres }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(getInitialQuery("basic"));
    const [searchMode, setSearchMode] = useState("basic");
    const currentYear = new Date().getFullYear();
    
    function getInitialQuery(mode) {
        return mode === "basic"
            ? { type: "movie", name: '', year: '', page: 1 }
            : { type: "movie", gteYear: '', lteYear: '', gteVote: '', lteVote: '', genres: '', page: 1 };
    }

    useEffect(() => {
        setQuery(getInitialQuery(searchMode));
    }, [searchMode]);

    const handleChange = useCallback((e) => {
        if (e.type === "YearRange") {
            setQuery((prev) => ({ ...prev, gteYear: `${e.min}`, lteYear: `${e.max}` }));
        } else if (e.type === "RatingRange") {
            setQuery((prev) => ({ ...prev, gteVote: e.min, lteVote: e.max }));
        } else {
            setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value || '' }));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({
            page: 1,
            name: query.name || "",
            year: query.year || "",
            gteYear: query.gteYear || "",
            lteYear: query.lteYear || "",
            gteVote: query.gteVote || "",
            lteVote: query.lteVote || "",
            genres: query.genres || ""
        });
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className={styles['searchForm']}>

            <div className={styles["radio-group"]}>

                <label className={styles["radioContainer"]}>
                    <input
                        type="radio"
                        name="searchMode"
                        value="basic"
                        checked={searchMode === "basic"}
                        onChange={() => setSearchMode("basic")}
                    />
                    Basic Search
                    <div className={styles["checkmark"]}></div>
                </label>

                <label className={styles["radioContainer"]}>
                    <input
                        type="radio"
                        name="searchMode"
                        value="advanced"
                        checked={searchMode === "advanced"}
                        onChange={() => setSearchMode("advanced")}
                    />
                    Advanced Search
                    <div className={styles["checkmark"]}></div>
                </label>
            </div>

            {searchMode === "basic" && (
                <div className={styles["inputsConteiner"]}>
                    <TextBox
                        type="text"
                        name="name"
                        placeholder="Keyword..."
                        required={true}
                        value={query.name || ''}
                        onChange={handleChange}
                    />
                    <TextBox
                        type="number"
                        name="year"
                        placeholder="Year"
                        required={false}
                        value={query.year || ''}
                        onChange={handleChange}
                    />
                </div>
            )}

            {searchMode === "advanced" && (
                <div className={styles["inputsConteiner"]}>
                    <label htmlFor="Years">
                        <p className={styles["label"]}>Years</p>
                        <MultiRangeSlider
                            min={1900}
                            max={currentYear}
                            name="YearRange"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="Rating">
                        <p className={styles["label"]}>Rating</p>
                        <MultiRangeSlider
                            min={0}
                            max={10}
                            name="RatingRange"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="Genres">
                        <div className={styles["dropdown-container"]}>
                            <select
                                name="genres"
                                value={query.genres || ""}
                                onChange={handleChange}
                                className={styles["dropdown"]}
                            >
                                <option value="">All Genres</option>
                                {genres.genres.map((genre) => (
                                    <option key={genre.id} value={genre.id}>
                                        {genre.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </label>
                </div>
            )}

            <button type="submit" className={styles['searchContent']}>
                Search
            </button>
        </form>
    );
}  
