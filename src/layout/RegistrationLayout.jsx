// import React from "react";
// import { Outlet } from "react-router-dom";
// import foodster2 from "/foodster2.png";

// const RegistrationLayout = () => {
//   return (
//     <div>
//       <div className="w-screen h-screen overflow-hidden  relative shadow-2xl bg-orange-100">
//         {/* <img src={foodster2} alt="Foodster" className="w-full h-full object-cover object-top"/> */}
//         <div className="bg-black/50 absolute top-0 w-full  h-full "></div>
        
//       </div>
//       <div className="absolute top-4 left-110 w-180 h-[calc(100%-5rem)]  bg-orange-100 backdrop-blur-xs rounded-lg">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default RegistrationLayout;






import React from "react";
import { Outlet } from "react-router-dom";

const RegistrationLayout = () => {
  return (
    <div className="min-h-screen w-screen bg-orange-100 flex items-center justify-center">

      {/* MAIN CONTAINER (60% WIDTH) */}
      <div className="w-[60%] h-[85vh] bg-white rounded-2xl shadow-2xl flex overflow-hidden">

        <Outlet />

      </div>

    </div>
  );
};

export default RegistrationLayout;