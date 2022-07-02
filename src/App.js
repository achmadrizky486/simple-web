import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import DetailPage from "./pages/DetailPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
