/*
* Render a molecule card
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
* https://rdkit.org/temp/demo/demo.html
* requires <script type="text/javascript"src="https://rdkit.org/temp/demo/RDKit_minimal.js"></script>
*   in the index.html in the public directory
*/

import React, { Component } from 'react';

let debug = true;

export default class InfoCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render = () => {
    (!debug) || console.log("InfoCard.js render() {this.state}", this.state);
    (!debug) || console.log("InfoCard.js render() {this.props}", this.props);

    return(
      <div className="flex flex-col rounded bg-ibri p-1">
        <div className ="flex text-md text-white p-2">
          {this.props.title}
        </div>
        <div className="flex bg-white p-2">
          {this.props.content}
        </div>
      </div>
    );
  }
}
