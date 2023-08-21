import React, { useState } from "react";
import Zoom from 'react-reveal/Zoom';


const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <Zoom>


            <div className="row bg-blue-400 px-4 py-4">
                <div className="col text-center">

                    <p className="text-2xl font-bold mb-5 ">Enter the OTP sent to you to verify your identity</p>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field w-[48px] mr-[10px] h-[48px] rounded-full text-center text-bold text-xl mb-5 "
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

            
                    <p>
                        <button
                            className="btn btn-secondary mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-primary bg-green-800 hover:bg-green-400 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                            onClick={e =>
                                console.log(otp.join(""))
                            }
                        >
                            Verify OTP
                        </button>
                    </p>
                </div>
            </div>
        </Zoom>
    );
};

export default OTPBox;