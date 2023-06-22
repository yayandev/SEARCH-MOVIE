import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneMovie } from '../Api'
import Footer from '../components/Footer'
const DetailMovie = () => {
    const [data, setData] = useState([])
    const id = useParams()
    const [image, setImage] = useState("")
    const navigate = useNavigate("")
    useEffect(() => {
        getOneMovie(id.id).then((result) => {
            setData(result);
            setImage(`https://image.tmdb.org/t/p/w500${result.poster_path}`)
            document.title = `Detail Movie - ${result.original_title}`
        })
    }, [id])
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='container'>
                <div className="row mt-3 mb-3 justify-content-center">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <button onClick={() => navigate("/")} className='btn btn-secondary btn-sm'>Back to home</button>
                            <h3>Detail Movie</h3>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <img src={image} style={{ width: '100%' }} alt="" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <ul className="list-group">
                                    <li className="list-group-item">Title : {data.original_title}</li>
                                    <li className="list-group-item">Release date : {data.release_date}</li>
                                    <li className="list-group-item">Popularity : {data.popularity}</li>
                                    <li className="list-group-item">Vote average : {data.vote_average}</li>
                                    <li className="list-group-item">Vote count : {data.vote_count}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <h4>Overview</h4>
                                <p>{data.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <br /><br /><br />
            <footer className='fixed-bottom text-center'>
                <Footer />
            </footer>
        </>
    )
}

export default DetailMovie
