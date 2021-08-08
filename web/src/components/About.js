/*
 * Render the signin form for logging in.
 * Needs formatting and cookies and adding to group
 ** @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React, { Component } from 'react';

import {appConfig} from '../AppConfig';
let debug = appConfig.debug;

export default class About extends Component {

	render () {
    (!debug) || console.log('Home.js render() {this.state}:', this.state);
    (!debug) || console.log('Home.js render() {this.props}:', this.props);

		let aspire_cycle_img_url = appConfig.graphics_base_url + "ASPIRE_Cycle_Diagram.svg"
		let architecture_img_url = appConfig.graphics_base_url + "Architecture.svg"

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
        <div className="text-lg font-bold text-ibri w-full p-2">
          Proposed Interaction of Components to enable the full Design-Select-Synthesis-Test Drug Discovery Research Cycle
        </div>
        <div className="border-b-1 mb-5">
          <div className="mb-2">
          Human-Guided, AI-Driven, and Automated Open Drug Discovery Platform with the critical components color-coded and labeled as defined in the challenge.
          </div>
          <div className="pb-5">
            <img className="w-1/2 justify-center" src={aspire_cycle_img_url} alt="Depiction of the ASPIRE proposed Discovery Cycle"/>
          </div>
        </div>
				<div className="text-lg font-bold text-ibri w-full p-2">
          Proposed Reference Architecture for the System
        </div>
				<div className="border-b-1 mb-5">
					<b>Implementation Constraints</b>
					<div className="list-disc mb52">
						<li>
							Funding is very limited, so implementation mustbe agile and conform to F.I.R.E* principles (Fast, Inexpensive, Restrained, and Elegant).
						</li>
						<li>
							Implementation must leverage both synergisticefforts and align with internal organizational strategy, funding, and priorities.
						</li>
						<li>
							Must leverage available open-source tools and capabilities (limited funding for either full custom-developed or commercial solutions).
						</li>
						<li>
							Success will be an MVP system (minimally viable product) that works whose components can be enhanced over time.
						</li>
            <img className="w-3/4 justify-center mt-2" src={architecture_img_url} alt="Depiction of the Reference Diagram for the Proposed System"/>
          </div>
        </div>
        <div className="text-xs text-right bg-white rounded p-2 m-1">
          For assistance contact <a href="mailto:drobertson@indianabiosciences.org">drobertson@indianabiosciences.org</a>
        </div>
      </div>
    );
	}
}
