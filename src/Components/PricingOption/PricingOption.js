import React from "react";
import Benefits from "../Benefits/Benefits";

const PricingOption = (props) => {
  const { name, price, benefits } = props.price;
  return (
    <div className="bg-slate-800 w-96 mx-auto my-4 p-6 rounded-md">
      <div className="w-full mx-auto ">
        <h2 className="text-cyan-500 font-bold text-2xl py-1 bg-gray-700 rounded-md">
          {name}
        </h2>
        <p className="py-2 my-3">
          <span className="text-yellow-500 font-bold text-5xl">{price}</span>
          <span className="text-xl text-gray-500">/mon</span>
        </p>
      </div>
      <div>
        <p className="text-xl mb-2 text-cyan-600 font-medium  border-b-2 border-yellow-500 w-2/3 flex justify-start ">
          Benefits:
        </p>
        {benefits.map((benefit) => (
          <Benefits benefit={benefit}></Benefits>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
