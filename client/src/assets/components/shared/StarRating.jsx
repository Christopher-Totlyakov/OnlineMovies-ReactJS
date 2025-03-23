import React from 'react';
import styles from './StarRating.module.css';

const StarRating = ({ rating, maxStars = 10 }) => {
    const percentage = (rating / maxStars) * 100;

    return (
        <div className={styles.starContainer}>
            <div className={styles.stars} style={{ width: `${percentage}%` }}>
                {Array.from({ length: maxStars }, (_, index) => (
                    <span key={index}>★</span>
                ))}
            </div>
            <div className={styles.grayStars}>
                {Array.from({ length: maxStars }, (_, index) => (
                    <span key={index}>★</span>
                ))}
            </div>
        </div>
    );
};

export default StarRating;
