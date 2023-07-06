import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Global from "./pages/Global";
import Provinsi from "./pages/Provinsi";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Indonesian from "./pages/Indonesia";

function App() {
  return (
    <div>
      <Fragment>
        <Navbar />
        <Hero />
        <Routes>
          <Route index element={<Global />} />
          <Route path="/indonesia" element={<Indonesian />} />
          <Route path="/provinsi" element={<Provinsi />} />
        </Routes>
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
