import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import VenteBiens from './biens/venteBiens.jsx';
import Shuffle from './biens/locationBiens.jsx';
import NormalBiens from './biens/normalBiens.jsx';


export default class Biens extends TrackerReact(React.Component) {

    render(){
        const test = {backgroundImage: "url('https://www.reo-partners.be/img/a-vendre.jpg')"};
        const test2 = {backgroundImage: "url('https://www.reo-partners.be/img/a-louer.jpg')"};
        if(this.props.query.type == "Vente"){
            return <VenteBiens dataVente={this.props.dataVente} dataLocation={this.props.dataLocation} type={"Vente"} query={this.props.query}/>
        }else if(this.props.query.type == "Location"){
            return <VenteBiens dataVente={this.props.dataVente} dataLocation={this.props.dataLocation} type={"Location"} query={this.props.query}/>
        }else{
            return <NormalBiens />
        }
    }
} 