import styles from '../searchBar/components/SearchBar.module.css';
import "./Pagination.css"

export default function Pagination({ page, setPage, totalPages }) {

    const handlePageChange = (e) => {
        const value = e.target.value;
        const parsedValue = parseInt(value, 10);

        if (!isNaN(parsedValue) ) {
            setPage(parsedValue);
        }
    }

    return (
        <div className="pagination">
            <button
                className={styles['searchContent']}
                disabled={page <= 1}
                onClick={() => setPage(page - 1)}>
                Previous
            </button>
            <input
                className={styles['searchContent']}
                type="text"
                value={page}
                onChange={handlePageChange}
                placeholder="Page:"
            />
            <button
                className={styles['searchContent']}
                disabled={page >= totalPages}
                onClick={() => setPage(page + 1)}>
                Next
            </button>
        </div>
    );
}
