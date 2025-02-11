import { useState } from "react";

import styles from './SearchBar.module.css';


export function SearchBar({ onSearch }) {
    const [query, setQuery] = useState({ type: "movie", name: "", year: "", page: 1 });

    const handleChange = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
                        <div className={styles['inputSurch']}>
                <div className={styles['glow']}></div>
                <div className={styles['darkBorderBg']}></div>
                <div className={styles['darkBorderBg']}></div>
                <div className={styles['darkBorderBg']}></div>

                <div className={styles['white']}></div>
                <div className={styles['border']}></div>

                <div className={styles['inputBox']}>
                    <input type="text" name="name" className={styles['input']} placeholder="Keyword..." onChange={handleChange} value={query.name} />

                    <div className={styles['input-mask']}></div>
                    <div className={styles['pink-mask']}></div>
                </div>
            </div>
            <div className={styles['inputSurch']}>
                <div className={styles['glow']}></div>
                <div className={styles['darkBorderBg']}></div>
                <div className={styles['darkBorderBg']}></div>
                <div className={styles['darkBorderBg']}></div>

                <div className={styles['white']}></div>
                <div className={styles['border']}></div>

                <div className={styles['inputBox']}>
                    
                    <input type="number" name="year" className={styles['input']} placeholder="Year" onChange={handleChange} value={query.year} />

                    <div className={styles['input-mask']}></div>
                    <div className={styles['pink-mask']}></div>
                </div>
            </div>

            <button
                type="submit"
                className={styles['searchContent']}
            >Search</button>
        </form>
    );
}
