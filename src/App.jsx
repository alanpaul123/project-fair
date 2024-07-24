import { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import { tokenAuthContext } from "./contexts/AuthContext";
function App() {
  const { isAuthorised, setisAuthorised } = useContext(tokenAuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth insideRegister={true} />} />

        <Route
          path="/projects"
          element={isAuthorised ? <Project /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/dashboard"
          element={isAuthorised ? <Dashboard /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
