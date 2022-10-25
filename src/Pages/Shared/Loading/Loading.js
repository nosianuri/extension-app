import React from "react";
import { ThreeDots } from "react-loader-spinner";
import './Loading.css';

const Loading = () => {
   
  return (
    <div className="sweet-loading">
      <ThreeDots
      width="100"
      height="300"
      color="white"
      ariaLabel="loading"
       />
    </div>
  )
}

export default Loading;