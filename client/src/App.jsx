import './App.css'
import { Route, Routes } from "react-router-dom";
import { Header } from './assets/components/header/Header'
import { HomePage } from "./assets/components/home/HomePage";
import { MoviePage } from "./assets/components/movies/MoviePage";
import { SeriesPage } from "./assets/components/series/SeriesPage";
import { Footer } from './assets/components/footer/Footer';
import MovieDetails from './assets/components/movies/MovieDetails';


function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />}/>
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
