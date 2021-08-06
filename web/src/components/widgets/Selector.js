/*
* Render a generic selector
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React, { Component } from 'react';
import IconArrowLeft from '../icons/IconArrowLeft';
import IconArrowRight from '../icons/IconArrowRight';
import IconCircleMinus from '../icons/IconCircleMinus';
import IconCirclePlus from '../icons/IconCirclePlus';

let debug = false;

export default class Selector extends Component {

  constructor(props) {
    super(props);

    this.state = {
			showSettings: false,
    };
  }

  setValue = (index) => {
    (!debug) || console.log("Selector.js setValue() {this.props}", this.props);
    (!debug) || console.log("Selector.js setValue() {index}", index);
    this.props.setFunction(this.props.values[index].value);
  }

  decIndex = () => {
    (!debug) || console.log("Selector.js decIndex() {this.props}", this.props);
    let index = this.getIndex();
    index = index - 1;
    if (index < 0) {
      if (this.props.cycle) {
        index = this.props.values.length - 1;
      } else {
        index = 0;
      }
    }
    this.setValue(index);
  }

  incIndex = () => {
    (!debug) || console.log("Selector.js incIndex() {this.props}", this.props);
    let index = this.getIndex();
    index = index + 1;
    if (index > this.props.values.length - 1) {
      if (this.props.cycle) {
        index = 0;
      } else {
        index = this.props.values.length - 1;
      }
    }
    this.setValue(index);
  }

  // function to get the index and confirming that it is found
  getIndex = () => {
    (!debug) || console.log("Selector.js getIndex() {this.props}", this.props);
    let values = this.props.values;
    // check to make sure there are some values
    if (values.length === 0) {
      return -1;
    }
    // check to make sure selected value is in list
    let index = values.map(e => e.value).indexOf(this.props.selected);
    if (index === -1) {
      index = 0;
    }
    return(index)
  }

  showValue = (index) => {
    (!debug) || console.log("Selector.js showValue() {props}", this.props);
    return(
      <div className="bg-transparent w-32 text-center px-4">
        { this.props.values[index].name }
      </div>
    )
  }

  showSelector = () => {
    (!debug) || console.log("Selector.js showSelector() {props}", this.props);
    let index = this.getIndex();
    // check to make sure there are some values
    if (index === -1 || this.props.values.length === 0) {
      return null;
    }
    return(
      <div className="flex flex-row items-center">
        <button className="py-2 px-1 focus:outline-none hover:opacity-50"
          onClick={() => this.decIndex()} >
        { (this.props.markerStyle === "plus-minus") ? <IconCircleMinus width="20" /> : <IconArrowLeft width="20" /> }
        </button>
        { (this.props.hideValue) ? null : this.showValue(index) }
        <button className="py-2 px-1 focus:outline-none hover:opacity-50"
          onClick={() => this.incIndex()} >
          { (this.props.markerStyle === "plus-minus") ? <IconCirclePlus width="20" /> : <IconArrowRight width="20" /> }
        </button>
      </div>
    )
  }

  render = () => {
    (!debug) || console.log("Selector.js render() {this.state}", this.state);
    (!debug) || console.log("Selector.js render() {this.props}", this.props);

    let index = this.getIndex();
    return(
      <>
        { this.showSelector(index) }
      </>
    );
  }
}

Selector.defaultProps = {
  values: [],
  selected: null,
  hideValue: false,
  markerStyle: "arrows",
  cycle: true
}
