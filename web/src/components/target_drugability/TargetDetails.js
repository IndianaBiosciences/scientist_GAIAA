/*
 * Render a selected list (Rx, Dx, ...)
 * Enable adding, clearing, and deleting items from the list based on parent component functions
 * Parent component holds the list state and functions acting on the list
 * @author Lena Ara <lenaa@radcube.com>
 * @author Dan Robertson <drobertson@indianabiosciences.org>
 */

import React from 'react';
//import * as RNFS from 'react-native-fs';
import { Button, Card } from 'react-bootstrap';

import '../../css/targets.css';

import {appConfig} from '../../config/AppConfig';
let debug = appConfig.debug;

let cards = [
		{ label: "Target Info",
				fields: [
					{ field: 'Gene_name', label: 'Gene Name'},
					{ field: 'Synonyms', label: 'Synonyms'},
					{ field: 'protein_family', label: 'Protein Family'},
					{ field: 'Number_isoforms', label: 'Uniprot # Isoforms'}
				]
		},
		{ label: "Target Druggability",
				fields: [
					{ field: 'Tractable', label: 'Tractability(class)'},
					{ field: 'Tractability_probability', label: 'Tractability(probability)'},
					{ field: 'structural_drug_score [mpo coeff= 2.0]', label: 'Druggability (coeff=2.0)'},
					{ field: 'structure_info_score [mpo coeff= 2.0]', label: 'Structure (coeff=2.0)'},
					{ field: 'chemistry_score [mpo coeff= 2.0]', label: 'Chemisty (coeff=2.0)'},
					{ field: 'biology_score [mpo coeff= -2.0]', label: 'Biology (coeff=2.0)' },
					{ field: 'disease_score [mpo coeff= -2.0]', label: 'Disease (coeff=2.0)' },
					{ field: 'genetic_score [mpo coeff= -2.0]', label: 'Genetic (coeff=2.0)' },
					{ field: 'information_score [mpo coeff= -2.0]', label: 'Information (coeff=2.0)' },
					{ field: 'safety_score [mpo coeff= 2-.0]', label: 'Safety (coeff=2.0)' },
				]
		},
		{ label: "Literature/Patent Information",
				fields: [
					{ field: 'EBI Total Patent Count', label: 'EBI Total Patent Count'},
					{ field: 'JensenLab PubMed Score', label: 'JensenLab PubMed Score'},
					{ field: 'NCBI Gene PubMed Count', label: 'NCBI Gene PubMed Count'},
					{ field: 'total_patent_count', label: 'Patent Count (Total)'},
					{ field: 'year_max_patents', label: 'Year of Max Patents'},
					{ field: 'count_patents_max_year', label: 'Patents Max Year Count'},
					{ field: 'novelty_score', label: 'Novelty Score'},
					{ field: 'total # publications', label: 'Total # Publications'},
					{ field: 'number of Dementia publications', label: 'Number of Dementia Publications'}
				]
		}
]

export default class TargetDetails extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			targetFocus: 0
		};
	}

	// let it cycle
	targetFocusLeft = () => {
		(!debug) || console.log('TargetDetails.js targetFocusLeft() {targetFocus}:', this.targetFocus);
		let newValue = this.state.targetFocus - 1;
		if (newValue < 0) {
			newValue = this.props.targets.length - 1;
		}
		this.setState({targetFocus: newValue})
	}

	// let it cycle
	targetFocusRight = () => {
		(!debug) || console.log('TargetDetails.js targetFocusRight() {targetFocus, targets.length}:', this.state.targetFocus, this.props.targets.length);
		let newValue = this.state.targetFocus + 1;
		if (newValue > this.props.targets.length-1) {
			newValue = 0;
		}
		this.setState({targetFocus: newValue});
	}

	showSelectTarget = (index) => {
		let className = (index===this.state.targetFocus) ? "target-details select focus" : "target-details select";
		let name = this.props.targets[index].Gene_name;
		return(
			<div className = { className } key={index}>
				{ name }
			</div>
		)
	}

	targetSelector = () => {
		(!debug) || console.log('TargetDetails.js targetSelector() {this.props}:', this.props);
		return(
			<div className="target-details select-container">
				<Button className="target-details select" onClick={(e)=>this.targetFocusLeft()}>
				  <i className="target-details fa fa-arrow-left fa-2x"></i>
				</Button>
					{ this.props.targets.map((item,index)=>this.showSelectTarget(index))}
				<Button className="target-details select" onClick={(e)=>this.targetFocusRight()}>
					<i className="target-details fa fa-arrow-right fa-2x"></i>
				</Button>
			</div>
		)
	}

	targetInfo = (label, field, index) => {
		let target = this.props.targets[this.state.targetFocus];
		let value = '';
		if (target.hasOwnProperty(field.field)) {
			value = target[field.field];
		}
		let key=label+field.label
		return(
			<tr key={key} className="target-details info">
				<td className="target-details info label">
					{field.label}
				</td>
				<td className="target-details info value">
					{value}
				</td>
			</tr>
		)
	}

	createCard = (card, index) => {
		return(
			<Card key={card.label} className='target-details'>
				<Card.Header className='target-details'>{card.label}</Card.Header>
				<Card.Body className='target-details'>
					<table className='target-details'>
						<tbody key={card.label}>
							{ card.fields.map((field,index)=>this.targetInfo(card.label,field,index)) }
						</tbody>
					</table>
				</Card.Body>
			</Card>
		)
	}

	render(){
		(!debug) || console.log('TargetDetails.js render() {this.state}:', this.state);
    (!debug) || console.log('TargetDetails.js render() {this.props}:', this.props);

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

		return (
			<>

			  <div className="targets-details header">
					{ (this.props.targets.length>1) ? this.targetSelector() : null }
					<div className="target-details title">
					   Details for Target: {this.props.targets[this.state.targetFocus].Gene_name}
					</div>
				</div>
				<div className="target-details">
					<div className='target-details cards'>
					{ cards.map((card, index)=>this.createCard(card, index))}
					</div>
			  </div>
			</>
		)
	}
}
