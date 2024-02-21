import * as React from "react";
import { Route, createBrowserRouter as Router} from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Quiz from "./components/page/Quiz";
import Result from "./components/page/Result";
import SignUp from "./components/page/SignUp";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/signup" element={<SignUp />} />
      </Layout>
    </Router>
  );
}

export default App;
