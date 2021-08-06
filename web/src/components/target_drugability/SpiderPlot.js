/*
 * Render a selected list of Targets
 * @author Dan Robertson <drobertson@indianabiosciences.org>
 */

import React from 'react';

import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';

import '../../css/targets.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import {appConfig} from '../../config/AppConfig';
let debug = appConfig.debug;

HighchartsMore(Highcharts)

export default class SpiderPlot extends React.Component {

	constructor(props){
		super(props);

		this.state = {
		};
	}

	// render a spider chart based on the supplied data
  renderSpiderChart = (categories, series) => {
		(!debug) || console.log('SpiderPlot.js renderSpiderChart() {categories, series}:', categories, series);

    const options = {
      chart: {
				polar: true,
        type: 'line'
      },
      tooltip: {
      },
      title: null,
      accessibility: {
      },
      xAxis : {
				categories: categories,
				tickmarkPlacement: 'on',
				lineWidth: 0
			},
			yAxis: {
				gridLineInterpolation: 'polygon',
				lineWidth: 0,
				min: 0,
				max: 1
			},
			legend: {

			},
      series: series,
    };
    return(
      <div className="myGraph">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    )
  }


	render(){
		(!debug) || console.log('SpiderPlot.js render() {this.state}:', this.state);
    (!debug) || console.log('SpiderPlot.js render() {this.props}:', this.props);

		return (
			<div className="spider-plot">
				{ this.renderSpiderChart(this.props.data.categories, this.props.data.series) }
			</div>
		)
	}
}
