import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProprietaireSingle from './ProprietaireSingle.jsx';

export default class Proprietaire extends Component {
    render() {
        const propri = this.props.ladder;
        return (
            <ReactCSSTransitionGroup
                component="div"
                className="resolutions"
                transitionName="route"
                transitionEnterTimeout={300}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={200}
                transitionAppear={true}
            >
                <div className="revolutionWrapper">
                    <div className="services_ladder services_ladder-mod">
                        {propri.map((propri)=>{
                            return <ProprietaireSingle key={propri.id} propri={propri}/>
                        })}
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}