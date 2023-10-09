import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";

const CareerCathagory = () => {
  const chatagories = useLoaderData();
  return (
    <div className="text-center py-14">
      <h1 className="capitalize mb-7">job catagory list</h1>
      <p className="mb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="w-11/12 lg:w-9/12 h-100 mx-auto items-center justify-center grid lg:grid-cols-4 grid-cols-2 gap-5 lg:gap-10">
        {chatagories.map((category) => (
          <Categories category={category} key={category.id}></Categories>
        ))}
      </div>
    </div>
  );
};

export default CareerCathagory;
