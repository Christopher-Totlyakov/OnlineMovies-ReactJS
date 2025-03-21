import { useCallback, useState } from "react";

import styles from './components/SearchBar.module.css';
import MultiRangeSlider from "./components/MultiRangeSlider";
import TextBox from "./components/TextBox";

export function SearchBar({ onSearch }) {
    const [query, setQuery] = useState({
        type: "movie",
        name: '',
        prYear: '',
        gteYear: '',
        lteYear: '',
        page: 1,
        gteVote: '',
        lteVote: '',
    });

    const [searchMode, setSearchMode] = useState("basic"); // "basic" или "advanced"

    const currentYear = new Date().getFullYear();

    const handleChange = useCallback((e) => {
        if (e.type === "YearRange") {
            setQuery((prev) => ({ ...prev, gteYear: `${e.min}-01-01`, lteYear: `${e.max}-01-01` }));
        } else if (e.type === "RatingRange") {
            setQuery((prev) => ({ ...prev, gteVote: e.min, lteVote: e.max }));
        } else {
            setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
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

            {/* Basic Search */}
            {searchMode === "basic" && (
                <div className={styles["inputsConteiner"]}>
                    <TextBox
                        type="text"
                        name="name"
                        placeholder="Keyword..."
                        value={query.name}
                        onChange={handleChange}
                    />
                    <TextBox
                        type="number"
                        name="prYear"
                        placeholder="Year"
                        value={query.prYear}
                        onChange={handleChange}
                    />
                </div>
            )}

            {/* Advanced Search */}
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
                </div>
            )}

            <button type="submit" className={styles['searchContent']}>
                Search
            </button>
        </form>
    );
}
