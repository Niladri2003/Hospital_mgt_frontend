import React from "react";
// import Burger from "resources/images/burger.svg";
import Four from "../assets/images.png";
// import Header from "components/Header";
// import Button from "react-tailwind/Button";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    // navigate to /
    navigate("/");
  };

  return (
    <>
      {/* <Header title="" /> */}

      <div className=" h-screen w-screen flex flex-col pt-4 justify-center items-center ">
        <div className="col mb-3 col-12 text-center absolute ">
          <p className="relative top-14 text-5xl font-bold">404</p>
          <img
            src={
              "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            }
            className="flex justify-center items-center   "
            alt="page not found"
            style={{
              width: "600px",
              height: "500px",
              maxHeight: " full ",
              borderRadius: "10px",
            }}
          />
          {/* <img
                        src={Burger}
                        className="mr-2"
                        alt=""
                        style={{ width: "250px" }}
                    />
                    <img
                        src={Four}
                        className=""
                        alt=""
                        style={{ width: "150px" }}
                    /> */}
        </div>
        <div className=" flex flex-col justify-center items-center text-center mt-96 z-10">
          <h3 className="font-bold">
            Page you're trying to access is not available
          </h3>
          <button
            variant="info"
            className="
                        bg-blue-500
                        hover:bg-blue-700
                        text-white font-bold 
                        // py-2
                        w-[200px] 
                        px-4 
                        border
                        border-blue-700 
                        rounded
                        mt-8"
            onClick={navigateHome}
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </>
  );
};

export default NoPage;
