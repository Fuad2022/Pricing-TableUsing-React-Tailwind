import React from "react";

const Links = (props) => {
  const { name, link } = props.link;
  return (
    <li className="hover:text-cyan-400 px-2">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Links;
