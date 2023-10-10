import React, { useEffect, useState } from "react";
import LocalHero from "../../LocalHero/LocalHero";
import { useLoaderData } from "react-router-dom";
import {
  ArrowDownIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const AppyedJob = () => {
  const [datas, setDatas] = useState([]);
  const dataFromDb = useLoaderData();

  useEffect(() => {
    setDatas(dataFromDb);
  }, [dataFromDb]);

  return (
    <>
      <LocalHero title="Applyed Job"></LocalHero>
      <div className="py-28 lg:w-8/12 w-11/12 mx-auto ">
        <div className="flex justify-end w-full">
          {datas.length === 0 ? (
            ""
          ) : (
            <button className="text-xl flex gap-2 items-center bg-slate-200 px-4 py-2 w-28">
              Sort{" "}
              <ArrowDownIcon className="w-4 h-4 text-black"></ArrowDownIcon>{" "}
            </button>
          )}
        </div>
        <div>
          {datas.map((data) => (
            <div
              className="flex my-4 bg-slate-200 p-4 rounded-md items-center justify-between"
              key={data.id}
            >
              <div className="lg:w-2/12 me-2 w-2/12">
                <img src={data.logo} width={"100%"} alt="" />
              </div>
              <div className="flex-grow">
                <h3 className="lg:text-2xl font-semibold">{data.position}</h3>
                <h3 className="text-xl">{data.name}</h3>
                <div className="my-3 flex md:gap-2">
                  <button className="py-1 px-2 bg-transparent border-blue-300 hover:bg-blue-100 ">
                    {data.job_type}
                  </button>
                  <button className="py-1 px-2 bg-transparent border-blue-300 hover:bg-blue-100 mx-2">
                    {data.remote_or_onsite}
                  </button>
                </div>
                <div className="flex text-sm my-1 md:gap-3">
                  <span className="flex gap-1 me-2">
                    <MapPinIcon className="h-6 w-6 text-black" />{" "}
                    {data.location}
                  </span>
                  <span className="flex gap-1">
                    <CurrencyDollarIcon className="h-6 w-6 text-black" />{" "}
                    {data.salary_range}
                  </span>
                </div>
              </div>
              <button
                style={{
                  backgroundImage: "linear-gradient(45deg,#7E90FE, #9873FF)",
                }}
                className="px-0 py-1 text-xs md:py-4 md:text-base w-2/12 text-white"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppyedJob;
