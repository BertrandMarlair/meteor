import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Services extends Component {
    render(){
        const test = {backgroundImage: "url('https://www.reo-partners.be/img/services1.jpg')"};
        const test2 = {backgroundImage: "url('https://www.reo-partners.be/img/serviceRent.jpg')"};
        return(
            <ReactCSSTransitionGroup
                        component="div"
                        className="resolutions"
                        transitionName="route"
                        transitionEnterTimeout={300}
                        transitionAppearTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionAppear={true}
            >
                <div className="services">
                    <div className="choiceImages">
                        <a className="choiceImages_choice" href="/services/proprietaire">
                            <div className="choiceImages_img" style={test}>
                                <span className="choiceImages_text">Je suis propriétaire</span>
                            </div>
                        </a>
                        <a className="choiceImages_choice" href="/services/acheteur-locataire">
                            <div className="choiceImages_img" style={test2}>
                                <span className="choiceImages_text">Je suis acheteur ou locataire</span>
                            </div>
                        </a>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}