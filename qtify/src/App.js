// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
