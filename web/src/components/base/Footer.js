/*
* Render the Footer for Landing Page
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React from 'react';

import {appConfig} from '../../AppConfig';
let debug = appConfig.debug.base;

export default class Footer extends React.Component {
  render () {
    (!debug) || console.log("Footer.js render() {}");
    return(
      <div className="w-full flex bg-white border-t border-gray-200 pt-1 mt-1">
        <div className="flex-none ml-4 text-xs">
          <a className="ibri" href="http://indianabiosciences.org"><i>Indiana Biosciences Research Institute</i></a>
        </div>
        <div className="flex-grow text-xs text-center">
          Copyright &copy; 2021
        </div>
        <div className="flex-none mr-4 text-xs">
          Version: { appConfig.Version }
        </div>
      </div>
    );
  }
}
