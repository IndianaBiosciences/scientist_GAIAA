/*
* Render the Test Page for New Component Testing
* @author Dan Robertson <drobertson@indianabiosciences.org>
* original demo: https://js.cytoscape.org/demos/cose-layout/
* github: https://github.com/cytoscape/cytoscape.js/tree/master/documentation/demos/cose-layout
*/

import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
/* eslint-disable */
let debug = false;

export default class NetworkGraph extends React.Component {

  constructor(props){
		super(props);

		this.state = {
      selected_node: null,
      selected_edge: {
        id: null,
        source: null,
        target: null
      }
    };
  }

  componentDidMount = () => {
    this.setUpListeners()
  }

  setUpListeners = () => {
    if (this.props.setNodeFunction) {
      this.cy.on('click', 'node', (event) => {
        let element = event.target;
        let node = element.data()
        let gene = node.name;
        this.props.setNodeFunction(gene);
        this.props.setEdgeFunction({})
      });
    }
    if (this.props.setEdgeFunction) {
      this.cy.on('click', 'edge', (event) => {
        let element = event.target;
        let node = element.data()
        let id = node.id;
        this.props.setNodeFunction(null)
        this.props.setEdgeFunction({ id: id, source: node.source, target: node.target});
      });
    }
  }

  render () {
    (!debug) || console.log('Test.js render() {this.state}:', this.state);
    (!debug) || console.log('Test.js render() {this.props}:', this.props);

    let graph_style = { width:  parseInt(this.props.width), height: parseInt(this.props.height) };

    let pan = { x: parseInt(this.props.pan_x), y: parseInt(this.props.pan_y) };

    (!debug) || console.log('NetworkGraph.js render() {jsonData, jsonStyle, graph_style}:',
      this.props.jsonData, this.props.jsonStyle, graph_style);

    if (!this.props.jsonData || !this.props.jsonStyle) {
      let viewbox = "0 0 "+ this.props.width + " " + this.props.height
      return(
        <div>
          <svg
            className="fill-current stroke-current text-ibri-navy hover:text-ibri-grey"
            x="0px"
            y="0px"
            viewBox={viewbox}
          >
            <g>
              <circle cx="10" cy="10" r="9" fill="text-ibri"/>
            </g>
          </svg>
        </div>
      )
    }

    return(
      <div id="network_graph">
        <CytoscapeComponent
          cy={(cy) => {this.cy = cy}}
          zoom={parseFloat(this.props.zoom)}
          pan={pan}
          style={graph_style}
          elements={this.props.jsonData}
          stylesheet={this.props.jsonStyle}
          />
      </div>
    );
  }
}

NetworkGraph.defaultProps = {
  width: 200,
  height: 200,
  pan_x: 0,
  pan_y: 0,
  zoom: 0.5
}
