import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faAtom,
  faFaceKissWinkHeart,
  faFaceMehBlank,
  faInstitution,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div
        style={{ width: "80%" }}
        className=" py-16 mx-auto text-gray-400 items-center md:flex "
      >
        <div className="flex gap-5 lg:gap-28">
          <div className="md:flex md:w-5/12 md:flex-col gap-4">
            <h3 className="text-4xl text-gray-200 font-semibold">
              Make career
            </h3>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex gap-4">
              <a
                href="https//:www.facebook.com"
                className="text-white hover:underline text-xl"
              >
                <FontAwesomeIcon icon={faFaceKissWinkHeart} />
              </a>
              <a
                href="https//:www.facebook.com"
                className="text-white hover:underline text-xl"
              >
                <FontAwesomeIcon icon={faFaceKissWinkHeart} />
              </a>
              <a
                href="https//:www.facebook.com"
                className="text-white hover:underline text-xl"
              >
                <FontAwesomeIcon icon={faFaceKissWinkHeart} />
              </a>
              <br />
            </div>
          </div>
          <div>
            <h3 className="text-2xl">Company</h3>
            <ul className="mt-3 mb-8 list-reset">
              <li>
                <Link to="/" className="text-gray-400">
                  Aboutus
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Letest News
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-5 lg:gap-28">
          <div>
            <h3 className="text-2xl">Company</h3>
            <ul className="mt-3 mb-8 list-reset">
              <li>
                <Link to="/" className="text-gray-400">
                  Aboutus
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Letest News
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl">laster</h3>
            <ul className="mt-3 mb-8 list-reset">
              <li>
                <Link to="/" className="text-gray-400">
                  Aboutus
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Letest News
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Company</h3>
            <ul className="mt-3 mb-8 list-reset">
              <li>
                <Link to="/" className="text-gray-400">
                  Aboutus
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Letest News
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400">
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{ width: "80%" }}
        className="py-10 border-t text-gray-300 mx-auto md:flex justify-between"
      >
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </div>
  );
};

export default Footer;
