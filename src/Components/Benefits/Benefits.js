import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Benefits = (props) => {
  return (
    <div>
      <p className="flex items-center h-1/2">
        <CheckCircleIcon className="w-5 h-5 text-yellow-600"></CheckCircleIcon>
        <span className=" ml-2 text-cyan-500 text-xl">{props.benefit}</span>
      </p>
    </div>
  );
};

export default Benefits;
