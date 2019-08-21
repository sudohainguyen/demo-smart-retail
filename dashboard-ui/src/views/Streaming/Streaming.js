import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Col } from 'reactstrap';
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities';
import JSMpeg from 'jsmpeg-player';

class ThemeView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bgColor: 'rgb(255, 255, 255)',
            live: false
        }

        // this._canvas = React.createRef();
    }

    _initSocket() {
        const url = 'ws://localhost:9999';

        // const canv = document.getElementById('canvas');
        // const player = new jsmpeg(url, {autoplay: true, canvas: canv});
        new JSMpeg.VideoElement('#videoWrapper', url, { control: false });
        // new JSMpeg.VideoElement('#videoWrapper', url, {control:false, canvas: canv});
    }

    componentDidMount() {
        const elem = ReactDOM.findDOMNode(this).parentNode.firstChild;
        const color = window.getComputedStyle(elem).getPropertyValue('background-color');
        this.setState({
            bgColor: color || this.state.bgColor
        });

        // this._initSocket();
    }

    render() {

        return (
            <table className="w-100">
                <tbody>
                    <tr>
                        <td className="text-muted">HEX:</td>
                        <td className="font-weight-bold">{rgbToHex(this.state.bgColor)}</td>
                    </tr>
                    <tr>
                        <td className="text-muted">RGB:</td>
                        <td className="font-weight-bold">{this.state.bgColor}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

class ThemeColor extends Component {
    // constructor(props) {
    //   super(props);
    // }
    render() {

        // const { className, children, ...attributes } = this.props
        const { className, children } = this.props

        const classes = classNames(className, 'theme-color w-75 rounded mb-3')

        return (
            <Col xl="2" md="4" sm="6" xs="12" className="mb-4">
                <div className={classes} style={{ paddingTop: '75%' }}></div>
                {children}
                <ThemeView />
            </Col>
        )
    }
}

class Streaming extends Component {
    render() {
        return (
            // <div className="animated fadeIn">
            //     <div className="card">
            //         <div className="card-header">
            //             <i className="fa fa-video-camera"></i> Live videos
            //         </div>
            //         <div className="card-body" id='videoWrapper'>
            //             {/* <canvas id="canvas" style={{height: 500, width: 800}}>

            //             </canvas> */}
            //             {/* <img name="main" id="main" border="0" width="640" height="480" src="rtsp://admin:haideptrai123@14.161.2.15:60004/cam/realmonitor?channel=1&subtype=00&authbasic=YWRtaW46aGFpZGVwdHJhaTEyMw=="></img> */}
            //         </div>
            //     </div>
            // </div>
            <div className="animated fadeIn">

            </div>
        );
    }
}

export default Streaming;
