// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";

import Albums from "./components/Albums/Albums";
// import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />

        <Albums />

      </div>
    </BrowserRouter>
  );
}

export default App;
