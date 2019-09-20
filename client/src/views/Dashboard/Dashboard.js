import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'


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

// const mainChart = {
//   labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: hexToRgba(brandInfo, 10),
//       borderColor: brandInfo,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data1,
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandSuccess,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 2,
//       data: data2,
//     },
//     {
//       label: 'My Third dataset',
//       backgroundColor: 'transparent',
//       borderColor: brandDanger,
//       pointHoverBackgroundColor: '#fff',
//       borderWidth: 1,
//       borderDash: [8, 5],
//       data: data3,
//     },
//   ],
// };

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

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

		this.state = {
			dropdownOpen: false,
			radioSelected: 1,
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		});
	}

	onRadioBtnClick(radioSelected) {
		this.setState({
			radioSelected: radioSelected,
		});
	}

	loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

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
					<Col xs="12" sm="12" lg="6">
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
					<Col xs="12" sm="12" lg="6">
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
					<Col xs="12" sm="12" lg="6">
						<Card>
							<CardHeader>
								<strong>Dwell Time Heatmap</strong>
							</CardHeader>
							<CardBody>
								<div className="d-flex justify-content-center">
									<img src="https://www.achieverbigdata.com/wp-content/uploads/2018/02/blog_23.png" style={{marginTop: 40 }}/>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xs="12" sm="12" lg="6">
						<Card>
							<CardHeader>
								<strong>Crowd Counting Heatmapp</strong>
							</CardHeader>
							<CardBody>
								<div className="d-flex justify-content-center">
									<img src="https://www.achieverbigdata.com/wp-content/uploads/2018/02/blog_22.png" style={{marginTop: 40 }}/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
			);
		}
	}
	
	export default Dashboard;
