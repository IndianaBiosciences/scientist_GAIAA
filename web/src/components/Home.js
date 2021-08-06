/*
* Render the Landing Page
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React from 'react';
import InfoCard from './widgets/InfoCard';

import {appConfig} from '../AppConfig';
let debug = appConfig.debug;

export default class Home extends React.Component {

  constructor(props){
		super(props);

		this.state = {
		};
  }

  render () {
    (!debug) || console.log('Home.js render() {this.state}:', this.state);
    (!debug) || console.log('Home.js render() {this.props}:', this.props);

    return(
      <div className="flex flex-col">
        <div className="text-lg font-bold text-ibri w-full p-2">
          Scientist Guided, AI-Assisted, Automated (GAIAA) Drug Discovery Platform
        </div>
        <div className="text-md w-full p-2">
          <b>Goal</b>: Deliver an open research platform that integrates the necessary
          synthesis and testing capabilities coupled with AI algorithms for the
          optimization of each step in the drug discovery cycle: molecular design,
          selection, synthesis, and analysis of testing data.
        </div>
        <div className="font-md w-full p-2 border-b-1 mb-5">
          <b>Key AIMS:</b>
          <div className="list-disc">
            <li>
              Develop a modular, open research platform, using modern
              technologies and methods to accelerate drug discovery.
            </li>
            <li>
              Integrate the components for design, select, synthesize and test
              (D-S-S-T) cycles that can be used across various therapeutic targets.
            </li>
            <li>
              Facilitate both AI- and human-guided cycles (i.e. assume there may
              still be a “human-in-the-loop” at various stages).
            </li>
            <li>
              Identify and optimize potential novel m-Opioid therapeutics with
              reduced risk for OUD through the optimization of PK properties to
              deliver improved therapeutic range.
            </li>
          </div>
        </div>
        <div className="flex">
          <InfoCard
            title="Title"
            content=""
          />
        </div>
        <div className="text-xs text-right bg-white rounded p-2 m-1">
          For assistance contact <a href="mailto:drobertson@indianabiosciences.org">drobertson@indianabiosciences.org</a>
        </div>
      </div>
    );
  }
}
