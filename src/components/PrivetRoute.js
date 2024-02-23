import React from "react";
import { Navigate, Route } from "react-router-dom";
import { UseAuthor } from "../contexts/AuthorContext";

function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = UseAuthor();

  return (
    <Route
      {...rest}
      element={currentUser ? <Element /> : <Navigate to="/login" replace />}
    />
  );
}

export default PrivateRoute;
