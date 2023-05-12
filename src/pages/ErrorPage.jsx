import React from "react";
import { useRouteError } from "react-router-dom";


export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
   return (
    <div>
      {error.status}
      {error.statusText || `'Sorry gays!!!' ${error.message}`}
    </div>
  );
};
