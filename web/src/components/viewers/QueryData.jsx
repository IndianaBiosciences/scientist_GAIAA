/*
 * Show set of molecules within a table based on a selected list or all available
 * @author Dan Robertson <drobertson@indianabiosciences.org>
 */

import React from 'react';
//import * as RNFS from 'react-native-fs';

import Table from '../widgets/Table';
import Molecules from '../objects/Molecules';

import {appConfig} from '../../AppConfig';
let debug = appConfig.debug.components;

export default class QueryData extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			molecules: new Molecules(),
			mol_img: {
				x: 300,
				y: 300
			}
		};
	}

	// function to creat the action item to allow download of the file
	getActionButton = (item) => {
		(!0) || console.log("ListMolecules.js getActionLink {item}:", item)
		return(
			<button className="add-molecule"
				onClick={(e)=>this.props.selectTargets([item])}>
				<i className="fa fa-plus-circle fa-2x"></i>
			</button>
		);
	}

	// clean up the targets to only columns to view and add links and truncate fields
	cleanTargetList = (items, columns) => {
		(!debug) || console.log('ListMolecules.js cleanTargetList() {items}:', items);
		let new_items = [];
		for (let i=0; i<items.length; i++) {
			let new_item = {};
			for (let j=0; j<columns.length; j++) {
				let value = '';
				let field = columns[j].field;
				if (items[i].hasOwnProperty(field)) {
					value = items[i][field];
					if (value.length > 60) {
						value = value.slice(0,60) + '...'
					}
				}
				new_item[field] = value;
			}
			// add link
			new_item.link = this.getFileLink(items[i].filename)
			new_item.action = this.getActionButton(items[i].Gene_name)
			// truncate synonyms
			new_items.push(new_item);
		}
		(!debug) || console.log('ListMolecules.js cleanTargetList() {new_items}: ', new_items);
		return new_items;
	}

	getData = (fields, items) => {
		//(!debug) || console.log('ListMolecules.js getData() {fields, items}:', fields, items);
		let data = [];
		for (let i=0; i<items.length; i++) {
			//(!debug) || console.log('ListMolecules.js getData() {i, items[i]}:', i, items[i]);
			let values = [];
			for (let j=0; j<fields.length; j++) {
				//(!debug) || console.log('ListMolecules.js getData() {j, fields[j]}:', j, fields[j]);
				let value = "";
				if (items[i].hasOwnProperty(fields[j].field)) {
					value = items[i][fields[j].field];
				}
				values.push(value);
			}
			//(!debug) || console.log('ListMolecules.js getData() {values}:', values);
			data.push(values);
		}
		return data;
	}

	getFields = () => {
		(!debug) || console.log('ListMolecules.js getFields() {}:');
		let fields = [
				{ field: 'action', title: 'Add' },
				{ field: 'id', title: 'Structure', mol_img: appConfig.mol_img_base_url, size: { x: this.state.mol_img.x, y: this.state.mol_img.y } },
				{ field: 'name', title: 'Mol Name' },
				{ field: 'id', title: 'ID', link: appConfig.chembl_mol_url, tooltip: 'Link to CheMBL Molecule Page' },
				{ field: 'id_type', title: 'ID type'},
				{ field: 'number_targets', title: 'Number Targets'},
				{ field: 'number_assays', title: 'Number Assays'},
				{ field: 'number_results', title: 'Number Results'},
				{ field: 'smiles', title: 'smiles'}
			];
			return fields;
	}

	render(){
		(!debug) || console.log('ListMolecules.js render() {this.state}:', this.state);
    (!debug) || console.log('ListMolecules.js render() {this.props}:', this.props);

		let molecules = this.state.molecules.all();
		(!debug) || console.log('ListMolecules.js render() {molecules}:', molecules);
		let fields = this.getFields();
		let data = this.getData(fields, molecules);

		return (
			<div className="w-auto">
				<Table
					fields={ fields }
					data={ data }
				/>
			</div>
		)
	}
}
