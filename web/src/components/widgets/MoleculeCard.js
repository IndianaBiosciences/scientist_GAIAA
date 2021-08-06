/*
* Render a molecule card
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
* https://rdkit.org/temp/demo/demo.html
* requires <script type="text/javascript"src="https://rdkit.org/temp/demo/RDKit_minimal.js"></script>
*   in the index.html in the public directory
*/

import React, { Component } from 'react';

let debug = false;

export default class MoleculeCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      img_sizes: {
        list : [ 'small', 'medium', 'large'],
        size : {
          small: { x: 100, y: 100 },
          medium: { x: 200, y: 200 },
          large: { x: 300, y: 300 }
        }
      },
      size_selected : 'medium',
    };
  }

  render = () => {
    (!debug) || console.log("MoleculeCard.js render() {this.state}", this.state);
    (!debug) || console.log("MoleculeCard.js render() {this.props}", this.props);

    let sel_size = this.state.size_selected;
    let size = this.state.img_sizes.size[sel_size];
    (!debug) || console.log("MoleculeCard.js render() {sel_size, size}", sel_size, size);

    return(
      <div className="border">
        <div className="">
          <img src={this.props.image} alt="" width={size.x} height={size.y}/>
        </div>
        <div className="">
          Molecule Data Goes Here
        </div>
      </div>
    );
  }
}
