import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import JSMpeg from 'jsmpeg-player';
import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	CardColumns,
	Col,
	Row,
} from 'reactstrap';
class DwellTime extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col>
						<Card>
							<CardHeader>
								<strong>2D heatmap</strong>
							</CardHeader>
							<CardBody>
								<div className="d-flex justify-content-center">
									<img src="https://www.achieverbigdata.com/wp-content/uploads/2018/02/blog_23.png" />
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Row>
          <Col sm="6" md="3">
						<Card>
							<CardHeader>
								<strong>Cam 1</strong>
							</CardHeader>
							<CardBody>
								<img id="img-for-cam" src="https://i.imgur.com/aU7m2Mo.png" />
							</CardBody>
						</Card>
          </Col>
          <Col sm="6" md="3">
						<Card>
							<CardHeader>
								<strong>Cam 1</strong>
							</CardHeader>
							<CardBody>
								<img id="img-for-cam" src="https://i.imgur.com/aU7m2Mo.png" />
							</CardBody>
						</Card>
          </Col>
					<Col sm="6" md="3">
						<Card>
							<CardHeader>
								<strong>Cam 2</strong>
							</CardHeader>
							<CardBody>
								<img id="img-for-cam" src="https://i.imgur.com/aU7m2Mo.png" />
							</CardBody>
						</Card>
          </Col>
					<Col sm="6" md="3">
						<Card>
							<CardHeader>
								<strong>Cam 3</strong>
							</CardHeader>
							<CardBody>
								<img id="img-for-cam" src="https://i.imgur.com/aU7m2Mo.png" />
							</CardBody>
						</Card>
          </Col>
        </Row>
			</div>
		);
	}
}

export default DwellTime;
