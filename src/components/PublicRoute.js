import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuthor } from "../contexts/AuthorContext";

function PublicRoute({ element: Element, ...rest }) {
  const { currentUser } = UseAuthor();

  return (
    <>
      {!currentUser ? <Element {...rest} /> : <Navigate to="/" replace />}
    </>
  );
}

export default PublicRoute;
