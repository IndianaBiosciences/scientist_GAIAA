import React from "react";

const IconCirclePlus = (props) => (
  <svg
    className="fill-current stroke-current text-ibri-navy hover:text-ibri-grey"
    x="0px"
    y="0px"
    viewBox="0 0 20 20"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <circle cx="10" cy="10" r="9" fill="text-ibri"/>
      <path d="M 5 10 l 10 0 M 10 5 l 0 10" stroke="white" strokeLinecap="round" strokeWidth="2.5"/>
    </g>
  </svg>
);

export default IconCirclePlus;
