import React, { useEffect, useState } from 'react'
import { getMovieList, searchMovie } from "../Api";
import { useNavigate } from 'react-router-dom';
const MovieList = () => {
    const [dataMovie, setDataMovie] = useState([]);
    const [inputSearch, setInputSearch] = useState("");
    const navigate = useNavigate("")
    useEffect(() => {
        getMovieList().then((result) => {
            setDataMovie(result)
        })
    }, [])

    const SearchMovie = (e) => {
        e.preventDefault()
        if (inputSearch.length >= 3) {
            searchMovie(inputSearch).then((result) => {
                setDataMovie(result)
            })
        }
    }
    return (
        <>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-10">
                    <form className='d-flex' onSubmit={SearchMovie}>
                        <input type="search" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className='form-control' placeholder='Search Movie....' />
                        <button type='submit' className='btn btn-sm btn-info ms-1'>🔍</button>
                    </form>
                </div>
            </div>
            <h4>Populer Movies</h4>
            <div className="row justify-content-around">
                {dataMovie.map((item, i) => {
                    const image = `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    return <div className="card p-0 shadow-sm mb-3" key={i} style={{ width: '18rem' }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.original_title}</h5>
                            <p className="card-text">Release date : {item.release_date}</p>
                            <button onClick={() => navigate(`/movie/${item.id}`)} className="btn btn-primary">Detail</button>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default MovieList
