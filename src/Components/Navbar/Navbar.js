import React from "react";
import Links from "../Links/Links";
import { MenuIcon } from "@heroicons/react/solid";
const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Pricing", link: "/pricing" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "About", link: "/about" },
    { id: 5, name: "Contact", link: "/contact" },
  ];

  return (
    <div className=" mx-10  h-auto py-4 md:flex  justify-between items-center">
      <div className="w-6 h-6 inline-block text-cyan-400 md:flex items-center justify-center">
        <MenuIcon></MenuIcon>
      </div>
      <ul className=" text-xl text-white md:flex justify-end items-center">
        {routes.map((link) => (
          <Links key={routes.id} link={link}></Links>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
