/*
 * Render a spider plot
 * @author Dan Robertson <drobertson@indianabiosciences.org>
 */

import React from 'react';

import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';

let debug = false;

HighchartsMore(Highcharts)

export default class SpiderPlot extends React.Component {

	constructor(props){
		super(props);

		this.state = {
		};
	}

	// render a spider chart based on the supplied data
  renderSpiderChart = (categories, series) => {
		(!debug) || console.log('SpiderPlot.js renderSpiderChart() {this.props}:', this.props);
		(!debug) || console.log('SpiderPlot.js renderSpiderChart() {categories, series}:', categories, series);

		let height = (this.props.height) ? this.props.height : 300;
		let width = (this.props.height) ? this.props.height : 300;

    const options = {
      chart: {
				polar: true,
        type: 'line',
				marginLeft: 65,
				marginRight: 65,
				height: height,
				width: width
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
      <HighchartsReact highcharts={Highcharts} options={options} />
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
