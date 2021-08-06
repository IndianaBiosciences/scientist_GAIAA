/*
* Render a single input box
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React, { Component } from 'react';
import IconEnter from '../icons/IconEnter';

let debug = false;

export default class SingleInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
			text: "",
    };
  }

  _handleTextChanged = (e) => {
    //TODO Capture return
    (!debug) || console.log("SingleInput.js  _handleTextChanged() {e.target}", e.target);
    let textValue = e.target.value;

		this.setState({text: textValue});
	}

  _handleKeyDown = (e) => {
    (!debug) || console.log("SingleInput.js  _handleKeyDown() {e.key}", e.key);
    if (e.key === 'Enter') {
      (!debug) || console.log("SingleInput.js  _handleKeyDown() [Enter Pressed]");
      this._setValue();
    }
  }

  _setValue = () => {
    (!debug) || console.log("SingleInput.js  setValue() {this.state.text}", this.state.text);
    if (!this.props.setFunction) {
      console.log("SingleInput.js setFunction not defined")
      return
    }
    this.props.setFunction(this.state.text);
  }

  showInput= () => {
    (!debug) || console.log("SingleInput.js showInput() {props}", this.props);
    return(
      <div className="flex flex-row items-center">
        <input className="py-2 px-1 border focus:outline-none hover:opacity-50"
          value={this.state.text} onChange={this._handleTextChanged} onKeyDown={this._handleKeyDown} type="text" />
        <button className="py-2 px-1 focus:outline-none hover:opacity-50"
          onClick={() => this._setValue()} >
          <IconEnter width="30" />
        </button>
      </div>
    )
  }

  render = () => {
    (!debug) || console.log("SingleInput.js  render() {this.state}", this.state);
    (!debug) || console.log("SingleInput.js  render() {this.props}", this.props);

    return(
      <>
        { this.showInput() }
      </>
    );
  }
}

SingleInput.defaultProps = {
  name: null,
  setFunction: null,
}
