import React, { useEffect, useState } from "react";
import Featur from "./featur";

const Fetured = () => {
  const [features, setFeatures] = useState([]);
  const [state, setState] = useState(false);
  useEffect(() => {
    fetch("feature.json")
      .then((res) => res.json())
      .then((d) => {
        const data = d;
        if (!state) {
          data.length = 4;
          setFeatures(data);
        } else {
          setFeatures(d);
        }
      });
  }, [features]);
  return (
    <section className="text-center py-20 ">
      <div className="my-20">
        <h1 className="mb-4 font-semibold">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" w-8/12 mx-auto grid md:grid-cols-2 gap-3">
        {features.map((featur) => (
          <Featur key={featur.id} featur={featur}></Featur>
        ))}
      </div>
      <button
        onClick={() => setState(!state)}
        style={{
          backgroundImage: "linear-gradient(45deg,#7E90FE, #9873FF)",
        }}
        className="text-white my-8"
      >
        {(state && "Show Less") || "Load More.."}
      </button>
    </section>
  );
};

export default Fetured;
