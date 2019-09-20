import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
// import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Card,
	CardBody,
	CardHeader,
  CardTitle,
  Col,
	Row,
} from 'reactstrap';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import Widget04 from '../Widgets/Widget04';


const brandInfo = getStyle('--info')
const brandDanger = getStyle('--danger')

// Main Chart
//Random Numbers
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 7;
var dwell = [];
var crowd = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
	dwell.push(random(5, 120));
	crowd.push(random(5, 100))
	data2.push(random(80, 100));
	data3.push(65);
}

const dwellChart = {
	labels: ['8 - 10', '10 - 12', '12 - 14', '14 - 16', '16 - 18', '18 - 20', '20 - 22'],
	datasets: [
		{
			label: 'Dwell Time',
			backgroundColor: hexToRgba(brandInfo, 10),
			borderColor: brandInfo,
			pointHoverBackgroundColor: '#fff',
			borderWidth: 2,
			data: dwell,
		}
	]
};

const crowdChart = {
	labels: ['8 - 10', '10 - 12', '12 - 14', '14 - 16', '16 - 18', '18 - 20', '20 - 22'],
	datasets: [
		{
			label: 'Crowd Counting',
			backgroundColor: hexToRgba(brandDanger, 10),
			borderColor: brandDanger,
			pointHoverBackgroundColor: '#fff',
			borderWidth: 2,
			data: crowd,
		}
	]
};

const mainChartOpts = {
	tooltips: {
		enabled: false,
		custom: CustomTooltips,
		intersect: true,
		mode: 'index',
		position: 'nearest',
		callbacks: {
			labelColor: function (tooltipItem, chart) {
				return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
			}
		}
	},
	maintainAspectRatio: false,
	legend: {
		display: false,
	},
	scales: {
		xAxes: [
			{
				gridLines: {
					drawOnChartArea: false,
				}
			}],
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
					maxTicksLimit: 5,
					stepSize: Math.ceil(250 / 5),
					max: 120,
				},
			}],
	},
	elements: {
		point: {
			radius: 0,
			hitRadius: 10,
			hoverRadius: 4,
			hoverBorderWidth: 3,
		},
	},
};

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};




const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      radioSelected: 1
    };
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
					<Col className="d-none d-sm-inline-block">
						<Card className="d-sm-inline-block float-right" style={{ padding: 10 }}>
							<Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
							<ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
								<ButtonGroup className="mr-3" aria-label="Second group">
									<Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
									<Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
									<Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
								</ButtonGroup>
							</ButtonToolbar>
						</Card>
					</Col>
				</Row>
        <Row>
          <Col sm="6" md="3">
            <Widget04 icon="icon-people" color="info" header="87.500" value="25" invert>Visitors</Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04 icon="icon-basket-loaded" color="warning" header="1238" value="25" invert>Products sold</Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04 icon="icon-speedometer" color="danger" header="5:34:11" value="25" invert>Dwell Time</Widget04>
          </Col>
          <Col sm="6" md="3">
            <Widget04 icon="icon-speech" color="info" header="972" value="25" invert>Comments</Widget04>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" lg="6">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Average Dwell Time</CardTitle>
                    <div className="small text-muted">How long customers stayed in the store (in minutes)</div>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Bar data={dwellChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" lg="6">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Crowd counting</CardTitle>
                    <div className="small text-muted">How many customers stayed in the store</div>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Bar data={crowdChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" lg="6">
            <Card>
              <CardHeader>
                Line Chart
                <div className="card-header-actions">
                  <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Line data={line} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6" sm="6" lg="6">
            <Card>
              <CardHeader>
                Bar Chart
                <div className="card-header-actions">
                  <a href="http://www.chartjs.org" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Stats;
