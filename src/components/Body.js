import React from "react";
import {  Route, Routes } from 'react-router-dom';
import UserLocation from "./UserLocation";
import OtherCities from "./OtherCities";

const Body = () => {
  return (
    <div className="main_wrapper">
      <div className="bg_wrapper" style={{backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/0a4d7c54827733.596dc616501a1.gif')`}}>
        <Routes>
          <Route path="/" element={<UserLocation/>}></Route>
          <Route path="/other-cities" element={<OtherCities/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Body;
