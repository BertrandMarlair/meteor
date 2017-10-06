import React, {Component} from 'react';

export default class ProprietaireSingle extends Component {
    render(){
        return(
            <div className="services_floor">
                <div className="services_iblock">
                    <div className="services_side">
                        <div style={this.props.propri.side[1]}>
                            <div className="services_simage" style={this.props.propri.image1}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services_bubble">
                    <span className="services_bimage" style={this.props.propri.image2}></span>
                </div>
                <div className="services_block services_block-right" style={this.props.propri.side[0]}>
                    <h3 className="services_h2">{this.props.propri.title}</h3>
                    <p className="services_p">{this.props.propri.text}</p>
                </div>
            </div>
        )
    }
}