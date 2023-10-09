import React from "react";

const Categories = ({ category }) => {
  const { image, title, availability } = category;
  return (
    <div className="md:flex flex-wrap my-2 shadow-md shadow-slate-100 bg-slate-200 ps-5 md:pe-10 py-5 rounded-md flex-col gap-3 md:gap-2 text-start">
      <div className="w-6/12 h-20 bg-slate-300 p-4 rounded-md">
        <img src={image} className="w-full h-full" alt="" />
      </div>
      <h3 className=" font-semibold capitalize">{title}</h3>
      <p className="capitalize">{availability}</p>
    </div>
  );
};

export default Categories;
