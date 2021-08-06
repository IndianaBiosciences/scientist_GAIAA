
/*
* Search a gene -- first
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React, { Component } from 'react';
import SingleInput from '../elements/SingleInput';
import ShowJson from '../elements/ShowJson';
import { getHugoGeneInfo } from '../api/HugoUtils';

let debug = false;

export default class SearchGene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search : '',
      jsonData : {},
    };
  }

  setSearch = (text) => {
    (!debug) || console.log("SearchGene.js setSearch() {text}", text);
    this.setState({search: text});
    getHugoGeneInfo(text, this.setJson);
  }

  setJson = (data) => {
    (!debug) || console.log("SearchGene.js setJson() {data}", data);
    this.setState({jsonData: data});
  }

  render = () => {
    (!debug) || console.log("SearchGene.js render() {this.state}", this.state);
    (!debug) || console.log("SearchGene.js render() {this.props}", this.props);

    return(
      <div className="border">
        <div className="">
          <SingleInput setFunction={this.setSearch} />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            Search Results for "<b>{this.state.search}</b>"
          </div>
          <div className="">
            <ShowJson jsonData={this.state.jsonData} />
          </div>
        </div>
      </div>
    );
  }
}
