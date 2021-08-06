/*
 * Render a selected list of Targets
 * @author Dan Robertson <drobertson@indianabiosciences.org>
 */

import React from 'react';

import { Button } from 'react-bootstrap';

import '../../css/targets.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import {appConfig} from '../../config/AppConfig';
let debug = appConfig.debug;

export default class SelectedTargets extends React.Component {

	constructor(props){
		super(props);

		this.state = {
		};
	}

	getSelectionButton = () => {
		if (!this.props.targets.length) {
			return null
		}
		if (this.props.targets.length === 1) {
			return(
				<Button className="select-targets"
					onClick={(e)=>this.props.setActiveView("TargetDetails")}>Target Details</Button>
			)
		}
		return(
			<Button className="select-targets"
				onClick={(e)=>this.props.setActiveView("CompareTargets")}>Compare Targets</Button>
		)
	}

	render(){
		(!debug) || console.log('SelectedTargets.js render() {this.state}:', this.state);
    (!debug) || console.log('SelectedTargets.js render() {this.props}:', this.props);
		if (!this.props.targets) {
			return(
				null
			)
		}

		return (
			<div className="selected-targets">
				<div className="selected-targets label">Selected Targets (click to remove):</div>
				<div className="selected-targets container">
					{ this.props.targets.map((item, index)=>
						<Button key={index} className="target" onClick={()=>{this.props.removeTargets([item])}}>
						  {item}
						</Button>
					)}
				</div>
				<div className="selected-targets action">
					{ this.getSelectionButton() }
				</div>
			</div>
		)
	}
}
