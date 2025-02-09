import './App.css'
import { Route, Routes } from "react-router-dom";
import { Header } from './assets/components/Header'
import { HomePage } from "./assets/components/pages/HomePage";
import { AboutPage } from "./assets/components/pages/AboutPage";
import { ProductsPage } from './assets/components/pages/ProductsPage';
import { Footer } from './assets/components/footer';

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
