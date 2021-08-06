//
//
import React from 'react';

import {appConfig} from '../../AppConfig';

let logo="https://www.indianabiosciences.org/img/logo-inverse.svg"

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="w-full h-24 p-0 m-0 border-0">
      <div className="w-full h-12 bg-ibri">
        <img className="h-18 p-2 m-2 bg-ibri" src={logo}/>
        <div className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
          { appConfig.Title }
        </div>
      </div>
      <div className="w-full h-10 border-2 border-red-500">
        <div className="flex flex-wrap bg-ibri">
          <div className="container mx-auto flex flex-wrap border-2 border-yellow-500 items-center justify-between">
            <div className="w-full relative flex justify-between border-2 border-blue-500 bg-gray lg:w-auto lg:static lg:block lg:justify-start">
              <img className="h48" src={logo}/>
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                href="#pablo"
              >
                { appConfig.Title }
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              class={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75"
                    href="/#/About"
                  >
                    <span className="ml-2">About</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
