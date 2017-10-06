import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NormalBiens extends Component {
    render(){
        const test = {backgroundImage: "url('https://www.reo-partners.be/img/a-vendre.jpg')"};
        const test2 = {backgroundImage: "url('https://www.reo-partners.be/img/a-louer.jpg')"};
        return(
            <ReactCSSTransitionGroup
                        component="div"
                        className="services"
                        transitionName="route"
                        transitionEnterTimeout={300}
                        transitionAppearTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionAppear={true}
            >
                <div className="services">
                    <div className="choiceImages">
                        <a className="choiceImages_choice" href="/biens?type=Vente">
                            <div className="choiceImages_img" style={test}>
                                <span className="choiceImages_text">Biens à vendre</span>
                            </div>
                        </a>
                        <a className="choiceImages_choice" href="/biens?type=Location">
                            <div className="choiceImages_img" style={test2}>
                                <span className="choiceImages_text">Biens à louer</span>
                            </div>
                        </a>
                    </div>
                    <div style={{height: "200px"}} className="choiceImages">
                        <a className="choiceImages_choice" href="/addBiens" style={{height: "200px", width: "100%", maxWidth: "100%"}}>
                            <div className="choiceImages_img" style={{height: "200px", backgroundImage: "url('https://www.reo-partners.be/files/9954b85e92ea97706d0a1252.jpg')"}}>
                                <span className="choiceImages_text">Ajouter</span>
                            </div>
                        </a>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}