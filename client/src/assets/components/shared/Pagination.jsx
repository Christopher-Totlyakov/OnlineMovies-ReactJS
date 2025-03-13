export default function Pagination({ page, setPage, totalPages }) {

    return (
        <div className="pagination">
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                Предишна
            </button>
            <span>Страница {page} от {totalPages}</span>
            <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
                Следваща
            </button>
        </div>
    );
}