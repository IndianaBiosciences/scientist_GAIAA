/*
 * Render a selected list (Rx, Dx, ...)
 * Enable adding, clearing, and deleting items from the list based on parent component functions
 * Parent component holds the list state and functions acting on the list
 * @author Lena Ara <lenaa@radcube.com>
 * @author Dan Robertson <drobertson@indianabiosciences.org>
 */

import React from 'react';
//import * as RNFS from 'react-native-fs';

import '../../css/targets.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import {appConfig} from '../../config/AppConfig';
let debug = appConfig.debug;

export default class PathwayTargets extends React.Component {

	constructor(props){
		super(props);

		this.state = {
		};
	}

	render(){
		(!debug) || console.log('PathwayTargets.js render() {this.state}:', this.state);
    (!debug) || console.log('PathwayTargets.js render() {this.props}:', this.props);

		return (
			<div className="pathways-table">
				PathwayTargets Here
			</div>
		)
	}
}
