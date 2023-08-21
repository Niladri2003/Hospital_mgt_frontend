import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { getPasswordResetToken } from "../services/operations/authAPI";
import { BsArrowLeftShort } from "react-icons/bs";

const ForgotPass = () => {
  const loading = false;
  const [emailsent, setEmailSent] = useState(false);
  const [email, setEmail] = useState([]);
  // const dispatch = useDispatch();

  const handelonSubmit = (e) => {
    console.log("Hi");
    e.preventDefault();
    // dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="text-white mx-auto mt-44 w-[500px] gap-10 ">
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="flex items-start flex-col gap-5">
          <h1 className="font-inter text-[30px] text-richblack-5 font-[600] text-center">
            {!emailsent ? "Reset your Password" : "check your email"}
          </h1>
          <p className="font-inter text-[18px] font-[400] leading-[26px] text-richblack-100">
            {!emailsent
              ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form
            onSubmit={handelonSubmit}
            className="flex flex-col justify-center items-start w-full"
          >
            {!emailsent && (
              <label className="w-full inset-0">
                <p className="font-inter text-[14px] font-[440px] leading-[22px] text-richblack-5">
                  Email Address<span className="text-pink-200">*</span>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="rounded-[8px] bg-richblack-700 p-[12px] w-full shadow-[0_-1px_0px_0px_rgba(255,255 ,255,0.18)] border-b-2"
                />
              </label>
            )}
            <button
              type="submit"
              className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px]  text-black w-full font-inter text-[16px] font-[500] leading-[24px]"
            >
              {!emailsent ? "Reset Password" : "Reset Email"}
            </button>
          </form>
          <div>
            <Link to="/login">
              <div className="flex items-center">
                <BsArrowLeftShort size={30} />
                <p>Back to login</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPass;
