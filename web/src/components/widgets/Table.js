/*
* Render a generic table
* uses tailwindcss styling
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React, { Component } from 'react';
import Selector from './Selector';
import Tooltip from './Tooltip';
import IconExternalLink from '../icons/IconExternalLink';

let debug = false;

export default class Table extends Component {

  constructor(props) {
    super(props);
    (!debug) || console.log("Table.js constructor() {this.props}", props);

    this.state = {
			showSelector: false,
      show_rows: 20,
      row_index: 0,
    };
  }

  getShowData = () => {
    (!debug) || console.log("Table.js getShowData() {show_rows, row_iterator}", this.state.show_rows, this.state.row_iterator);
    let data = this.props.data;
    // TODO: add filter
    // Filter based on subset to show
    if (data.length < this.state.show_rows) {
      return data;
    }
    let start = this.state.row_index;
    let end = this.state.row_index + this.state.show_rows;
    if (end > data.length) {
      end = data.length;
    }
    return data.slice(start, end);
  }

  setRowIndex = (index) => {
    (!debug) || console.log("Table.js setRowIndex() {index}", index);
    this.setState({row_index: index});
  }

  showSelector = () => {
    (!debug) || console.log("Table.js showSelector() {}");
    if (this.props.data.length < this.state.show_rows) {
      return (<></>);
    }
    let values = []
    let max_i = Math.floor(this.props.data.length / this.state.show_rows) + 1;
    for (let i=0; i<max_i; i++) {
        let start = i*this.state.show_rows + 1;
        let end = (i+1)*this.state.show_rows;
        if (end > this.props.data.length) {
          end = this.props.data.length;
        }
        let label = start + '-' + end;
        values.push({ value: i, name : label})
    }

    return (
      <Selector
        values = {values}
        selected = {this.state.row_index }
        setFunction = { this.setRowIndex }
      />
    )
  }

  renderValue = (value, field) => {
    (!debug) || console.log("Table.js renderValue() {value, field}", value, field);
    // field needs to be linked
    if (field.link) {
      let url = field.link + value
      return(
        <div className="flex flex-column">
          <div className="flex pr-2">{value}</div>
          <div className="flex">
            <Tooltip tooltipText={field.tooltip}>
              <a href={url} target="_blank" rel="noreferrer" >
                <IconExternalLink height="15"/>
              </a>
            </Tooltip>
          </div>
        </div>
      )
    }
    // field is an image
    if (field.hasOwnProperty("mol_img")) {
      let src = field.mol_img + value + ".svg"
      let x = 100;
      let y = 100;
      if (field.hasOwnProperty("size")) {
        x = field.size.x;
        y = field.size.y;
      }
      return ( <img src={src} alt={value} width={x} height={y} /> )
    }
    return (value)
  }

  renderRow = (index, row) => {
    (!debug) || console.log("Table.js renderRow() {index, row}", index, row);

    let td_class = "text-sm border-1 text-center border-ibri-gray px-2"
    if (index%2) {
      td_class = td_class + " bg-gray-200"
    }
    return(
      <tr key={index}>
        {row.map((value, col)=>(
          <td className={td_class} key={index+'_'+col}>
            { this.renderValue(value, this.props.fields[col]) }
          </td>
        ))}
      </tr>
    )
  }

  render = () => {
    (!debug) || console.log("Table.js render() {this.state}", this.state);
    (!debug) || console.log("Table.js render() {this.props}", this.props);

    if (!this.props.data) {
      return(null);
    }

    let subset_data = this.getShowData();

    return(
      <>
        <table className="border">
          <thead>
            <tr><td colSpan={this.props.fields.length}>{this.showSelector()}</td></tr>
            <tr className="bg-ibri text-white">
            { this.props.fields.map((field, index)=>(
              <th className="border-1 border-ibri-gray px-2" key={'tbl_th_'+index}>{field.title}</th>
            ))}
            </tr>
          </thead>
          <tbody>
            { subset_data.map((row, index)=>(
            this.renderRow(index, row)
          ))}
          </tbody>
        </table>
      </>
    );
  }
}
