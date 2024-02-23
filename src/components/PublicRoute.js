import React from "react";
import { Navigate, Route } from "react-router-dom";
import { UseAuthor } from "../contexts/AuthorContext";

function PublicRoute({ element: Element, ...rest }) {
  const { currentUser } = UseAuthor();

  return (
    <Route
      {...rest}
      element={!currentUser ? <Element /> : <Navigate to="/" replace />}
    />
  );
}

export default PublicRoute;
