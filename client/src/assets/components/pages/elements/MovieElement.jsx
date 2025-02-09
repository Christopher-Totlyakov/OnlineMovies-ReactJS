import './MovieElement.css'
export function MovieElement({ img, title, year }) {
    return (
        <>
        <div className="card-wrapper"> 
            <div className="card" style={{ '--card-bg-img': `url(${img})` }}>
                <p className="heading">{title}</p>
                <p>{year}</p>
                <a href="">Watch now!</a>
            </div>
        </div>


        </>
    );
}