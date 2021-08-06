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

export default class ShowJson extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render = () => {
    (!debug) || console.log("ShowJson.js render() {this.state}", this.state);
    (!debug) || console.log("ShowJson.js render() {this.props}", this.props);

    let strJson = ""
    if (this.props.jsonData) {
      strJson = JSON.stringify(this.props.jsonData)
    }
    (!debug) || console.log("ShowJson.js render() {strJson}", strJson);
    //TODO: Do this as a recursion to add indents
    //strJson = strJson.replaceAll(',', ',\n');
    strJson = strJson.replaceAll(':[', ':\n[\n');
    strJson = strJson.replaceAll('],', '\n],\n');
    strJson = strJson.replaceAll('{', '{\n');
    strJson = strJson.replaceAll('},', '},\n}');
    strJson = strJson.replaceAll('}', '\n}');

    (!debug) || console.log("ShowJson.js render() {strJson}", strJson);

    return(
      <div className="border">
        <div className="text-left whitespace-pre">
            { strJson }
        </div>
      </div>
    );
  }
}
