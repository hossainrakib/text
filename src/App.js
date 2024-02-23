import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivetRoute";
import PublicRoute from "./components/PublicRoute";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Quiz from "./components/page/Quiz";
import Result from "./components/page/Result";
import Singup from "./components/page/SignUp";
import { AuthorProvider } from "./contexts/AuthorContext";

function App() {
  return (
    <Router>
      <AuthorProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute element={Singup} />} />
            <Route path="/login" element={<PublicRoute element={Login} />} />
            <Route path="/quiz" element={<PrivateRoute element={Quiz} />} />
            <Route path="/result" element={<PrivateRoute element={Result} />} />
          </Routes>
        </Layout>
      </AuthorProvider>
    </Router>
  );
}

export default App;
