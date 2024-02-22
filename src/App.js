import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Quiz from "./components/page/Quiz";
import Result from "./components/page/Result";
import SingUp from "./components/page/SignUp";
import { AuthorProvider } from "./contexts/AuthorContext";

function App() {
  return (
    <Router>
      <AuthorProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/signup" element={<SingUp />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthorProvider>
    </Router>
  );
}

export default App;
