import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactDom from 'react-dom';
import MediaQuery from 'react-responsive';

Menu = new Mongo.Collection("menu");
import MenuSingle from './MenuSingle.jsx';
export default class menu extends TrackerReact(React.Component) {  

    constructor(){
        super();

        this.state = {
            subscription: {
                menu: Meteor.subscribe("menu")
            }
        }
    }

    toggleMenu(){
        document.getElementById("menu").classList.toggle('menuTransformPos');
        document.getElementById("menu").classList.toggle('menuTransformNeg');
    }

    menu(){
        return Menu.find().fetch();
    }

    render(){
        return (
            <div>
                <MediaQuery query='(max-width: 1280px)'>
                    <div id="toggle">
                        <input type="checkbox" onClick={this.toggleMenu.bind(this.open)}/>
                        <span></span>
                    </div>
                    <div id="menu" className="menu menuTransformPos">
                        <ul className="menu_list">
                            {this.menu().map((menu)=>{
                                return <MenuSingle key={menu._id} menu={menu} resp={0}/>
                            })}
                        </ul>
                    </div>
                </MediaQuery>
                <MediaQuery query='(min-width: 1281px)'>
                    <div id="menuNonResp" className="menuNonResp">
                        <ul className="menu_list">
                            {this.menu().map((menu)=>{
                                return <MenuSingle key={menu._id} menu={menu} resp={1}/>
                            })}
                        </ul>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}