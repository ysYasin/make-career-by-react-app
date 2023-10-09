import React from "react";
import LocalHero from "../LocalHero/LocalHero";
import { useLoaderData } from "react-router-dom";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

const JobDeails = () => {
  const jobDetailsData = useLoaderData();

  return (
    <div>
      <LocalHero title="Job Details"></LocalHero>
      <main>
        {jobDetailsData.map((jd) => {
          return (
            <div
              style={{ gridTemplateColumns: "2fr 1fr" }}
              key={1}
              className="mx-auto md:w-9/12 grid lg:grid-cols-2 grid-cols-1 p-8"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-semibold capitalize inline-block">
                    job description
                  </h3>
                  <p>
                    {jd.job_description ? jd.job_description : "No Description"}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold capitalize inline-block">
                    job responsibilities
                  </h3>
                  <p>
                    {jd.job_responsibilities
                      ? jd.job_responsibilities
                      : "No Responsibilities found"}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold capitalize inline-block">
                    educational qualification
                  </h3>
                  <p>
                    {jd.educational_requirements
                      ? jd.educational_requirements
                      : "No Eduacation qualification Need, we judge by skils"}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold capitalize inline-block">
                    educational experience
                  </h3>
                  <p>{jd.experience ? jd.experience : "No experience need"}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-white">
                <div className=" bg-indigo-400 p-4 rounded-md">
                  <h3 className="border-b w-full pb-2 text-xl capitalize font-semibold inline-block">
                    job details
                  </h3>
                  <div className="py-4">
                    <p className="flex gap-2">
                      {" "}
                      <CurrencyDollarIcon className="w-5 h-5 text-slate-300"></CurrencyDollarIcon>{" "}
                      <span>
                        <span className="font-semibold">Selary:</span>{" "}
                        {jd.salary_range} {"(per month)"}
                      </span>
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <CalendarIcon className="w-5 h-5 text-slate-300"></CalendarIcon>{" "}
                      <span>
                        <span className="font-semibold">Job Title:</span>{" "}
                        {jd.position} {"(per month)"}
                      </span>{" "}
                    </p>
                  </div>
                  <h3 className="border-b w-full pb-2 text-xl capitalize font-semibold inline-block">
                    contact information
                  </h3>
                  <div className="py-4">
                    <p className="flex gap-2">
                      {" "}
                      <EnvelopeIcon className="w-5 h-5 text-slate-300"></EnvelopeIcon>{" "}
                      <span>
                        <span className="font-semibold">phone:</span>{" "}
                        {jd.phone_number} {"(per month)"}
                      </span>{" "}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <EnvelopeIcon className="w-5 h-5 text-slate-300"></EnvelopeIcon>{" "}
                      <span>
                        <span className="font-semibold">email:</span> {jd.email}{" "}
                        {"(per month)"}
                      </span>{" "}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <EnvelopeIcon className="w-5 h-5 text-slate-300"></EnvelopeIcon>{" "}
                      <span>
                        <span className="font-semibold">email:</span> {jd.email}{" "}
                        {"(per month)"}
                      </span>{" "}
                    </p>
                    <p className="flex gap-2">
                      {" "}
                      <MapIcon className="w-5 h-5 text-slate-300"></MapIcon>{" "}
                      <span>
                        <span className="font-semibold">address:</span>{" "}
                        {jd.address} {"(per month)"}
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <button
                  style={{
                    backgroundImage: "linear-gradient(45deg,#7E90FE, #9873FF)",
                  }}
                  className="text-white "
                >
                  Applay
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default JobDeails;
