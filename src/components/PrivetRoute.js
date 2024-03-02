import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuthor } from "../contexts/AuthorContext";

function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = UseAuthor();

  return (
    <>
      {currentUser ? <Element {...rest} /> : <Navigate to="/login" replace />}
    </>
    // <Route
    //   {...rest}
    //   element={currentUser ? <Element /> : <Navigate to="/login" replace />}
    // />
  );
}

export default PrivateRoute;
