import React, { useEffect } from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";

const Home = () => {
    useEffect(() => {
        document.title = "SearchMovie"
    }, [])
    return (
        <>
            <header className="fixed-top" >
                <Navbar />
            </header>
            <br /><br /><br />
            <main className="container">
                <MovieList />
            </main>
            <div className="d-flex justify-content-center mb-3">
                <a href="#home" className="btn btn-primary text-white">⬆</a>
            </div>
            <br /><br /><br />
            <footer className="fixed-bottom text-center">
                <Footer />
            </footer>
        </>
    )
}

export default Home
