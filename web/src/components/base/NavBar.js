//
//
import React from 'react';

import {appConfig} from '../../AppConfig';
let debug = appConfig.debug.base;

let logo="https://www.indianabiosciences.org/img/logo-inverse.svg";

let choices = [
  { view: 'home',   url: '/#/',       label: 'Home'},
  { view: 'data',   url: '/#/data',   label: 'Data'},
  { view: 'design', url: '/#/design', label: 'Design'},
  { view: 'select', url: '/#/select', label: 'Select'},
  { view: 'test',   url: '/#/test',   label: 'Test'},
  { view: 'status', url: '/#/status', label: 'Status'}
]

export default class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeView: 'home'
    };
  }

  setActiveView = (view) => {
    (!debug) || console.log('Navbar.js setActiveView() {view}:', view);
    this.setState({activeView: view});
  }

  getClass = (item, i) => {
    (!debug) || console.log('Navbar.js getClass() {item, i}:', item, i);
    let item_class = "px-4"
    if (i>0) {
      item_class = item_class + " border-l-1"
    }
    if (i<choices.length-2) {
      item_class = item_class + " border-r-1"
    }
    if (this.state.activeView === item.view) {
      item_class = item_class + " text-ibri font-bold"
    }
    (!debug) || console.log('Navbar.js getClass() {item_class}:', item_class);
    return(item_class);
  }

  render() {
    (!debug) || console.log('Navbar.js render() {this.state}:', this.state);
    (!debug) || console.log('Navbar.js render() {this.props}:', this.props);

    //let pathname = this.props.history.location.pathname;
    //(!debug) || console.log('Navbar.js main() {pathname}:',pathname);
    //let parts = pathname.split('/');
    //(!debug) || console.log('Navbar.js main()) {parts}:',parts);

    return (
      <div className="w-full fixed h-24">
        <div className="w-full flex h-12 bg-ibri-navy">
          <div className="flex-none overflow-visible z-50 h-24 bg-ibri p-3 m-0 ml-1 mt-1 border border-white shadow-lg">
            <img className="h-18 justify-center" src={logo} alt="IBRI"/>
          </div>
          <div className="flex-none text-lg h-full ml-4 py-3 text-white">
            <a href="/#"> { appConfig.Title } </a>
          </div>
          <div className="flex w-full items-center content-center justify-end">
            <div className="text-white pr-10 hover:opacity-75">
            Login
            </div>
            <div className="flex items-center text-sm text-gray-400 hover:opacity-75">
              <a className={this.getClass({view: 'about'}, 1)} href='/#/about' onClick={()=>this.setActiveView('about')}>About</a>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-10 px-40 bg-white border-b-1 border-ibri content-center justify-center">
          <div className="flex flex-expand"/>
          { choices.map((item,i) => (
          <div className="flex items-center text-sm text-gray-400 hover:opacity-75" key={item+"_"+i}>
            <a className={ this.getClass(item, i) } key={i} href={item.url} onClick={()=>this.setActiveView(item.view)}>{item.label}</a>
          </div>
          ))}
        </div>
      </div>
    )
  }
}
