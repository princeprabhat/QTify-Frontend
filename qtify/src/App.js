// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Albums from "./components/Albums/Albums";
import Player from "./components/Player/Player";
import FaqAccordion from "./components/FAQ/FaqAccordion";
import { DataProvider } from "./DataContext";
import AlbumPage from "./components/AlbumPage/AlbumPage";
// import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>

        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Albums />
                <FaqAccordion />

              </>
            } />


            <Route path="/album/:slug" element={<AlbumPage />} />
          </Routes>
          <Player />

        </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
