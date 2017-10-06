import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import Loader from './animation/loader.jsx'

export default class notFound extends TrackerReact(Component) {
    
    constructor(){
        super();

        this.state = {
            subscription: {
                resolutions: Meteor.subscribe("userResolutions")
            }
        }
    }

    resolutions(){
        return Resolutions.findOne(this.props.id);
    }
    
    render(){
               
        let res = this.resolutions();
        if(!res){return(<Loader />)}
        return(
            <div>
                <h1>{res.text}</h1>
            </div>
        )
    }
}