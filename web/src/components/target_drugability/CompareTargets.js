/*
 * Render a selected list (Rx, Dx, ...)
 * Enable adding, clearing, and deleting items from the list based on parent component functions
 * Parent component holds the list state and functions acting on the list
 * @author Lena Ara <lenaa@radcube.com>
 * @author Dan Robertson <drobertson@indianabiosciences.org>
 */

import React from 'react';
import SpiderPlot from './SpiderPlot';
//import * as RNFS from 'react-native-fs';

import '../../css/targets.css';

import {appConfig} from '../../config/AppConfig';
let debug = appConfig.debug;

let categories_definition = [
  	{ field: 'structural_drug_score [mpo coeff= 2.0]', label: 'Druggability (coeff= 2.0)'},
		{ field: 'structure_info_score [mpo coeff= 2.0]', label: 'Structure (coeff= 2.0)'},
		{ field: 'chemistry_score [mpo coeff= 2.0]', label: 'Chemisty (coeff= 2.0)'},
		{ field: 'biology_score [mpo coeff= -2.0]', label: 'Biology (coeff= -2.0)' },
		{ field: 'disease_score [mpo coeff= -2.0]', label: 'Disease Links (coeff= -2.0)' },
		{ field: 'genetic_score [mpo coeff= -2.0]', label: 'Genetic Links (coeff= -2.0)' },
		{ field: 'information_score [mpo coeff= -2.0]', label: 'Information (coeff= -2.0)' },
		{ field: 'safety_score [mpo coeff= -2.0]', label: 'Safety (coeff= -2.0)' },
]

let table_definition = [
    { field: 'number of Dementia publications', label: '# Dementia Pubs'},
    { field: 'reactome_count', label: '# Reactome Pathways'},
    { field: 'mpo_score', label: 'Total Score'},
		{ field: 'structural_drug_score [mpo coeff= 2.0]', label: 'Druggability (coeff= 2.0)'},
		{ field: 'structure_info_score [mpo coeff= 2.0]', label: 'Structure (coeff= 2.0)'},
		{ field: 'chemistry_score [mpo coeff= 2.0]', label: 'Chemisty (coeff= 2.0)'},
		{ field: 'biology_score [mpo coeff= -2.0]', label: 'Biology (coeff= -2.0)' },
		{ field: 'disease_score [mpo coeff= -2.0]', label: 'Disease Links (coeff= -2.0)' },
		{ field: 'genetic_score [mpo coeff= -2.0]', label: 'Genetic Links (coeff= -2.0)' },
		{ field: 'information_score [mpo coeff= -2.0]', label: 'Information (coeff= -2.0)' },
		{ field: 'safety_score [mpo coeff= -2.0]', label: 'Safety (coeff= -2.0)' },
]

export default class CompareTargets extends React.Component {

	constructor(props){
		super(props);

		this.state = {
		};
	}

	createSpiderData = () => {
		(!debug) || console.log('CompareTargets.js createSpiderData() {this.props}:', this.props);
		let categories = [];
		for (let j=0; j<categories_definition.length; j++) {
			categories.push(categories_definition[j].label);
		}
		let series = [];
		let targets = this.props.targets;
		(!debug) || console.log('CompareTargets.js createSpiderData() {targets}:', targets);
		for (let i=0; i<targets.length; i++) {
			let name = this.props.targets[i].Gene_name;
			let data = [];
			for (let j=0; j<categories_definition.length; j++) {
				let value = null;
				if (this.props.targets[i].hasOwnProperty(categories_definition[j].field)) {
					value = parseFloat(this.props.targets[i][categories_definition[j].field]);
				}
				data.push(value);
			}
			series.push(
				{
					name: name,
					data: data,
					pointPlacement: 'on'
				}
			)
		}
		return(
			{
				categories: categories,
				series: series
			}
		)
	}

	createTableData = () => {
		(!debug) || console.log('CompareTargets.js createTableData() {this.props}:', this.props);

		let columns = [];
		for (let i=0; i<this.props.targets.length; i++) {
			columns.push(this.props.targets[i].Gene_name);
		}
		let rows = [];
		for (let i=0; i<table_definition.length; i++) {
			let field = table_definition[i].field;
			let data = [];
			for (let j=0; j<this.props.targets.length; j++) {
				let target = this.props.targets[j];
				let value = (target.hasOwnProperty(field)) ? target[field] : '';
				data.push(value);
			}
			rows.push( { label: table_definition[i].label, data: data } )
		}
		return(
			{
				columns: columns,
				rows: rows
			}
		)
	}

	renderRow = (row) => {
		(!debug) || console.log('CompareTargets.js renderRow() {row}:', row);
		return(
			<tr key={row.label}>
				<td className="compare-targets label">{row.label}</td>
					{ row.data.map((item, index) => <td key={index} className="compare-targets">{item}</td>)}
			</tr>
		)
	}

	renderTable = (data) => {
		(!debug) || console.log('CompareTargets.js renderTable() {data}:', data);
		let columns = data.columns;
		let rows = data.rows;
		return(
			<table className="compare-targets">
				<thead>
					<tr><th className="compare-targets" key='0'></th>
						{ columns.map((item, index)=><th className="compare-targets" key={index}>{item}</th>)}</tr>
				</thead>
				<tbody>
					{ rows.map((row,index)=>this.renderRow(row)) }
				</tbody>
			</table>
		)
	}

	render(){
		(!debug) || console.log('CompareTargets.js render() {this.state}:', this.state);
    (!debug) || console.log('CompareTargets.js render() {this.props}:', this.props);

		//in case no target selected
		if (this.props.targets.length === 0) {
			return(
				<div>
          <br/>
					<p>No selected targets. Select targets from the
            <a href="/#/" onClick={()=>this.props.setActiveView('TargetList')}>List View</a>
          </p>
				</div>
			)
		}

		let spider_data = this.createSpiderData();
		let table_data = this.createTableData();

		return (
			<div className="compare-targets">
				<div className="compare-targets plot">
					<SpiderPlot
						data = { spider_data }
					/>
				</div>
				<div className="compare-targets table">
					{ this.renderTable(table_data) }
				</div>
				<div className="compare-targets image">
					<img className="compare-targets" alt="link to compare targets" src="http://target-explorer-static.indianabiosciences.org.s3-website-us-east-1.amazonaws.com/references/Cesco_TargetDB-journal.pone.0232644.g002.PNG"/>
				</div>
			</div>
		)
	}
}
