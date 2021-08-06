/*
* Render the Footer for Landing Page
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React from 'react';
import ListTargets from './ListTargets.js';
import CompareTargets from './CompareTargets.js';
import TargetDetails from './TargetDetails.js';
import PathwayTargets from './PathwayTargets.js';
import SelectedTargets from './SelectedTargets.js';
import SideBar from './SideBar.js';

import '../../css/targets.css';

// import allTargets from '../../Data/AMP-AD.json';
import allTargets from '../../Data/AD3C_Year2.json';

import {appConfig} from '../../config/AppConfig';
let debug = appConfig.debug;

export default class TargetDB extends React.Component {

  constructor(props){
		super(props);

		this.state = {
      activeView: 'TargetList',
      selectedTargets: []
		};
  }

  //functions to handle the various views
  setActiveView = (pane) => {
    this.setState({ activeView: pane})
  }

  isActive = (pane) => {
    return this.state.activeView === pane;
  }

  //functions to handle selected targets for focus
  selectTargets = (values) => {
    (!debug) || console.log('TargetDB.js selectTarget() {values}:', values);
    // add new targets to list if it is not already present
		let add_values = [];
		for (let i=0; i<values.length; i++) {
			if (this.state.selectedTargets.indexOf(values[i]) === -1) {
			  add_values.push(values[i]);
      }
		}
		(!debug) || console.log('TargetDB.js selectTargets() {add_values}:', add_values);
		this.setState({selectedTargets: this.state.selectedTargets.concat(add_values)});
  }

  removeTargets = (values) => {
    (!debug) || console.log('TargetDB.js removeTargets() {values}:', values);
    // remove targets from list
    let new_values = [];
    let cur_values = this.state.selectedTargets;
    for (let i=0; i<cur_values.length; i++) {
      if (values.indexOf(cur_values[i]) === -1) {
        new_values.push(cur_values[i]);
      }
    }
    (!debug) || console.log('TargetDB.js addToTargetList() {new_values}:', new_values);
    this.setState({selectedTargets: new_values});
  }

  // clear the target list
  clearTargets = () => {
    (!debug) || console.log('TargetDB.js clearTargets()) {}:');
    this.setState({selectedTargets: []});
  }

  showSelectedTargets = () => {
    return(
      <div>
        { (this.state.selectedTargets.length) ?
          <SelectedTargets
            targets = {this.state.selectedTargets}
            selectTargets = {this.selectTargets}
            removeTargets = {this.removeTargets}
            clearTargets = {this.clearTargets}
            setActiveView = {this.setActiveView}
            />
            : null }
      </div>
    )
  }

  inSelectedTargets = (name) => {
    if (this.state.selectedTargets.indexOf(name) === -1) {
      return false
    }
    return true
  }

  render () {
    (!debug) || console.log('TargetDB.js render() {this.state}:', this.state);
    (!debug) || console.log('TargetDB.js render() {this.props}:', this.props);

    let selectedTargets = allTargets.filter(t => this.inSelectedTargets(t.Gene_name));
    (!debug) || console.log('TargetDB.js render() {selectedTargets}:', selectedTargets);

    return(
      <div className="ibri-page">
        <SideBar
          setActiveView={this.setActiveView }
          activeView={this.state.activeView}
    		/>
        <div>
          <div className="target-db-pane" hidden={ this.isActive('TargetList') ? false : true }>
            { this.showSelectedTargets() }
            <ListTargets
              targets = {allTargets}
              selectTargets = {this.selectTargets}
            />
          </div>
          <div className="target-db-pane" hidden={ this.isActive('CompareTargets') ? false : true }>
            <i className="fa fa-cogs fa-2x"></i> &nbsp; <span className="nav-text">Compare Targets</span>
            { this.showSelectedTargets() }
            <CompareTargets
              targets = {selectedTargets}
              setActiveView={this.setActiveView }
            />
          </div>
          <div className="target-db-pane" hidden={ this.isActive('TargetDetails') ? false : true }>
            <i className="fa fa-info fa-2x"></i> &nbsp; <span className="nav-text">Target Details</span>
            <TargetDetails
              targets = {selectedTargets}
              setActiveView={this.setActiveView }
            />
          </div>
          <div className="target-db-pane" hidden={ this.isActive('PathwayTargets') ? false : true }>
            <i className="fa fa-info fa-2x"></i> &nbsp; <span className="nav-text">Pathway Target Details</span>
            <PathwayTargets
              targets = {selectedTargets}
              setActiveView={this.setActiveView }
            />
          </div>
        </div>
      </div>
    );
  }
}
