import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: [
        "Lifetime Free",
        "Unlimited deals",
        "Localized deals",
        "Fantastic deals",
        "Crazy deals",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: [
        "Everything on free",
        "Unlimited deals",
        "Localized deals",
        "Fantastic deals",
        "Crazy deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      benefits: [
        "Everyting on Regular",
        "Unlimited deals",
        "Localized deals",
        "Fantastic deals",
        "Crazy deals",
      ],
    },
  ];
  return (
    <div className=" py-6 ">
      <h1 className="text-4xl font-bold text-cyan-600">
        Best Deal Of The Town
      </h1>
      <p className="text-gray-400 md:px-48 px-6 mt-5 text-xl font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque,
        dignissimos rerum quaerat molestiae temporibus. Modi, voluptatem dolorem
        incidunt, optio iusto repudiandae fugiat, quibusdam natus obcaecati
        omnis commodi illum odit!
      </p>
      <div className="md:grid grid-cols-3 h-full w-full items-center justify-around">
        {pricingOption.map((price) => (
          <PricingOption key={price.id} price={price}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
