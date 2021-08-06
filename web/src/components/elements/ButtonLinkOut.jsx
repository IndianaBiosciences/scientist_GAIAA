/*
* Render a Tooltip
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
* Ref: https://dev.to/alexandprivate/build-your-own-react-tooltip-component-25bd
*/

import React from 'react';
//import Tooltip from '../widgets/Tooltip.jsx';
import IconExternalLink from '../icons/IconExternalLink';

let debug = false;

function ButtonLinkOut({ children }) {

  (!debug) || console.log("ButtonLinkOut.js ButtonLinkOut() {children}", children);

  return (
    <div className="flex flex-row border text-ibri-navy border-ibri-navy hover:border-ibri-grey hover:text-ibri-grey rounded-md p-1">
      <div className="flex text-sm">
      Test
      {children}
      </div>
      <div className="flex pl-2">
        <IconExternalLink width="20"/>
      </div>
    </div>
  );
}

export default ButtonLinkOut;
