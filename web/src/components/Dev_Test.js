/*
* Render the Footer for Landing Page
* @author Dan Robertson <drobertson@indianabiosciences.org>
*/

import React from 'react';

/* widgets */
import Selector from './widgets/Selector';
import Table from './widgets/Table';
import InfoCard from './widgets/InfoCard';
import MoleculeCard from './widgets/MoleculeCard';
import SpiderPlot from './widgets/SpiderPlot';
import SearchGene from './widgets/SearchGene';
import NetworkGraph from './widgets/NetworkGraph';
import Networks from './objects/Networks';

/* icons */
import IconExternalLink from './icons/IconExternalLink';
import IconEnter from './icons/IconEnter';
import IconArrowLeft from './icons/IconArrowLeft';
import IconArrowRight from './icons/IconArrowRight';
import IconCircleMinus from './icons/IconCircleMinus';
import IconCirclePlus from './icons/IconCirclePlus';

/* Elements */
import ShowJson from './elements/ShowJson';
import ButtonLinkOut from './elements/ButtonLinkOut';
import SingleInput from './elements/SingleInput';

import {appConfig} from '../AppConfig';
let debug = true;

let molecule_img_base_url = appConfig.mol_img_base_url;
let molecule = {
  'id' : 'CHEMBL101253',
  'img' : molecule_img_base_url + 'CHEMBL101253.svg'
}

let test_values = [
  { 'name': 'Test 1', 'value': 1 },
  { 'name': 'Test 2', 'value': 2 },
  { 'name': 'Test 3', 'value': 3 },
]

let spider_test_data = {
  categories: [
    'DataField-1', 'DataField-2', 'DataField-3', "DataField-4", 'DataField-5'
  ],
  series: [
    {
      name: 'A',
      data: [ 0.0, 1.0, 1.0, 0.25, 0.5 ],
      pointPlacement: 'on'
    },
    {
      name: 'b',
      data: [ 0.25, 0.5, 0.0, 0.5, 1.0 ],
      pointPlacement: 'on'
    }
  ]
}

// for NetworkGraph
let networks = new Networks();
let test_network = 'test-tim';
let test_network_jsonData = networks.getData(test_network);
let test_network_jsonStyle = networks.getStyle(test_network);
let test_network_name = networks.getName(test_network);

export default class Dev_Test extends React.Component {

  constructor(props){
		super(props);

		this.state = {
      selected1: null,
      selected2: null,
      singleInput: null,
      network_node: null,
      network_edge: null
    };
  }

  // function to have the set value function
  setSelected1 = (value) => {
    (!debug) || console.log('Test.js setSelected1() {value}:', value);
    this.setState({selected1: value});
  }

  // function to have the set value function
  setSelected2 = (value) => {
    (!debug) || console.log('Test.js setSelected2() {value}:', value);
    this.setState({selected2: value});
  }

  // function for network set value function
  _setSelectedEdge = (value) => {
    (!debug) || console.log('Test.js setSelectedEdge() {value}:', value);
    this.setState({network_edge: value});
  }

  _setSelectedNode = (value) => {
    (!debug) || console.log('Test.js setSelectedNode() {value}:', value);
    this.setState({network_node: value});
  }

  // function to have the set value function
  setSingleInput = (value) => {
    (!debug) || console.log('Test.js setSingleInput() {value}:', value);
    this.setState({singleInput: value});
  }

  // function to return the name of the selected value
  getSelected1Name = () => {
    (!debug) || console.log('Test.js getSelected1Name() {}:');
    if (test_values.length === 0 || this.state.selected1 == null) {
      return null;
    }
    let index = test_values.map(e => e.value).indexOf(this.state.selected1);
    (!debug) || console.log('Test.js getSelected1Name() {index}:', index);
    if (index === -1) {
      return null;
    }
    return test_values[index].name;
  }

