import React from "react";
import LocalHero from "../LocalHero/LocalHero";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import "./JobDetails.css";
import { addToDb } from "../../utilities/fakedb";

const JobDeails = () => {
  const jobDetailsData = useLoaderData();
  const navigate = useNavigate();

  const handleApplyBtn = (id) => {
    navigate(`/Appliedjobs`);
    addToDb(id);
  };

  return (
    <div>
      <LocalHero title="Job Details"></LocalHero>
      <main>
        {
          <div key={1} className="jd-grid mx-auto md:w-9/12 gap-4 p-8">
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-semibold capitalize inline-block">
                  job description
                </h3>
                <p>
                  {jobDetailsData.job_description
                    ? jobDetailsData.job_description
                    : "No Description"}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold capitalize inline-block">
                  job responsibilities
                </h3>
                <p>
                  {jobDetailsData.job_responsibilities
                    ? jobDetailsData.job_responsibilities
                    : "No Responsibilities found"}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold capitalize inline-block">
                  educational qualification
                </h3>
                <p>
                  {jobDetailsData.educational_requirements
                    ? jobDetailsData.educational_requirements
                    : "No Eduacation qualification Need, we judge by skils"}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold capitalize inline-block">
                  educational experience
                </h3>
                <p>
                  {jobDetailsData.experience
                    ? jobDetailsData.experience
                    : "No experience need"}
                </p>
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
                      {jobDetailsData.salary_range} {"(per month)"}
                    </span>
                  </p>
                  <p className="flex gap-2">
                    {" "}
                    <CalendarIcon className="w-5 h-5 text-slate-300"></CalendarIcon>{" "}
                    <span>
                      <span className="font-semibold">Job Title:</span>{" "}
                      {jobDetailsData.position}
                    </span>{" "}
                  </p>
                </div>
                <h3 className="border-b w-full pb-2 text-xl capitalize font-semibold inline-block">
                  contact information
                </h3>
                <div className="py-4 flex flex-col gap-3">
                  <p className="flex gap-2">
                    {" "}
                    <PhoneIcon className="w-5 h-5 text-slate-300"></PhoneIcon>{" "}
                    <span>
                      <span className="font-semibold">phone:</span>{" "}
                      {jobDetailsData.phone_number}
                    </span>{" "}
                  </p>
                  <p className="flex gap-2">
                    {" "}
                    <EnvelopeIcon className="w-5 h-5 text-slate-300"></EnvelopeIcon>{" "}
                    <span>
                      <span className="font-semibold">email:</span>{" "}
                      {jobDetailsData.email}
                    </span>{" "}
                  </p>
                  <p className="flex gap-2">
                    {" "}
                    <MapIcon className="w-5 h-5 text-slate-300"></MapIcon>{" "}
                    <span>
                      <span className="font-semibold">address:</span>{" "}
                      {jobDetailsData.address}
                    </span>{" "}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleApplyBtn(jobDetailsData.id)}
                style={{
                  backgroundImage: "linear-gradient(45deg,#7E90FE, #9873FF)",
                }}
                className="text-white "
              >
                Applay
              </button>
            </div>
          </div>
        }
      </main>
    </div>
  );
};

export default JobDeails;
