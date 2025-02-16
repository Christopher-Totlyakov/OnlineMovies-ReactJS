import { useCallback, useState } from "react";

import styles from './components/SearchBar.module.css';
import MultiRangeSlider from "./components/MultiRangeSlider";
import TextBox from "./components/TextBox";


export function SearchBar({ onSearch }) {
    const [query, setQuery] = useState
        ({
            type: "movie",
            name: "",
            prYear: '',
            gteYear: '',
            lteYear: '',
            page: 1,
            gteVote: '',
            lteVote: '',
        });

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
        <form onSubmit={handleSubmit}>

            <TextBox
                type="text"
                name="name"
                placeholder="Keyword..."
                value={query.name}
                onChange={handleChange}
            />
            <TextBox
                type="number"
                name="year"
                placeholder="Year"
                value={query.year}
                onChange={handleChange}
            />

            <MultiRangeSlider
                min={1900}
                max={currentYear}
                name="YearRange"
                onChange={handleChange}
            />

            <MultiRangeSlider
                min={0}
                max={10}
                name="RatingRange"
                onChange={handleChange}
            />

            <button
                type="submit"
                className={styles['searchContent']}
            >Search</button>
        </form>
    );
}
