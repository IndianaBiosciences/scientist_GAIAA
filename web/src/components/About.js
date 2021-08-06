/*
 * Render the signin form for logging in.
 * Needs formatting and cookies and adding to group
 ** @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React, { Component } from 'react';
//import { Card } from 'react-bootstrap';

//import "../css/core.css";

export default class About extends Component {

	render() {
		return (
			<div class="">
				<div class="text-lg font-bold">
					About: Information about the Target Explorer Application
				</div>
				<div class="border rounded-lg bg-ibri-navy pl-1 pr-2 pt-1 pb-2 m-2">
	        <div class="border rounded bg-gray-200 p-1">
	          <div class="text-lg rounded font-bold m-1">About Target Explorer</div>
	          <div class="text bg-white rounded p-1 m-1">
							<p>This version of the target explorer is only for rapid prototyping. A more permanent version will be integrated with the
							core applications of the Alzheimer's Drug Discovery Center primary applications.</p>

							<p>The targets within this platform was selected from the AMP-AD Nominated targets that had 2 or more nominations as published on the Agora AMP-AD reference below.</p>

							<p>These targets were run through the targetDB application and process as detailed in their publication and as available from their GitHub site in references below.</p>
						</div>
					</div>
				</div>
				<div class="border rounded-lg bg-ibri-navy pl-1 pr-2 pt-1 pb-2 m-2">
	        <div class="border rounded bg-gray-200 p-1">
	          <div class="text-lg rounded font-bold m-1">References</div>
	          <div class="text bg-white rounded border shadow p-1 m-1">
							<ul>
								<li id="about-li">AD Knowledge Portal: <a className="ibri-link" target="_blank" rel="noopener noreferrer" href="https://adknowledgeportal.synapse.org/">adknowledgeportal.synapse.org/</a></li>
								<li id="about-li">Agora AMP-AD Nominated Targets: <a className="ibri-link" target="_blank" rel="noopener noreferrer" href="https://agora.ampadportal.org/genes/(genes-router:genes-list)">https://agora.ampadportal.org/genes/(genes-router:genes-list)</a></li>
								<li id="about-li">targetDB Publication: <a className="ibri-link" target="_blank" rel="noopener noreferrer" href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0232644">https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0232644</a></li>
								<li id="about-li">targetDB GitHub: <a className="ibri-link" target="_blank" rel="noopener noreferrer" href="https://github.com/sdecesco/targetDB">github.com/sdecesco/targetDB</a></li>
								<li id="about-li">IBRI's website: <a className="ibri-link" target="_blank" rel="noopener noreferrer" href="http://www.indianabiosciences.org">www.indianabiosciences.org</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="border rounded-lg bg-ibri-navy pl-1 pr-2 pt-1 pb-2 m-2">
	        <div class="border rounded bg-gray-200 p-1">
	          <div class="text-lg rounded font-bold m-1">Funding</div>
						<div class="text bg-white rounded border shadow p-1 m-1">
							Funding for this effort was funded through multuple sources
							<ul>
								<li id="about-li">NIH U54 Grant: </li>
								<li id="about-li">Internal funding of the Indiana Biosciences Research Institute</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
