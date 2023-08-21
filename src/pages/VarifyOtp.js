// import React from 'react'

// const VarifyOtp = () => {
//   return (
//     <div>VarifyOtp</div>
//   )
// }

// export default VarifyOtp
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const App=()=> {
  const [otp, setOtp] = useState('');

  return (
    
    <div className='w-[100vw] flex h-[100vh] items-center justify-center'>
        <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            className=""
        />
        <button className=' '>submit</button>
    </div>
  );
}
export default App;