import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
import Loader from '../animation/loader.jsx'
Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
    constructor(){
        super();

        this.state = {
            subscription: {
                resolutions: Meteor.subscribe("userResolutions")
            }
        }
    }

    resolutions(){
        return Resolutions.find().fetch();
    }

    render () {
        let res = this.resolutions();
        if(res.length < 1){
            return (<div>
                        <h1>My resolutions</h1>
                        <ResolutionsForm />
                        <Loader />
                    </div>)
        }
        return (
            <div className="revolutionWrapper">
                <h1>My resolutions - {Session.get('test')}</h1>
                <ResolutionsForm />
                <ReactCSSTransitionGroup
                        component="div"
                        transitionName="route"
                        transitionEnterTimeout={300}
                        transitionAppearTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionAppear={true}>
                 <ul className="resolutions">
                     <ReactCSSTransitionGroup
                        component="ul"
                        className="resolutions"
                        transitionName="resolutionLoad"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={200}>
                        {this.resolutions().map((resolution)=>{
                            return <ResolutionSingle key={resolution._id} resolution={resolution}/>
                        })}
                     </ReactCSSTransitionGroup>
                 </ul>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}