import React, {Component} from 'react';

export default class MenuSingle extends Component {
    toggleMenu(){
        if(this.props.resp == 0){
            document.getElementById("menu").classList.toggle('menuTransformPos');
            document.getElementById("menu").classList.toggle('menuTransformNeg');
            let toggle = document.getElementById('toggle');
            toggle.querySelector('input').checked = false;
        }
    }

    render(){
        return(
            <li className="menu_el">
                <a className="menu_link" href={this.props.menu.url}>
                    <span className="menu_inner" onClick={this.toggleMenu.bind(this)}>{this.props.menu.title}</span>
                </a>
            </li>
        )
    }
}