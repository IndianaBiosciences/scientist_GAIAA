/*
* Render a Tooltip
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
* Ref: https://dev.to/alexandprivate/build-your-own-react-tooltip-component-25bd
*/

import React from 'react';

function Tooltip({ children, tooltipText }) {
    const tipRef = React.createRef(null);
    function handleMouseEnter() {
        tipRef.current.style.opacity = 1;
        tipRef.current.style.marginLeft = "20px";
    }
    function handleMouseLeave() {
        tipRef.current.style.opacity = 0;
        tipRef.current.style.marginLeft = "10px";
    }
    return (
      <div
          className="relative flex items-center text-xs"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        <div
            className="absolute w-auto border-2 bg-ibri text-xs w-40 whitespace-nowrap text-white px-2 py-2 rounded flex items-center"
            style={{ left: "100%", opacity: 0 }}
            ref={tipRef}
        >
          <div
              className="bg-ibri h-3 w-3 absolute"
              style={{ left: "-6px", transform: "rotate(45deg)" }}
          />
          {tooltipText}
        </div>
        {children}
      </div>
    );
}

export default Tooltip;
