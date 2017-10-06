import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import Loader from '../animation/loader.jsx'

export default class ResolutionDetail extends TrackerReact(Component) {
    
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

    resolution2(){
        return Resolutions.find()
    }

    updateResolution(event){
        event.preventDefault();
        let text = this.refs.resolution.value.trim();
        if(text){
            Meteor.call('updateResolution', this.props.id, text,(error, data)=>{
                if(error){
                    Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
                }else{
                    history.back();
                }
            });
        }else{
            Bert.alert('Please insert a thing to do', 'danger', 'fixed-top', 'fa-frown-o');
        }
    }
    
    render(){
        console.log(this.resolutions())
        console.log(this.resolution2())
        console.log(this.props.id)
        let res = this.resolutions();
        if(!res){return(<Loader />)}
        return(
            <div>
                <form className="new-resolution" onSubmit={this.updateResolution.bind(this)}>
                    <input type="text" ref="resolution" defaultValue={res.text}/><br />
                </form>
                <br/>
                <button href="#"><a href="/todo">Home</a></button>
            </div>
        )
    }
}