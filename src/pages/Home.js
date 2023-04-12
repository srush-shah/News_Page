import React, { useState } from "react";
import Card from "../components/Card";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const location = useLocation();
  const news = location.state;
  console.log(news);
  const [isSActive, setS] = useState(false);
  const [isFActive, setF] = useState(false);
  const [isAdActive, setAd] = useState(true);
  const [trending, setTrending] = useState([]);
  const [sports, setSports] = useState([]);
  const [finance, setFinance] = useState([]);

  const getSports = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=sports&apikey=4ee6b0eaa4d2426784d1be5b1ba87a39"
      )
      .then((response) => {
        setSports(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getFinance = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=finance&apikey=021a58e69ed9469d9b9d189e41dcbab2"
      )
      .then((response) => {
        setFinance(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTrending = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apikey=021a58e69ed9469d9b9d189e41dcbab2"
      )
      .then((response) => {
        setTrending(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleS = () => {
    setS(!isSActive);
    getSports("sports");
    console.log(sports);
  };

  const handleF = () => {
    setF(!isFActive);
    getFinance("finance");
    console.log(finance);
  };

  const handleAd = () => {
    setAd(false);
    getTrending();
    console.log(trending);
  };

  return (
    <div className="mb-10 w-screen overflow-clip">
      <div className=" block">
        <Navbar />
        <div className="grid grid-cols-2 h-screen mt-10">
          <div className="ml-32 ">
            <img
              className="h-2/4 brightness-50 "
              src={news[0].urlToImage}
              alt={""}
            />{" "}
            <h1 className="my-6 text-4xl font-semibold">{news[0].title}</h1>
            <p className="text-xl text-gray-600">{news[0].description}</p>
            <Link
              to={"/detail"}
              state={news[0]}
              class="text-white my-7 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                class="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 grid-flow-row overflow-scroll">
            <div className="bg-white">
              <h1 className="sticky text-3xl font-bold ml-32 bg-white font-serif">
                Trending
              </h1>
            </div>

            <div className="container pl-32 -mt-40 mx-auto">
              {isAdActive ? (
                <div>
                  <img
                    src="https://study.com/cimages/multimages/16/burgerad15179945781952220614.png"
                    alt="advertisement"
                  />
                  <button
                    className="mt-6 ml-40 bg-zinc-200 text- p-3 rounded-lg text-lg shadow-sm"
                    onClick={handleAd}
                  >
                    <GrClose className="inline mr-1" /> Remove Ads
                  </button>{" "}
                </div>
              ) : (
                <div className="grid grid-cols-1 grid-flow-row gap-8 overflow-scroll mx-10 -ml-56">
                  <Card data={trending[0] ? trending[0] : news[0]} />
                  <Card data={trending[1] ? trending[1] : news[1]} />
                  <Card data={trending[2] ? trending[2] : news[2]} />
                  <Card data={trending[3] ? trending[3] : news[3]} />
                  <Card data={trending[4] ? trending[4] : news[4]} />
                  <Card data={trending[5] ? trending[5] : news[5]} />
                </div>
              )}
            </div>
          </div>
        </div>
        <h1 className="ml-32 sticky text-3xl font-bold bg-white my-10 font-serif">
          Latest
        </h1>
        <div className="grid grid-rows-1 grid-flow-col gap-8 overflow-scroll mx-32">
          <Card data={news[0]} />
          <Card data={news[1]} />
          <Card data={news[2]} />
          <Card data={news[3]} />
          <Card data={news[4]} />
          <Card data={news[5]} />
          <Card data={news[6]} />
          <Card data={news[7]} />
          <Card data={news[8]} />
        </div>
        <h1 className="ml-32 sticky text-3xl font-bold w-full bg-white my-10 font-serif">
          Sports{" "}
          <button>
            <IoIosArrowDropdownCircle className="inline" onClick={handleS} />
          </button>
        </h1>
        <div
          className={`${
            isSActive ? " visible " : "hidden"
          } grid grid-rows-1 grid-flow-col gap-8 overflow-scroll mx-32 `}
        >
          <Card data={sports[0] ? sports[0] : news[0]} />
          <Card data={sports[1] ? sports[1] : news[1]} />
          <Card data={sports[2] ? sports[2] : news[2]} />
          <Card data={sports[3] ? sports[3] : news[3]} />
          <Card data={sports[4] ? sports[4] : news[4]} />
          <Card data={sports[5] ? sports[5] : news[5]} />
          <Card data={sports[6] ? sports[6] : news[6]} />
          <Card data={sports[7] ? sports[7] : news[7]} />
          <Card data={sports[8] ? sports[8] : news[8]} />
        </div>
        <h1 className="ml-32 sticky text-3xl font-bold w-full bg-white my-10 font-serif">
          Finance{" "}
          <button>
            <IoIosArrowDropdownCircle className="inline" onClick={handleF} />
          </button>
        </h1>
        <div
          className={`${
            isFActive ? " visible " : "hidden"
          } grid grid-rows-1 grid-flow-col gap-8 overflow-scroll mx-32 `}
        >
          <Card data={finance[0] ? finance[0] : news[0]} />
          <Card data={finance[1] ? finance[1] : news[1]} />
          <Card data={finance[2] ? finance[2] : news[2]} />
          <Card data={finance[3] ? finance[3] : news[3]} />
          <Card data={finance[4] ? finance[4] : news[4]} />
          <Card data={finance[5] ? finance[5] : news[5]} />
          <Card data={finance[6] ? finance[6] : news[6]} />
          <Card data={finance[7] ? finance[7] : news[7]} />
          <Card data={finance[8] ? finance[8] : news[8]} />
        </div>
      </div>
    </div>
  );
}

export default Home;