  render () {
    (!debug) || console.log('Test.js render() {this.state}:', this.state);
    (!debug) || console.log('Test.js render() {this.props}:', this.props);

    return(
      <div>
        <div className="text-lg font-bold mb-10">Widget Test Page</div>

        {/* Icons */}
        <div className="text-md text-ibri font-bold border-b-2 mb-2">Icons (widths: 20 and 40)</div>
        <div className="flex flex-row flex-wrap px-2">
          <div className="flex border-2 border-grey p-2 m-1">
            <div className="px-1">IconExternalLink: </div>
            <div className="px-1"><IconExternalLink width="20"/> </div>
            <div className="px-1"><IconExternalLink width="40"/> </div>
          </div>
          <div className="flex border-2 border-grey p-2 m-1">
            <div className="px-1">IconEnter: </div>
            <div className="px-1"><IconEnter width="20"/> </div>
            <div className="px-1"><IconEnter width="40"/> </div>
          </div>
          <div className="flex border-2 border-grey p-2 m-1">
            <div className="px-1">IconArrowLeft: </div>
            <div className="px-1"><IconArrowLeft width="20"/> </div>
            <div className="px-1"><IconArrowLeft width="40"/> </div>
          </div>
          <div className="flex border-2 border-grey p-2 m-1">
            <div className="px-1">IconArrowRight: </div>
            <div className="px-1"><IconArrowRight width="20"/> </div>
            <div className="px-1"><IconArrowRight width="40"/> </div>
          </div>
          <div className="flex border-2 border-grey p-2 m-1">
            <div className="px-1">IconCircleMinus: </div>
            <div className="px-1"><IconCircleMinus width="20"/> </div>
            <div className="px-1"><IconCircleMinus width="40"/> </div>
          </div>
          <div className="flex border-2 border-grey p-2 m-1">
            <div className="px-1">IconCirclePlus: </div>
            <div className="px-1"><IconCirclePlus width="20"/> </div>
            <div className="px-1"><IconCirclePlus width="40"/> </div>
          </div>
        </div>

        {/* Elements */}
        <div className="text-md text-ibri font-bold border-b-2 mb-2">Elements</div>
        <div className="flex flex-row flex-wrap px-2">

          {/* ButtonLinkOut */}
          <div className="flex border-2 border-grey p-2 m-1">
            <div className="px-1">ButtonLinkOut: </div>
            <div className="px-1"><ButtonLinkOut /> </div>
          </div>

          {/* SingleInput */}
          <div className="flex flex-col border-2 border-grey p-2 m-1">
            <div className="flex px-1">SingleInput: {this.state.singleInput}</div>
            <div className="flex px-1"><SingleInput setFunction={this.setSingleInput}/> </div>
          </div>

        </div>

        {/* Widgets */}
        <div className="text-md text-ibri font-bold border-b-2 my-2">Widgets</div>
        <div className="flex flex-row flex-wrap p-2">

          {/* InfoCard */}
          <div className="flex flex-col m-2">
            <div className="text font-mediums">
            InfoCard Widget
            </div>
            <div>
              <InfoCard
                title="InfoCard Test Title"
                content="this is my brief content for the InfoCard."
              />
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* selector */}
          <div className="flex flex-col m-2">
            <div className="h-auto rounded-lg p-2 bg-ibri">
              <div className="border-b-1 bg-ibri text-white font-medium">
                Selector Widget
              </div>
              <div className="bg-white p-2 border">
                <div>Version 1</div>
                <div className="text-sm text-center font-normal border bg-white text-black">
                  value: "{ this.state.selected1 }" name: "{ this.getSelected1Name() }"</div>
                <Selector
                  values={test_values}
                  selected={this.state.selected1}
                  setFunction={this.setSelected1}
                />
              </div>
              <div className="bg-white p-2 border">
                <div>Version 2</div>
                <div className="text-sm text-center font-normal border bg-white text-black">
                  value: "{ this.state.selected2 }"</div>
                <Selector
                  values={test_values}
                  selected={this.state.selected2}
                  setFunction={this.setSelected2}
                  hideValue={true}
                  cycle={false}
                  markerStyle="plus-minus"
                />
              </div>
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* table */}
          <div className="flex flex-col m-2">
            <div className="h-auto rounded-lg p-2 bg-ibri">
              <div className="border-b-1 bg-ibri text-white font-medium">
                Table Widget
                <div className="text-sm text-center font-normal border bg-white text-black">
                  <Table
                  />
                </div>
              </div>
              <div className="bg-white p-2">
              </div>
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* ShowJson */}
          <div className="flex flex-col m-2">
            <div className="h-auto rounded-lg p-2 bg-ibri">
              <div className="border-b-1 bg-ibri text-white font-medium">
                Show Json Widget
                <div className="text-sm text-center font-normal border bg-white text-black">
                  <ShowJson
                    jsonData = { spider_test_data }
                  />
                </div>
              </div>
              <div className="bg-white p-2">
              </div>
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* Molecule Card */}
          <div className="flex flex-col m-2">
            <div className="rounded-lg p-2 bg-ibri">
              <div className="border-b-1 bg-ibri text-white font-medium">
                Molecule Card
              </div>
              <div className="bg-white p-2">
                <MoleculeCard
                  name={molecule.id}
                  image={molecule.img}
                />
              </div>
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* Network Graph */}
          <div className="flex flex-col m-2 w-auto h-auto">
            <div className="rounded-lg p-2 bg-ibri w-auto">
              <div className="border-b-1 bg-ibri text-white font-medium">
                Spider Plot: HighCharts
              </div>
              <div className="bg-white p-1">
                <SpiderPlot
                  data = { spider_test_data }
                />
              </div>
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* Spider Plot */}
          <div className="flex flex-col m-2">
            <div className="rounded-lg p-2 bg-ibri w-auto">
              <div className="border-b-1 bg-ibri text-white font-medium">
                Network Graph: {test_network_name}
              </div>
              <div className="bg-white p-1 w-52">
                <NetworkGraph
                  jsonData = {test_network_jsonData}
                  jsonStyle = {test_network_jsonStyle}
                  setEdgeFunction = {this._setSelectedEdge}
                  setNodeFunction = {this._setSelectedNode}
                  width="200"
                  height="200"
                  pan_x="0"
                  pan_y="0"
                  zoom="0.25"
                />
              </div>
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* Search Gene */}
          <div className="flex flex-col m-2">
            <div className="rounded-lg p-2 bg-ibri w-auto">
              <div className="border-b-1 bg-ibri text-white font-medium">
                Search Gene
              </div>
              <div className="bg-white p-1 w-52">
                <SearchGene />
              </div>
            </div>
            <div className="flex-grow"></div>
          </div>

          {/* end of widgets */}
        </div>
      </div>
    );
  }
}
