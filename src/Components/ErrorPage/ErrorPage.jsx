import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex mt-10 flex-col gap-4 items-center justify-center mx-auto">
      <div className="w-6/12">
        <img src="err.gif" width={"50%"} className="mx-auto" alt="" />
      </div>
      <h5>{`Oops! ${error.status}`}</h5>
      <Link to="/" className="pointer">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
