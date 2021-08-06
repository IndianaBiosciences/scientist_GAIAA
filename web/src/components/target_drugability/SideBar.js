/*
* Render the Header for Landing Page
* @author Lena Ara <lenaa@radcube.com>
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

import '../../css/sidebar.css';

export default class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
			showSettings: false,
    };
  }

  render = () => {
    //console.log("AdminSideBar.js render() {this.state}", this.state);
    //console.log("AdminSideBar.js render() {this.props}", this.props);

    return(
      <div className="area">
        <nav className="side-menu">
          <ul>
            <li className="has-subnav">
              <div onClick={()=>this.props.setActiveView('TargetList')} className="sideNav"
                id = { this.props.activeView === 'TargetList' ? 'sideNav-active' : 'sideNav-inactive' }
              >
                <FontAwesomeIcon icon={faList} size="lg"/>
                <span className="nav-text">List Targets</span>
              </div>
            </li>
            <li className="has-subnav">
              <div onClick={() => this.props.setActiveView('PathwayTargets')} className="sideNav"
                id = { this.props.activeView === 'PathwayTargets' ? 'sideNav-active' : 'sideNav-inactive' }
              >
                <FontAwesomeIcon icon={faProjectDiagram} size="lg"/>
                <span className="nav-text">Pathway Targets</span>
              </div>
            </li>
            <li className="has-subnav">
              <div onClick={() => this.props.setActiveView('CompareTargets')} className="sideNav"
                id = { this.props.activeView === 'CompareTargets' ? 'sideNav-active' : 'sideNav-inactive' }
              >
                <FontAwesomeIcon icon={faCogs} size="lg"/>
                <span className="nav-text">Compare Targets</span>
              </div>
            </li>
            <li className="has-subnav">
              <div onClick={() => this.props.setActiveView('TargetDetails')} className="sideNav"
                id = { this.props.activeView === 'TargetDetails' ? 'sideNav-active' : 'sideNav-inactive' }
              >
                <FontAwesomeIcon icon={faInfo} size="lg"/>
                <span className="nav-text">Target Details</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
