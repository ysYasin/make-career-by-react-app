import React from "react";
import { BeakerIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";

const Featur = ({ featur }) => {
  const {
    id,
    logo,
    name,
    position,
    job_type,
    remote_or_onsite,
    location,
    salary_range,
  } = featur;
  return (
    <div className="rounded-md px-4 shadow-gray-100 shadow-md bg-slate-200 text-left">
      <div className="md:w-5/12 p-5">
        <img src={logo} width={"100%"} alt="" />
      </div>
      <div className="px-4  flex flex-col gap-2">
        <h3 className="md:text-3xl font-semibold">{position}</h3>
        <h3 className="text-2xl">{name}</h3>
        <div className="my-3 flex flex-col gap-2 md:flex-row">
          <button className="bg-transparent border-blue-300 hover:bg-blue-100 me-2">
            {job_type}
          </button>
          <button className="bg-transparent border-blue-300 hover:bg-blue-100 mx-2">
            {remote_or_onsite}
          </button>
        </div>
        <div className="md:flex my-1 gap-3">
          <span className="flex gap-1">
            <MapPinIcon className="h-6 w-6 text-black" /> {location}
          </span>
          <span className="flex gap-1">
            <CurrencyDollarIcon className="h-6 w-6 text-black" /> {salary_range}
          </span>
        </div>
        <Link to={`/${id}`}>
          <button
            style={{
              backgroundImage: "linear-gradient(45deg,#7E90FE, #9873FF)",
            }}
            className="text-white md:w-4/12 mb-3"
          >
            apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featur;
