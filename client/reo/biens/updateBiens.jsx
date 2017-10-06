import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import UpdateForm from './addBien/updateForm.jsx';

export default class UpdateBiens extends Component {

    componentDidMount(){
        window.scrollTo(0,0)
    }

    render(){      
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
                <div className="goodPage cf" style={{minHeight: "959px"}}>
                    <div className="goodPage_addbiens">
                        <div className="goodPage_block goodPage_block-img">
                            <h2 className="goodPage_title goodPage_title-img">
                                Mettre à jour un bien
                            </h2>      
                        </div>
                        <div className="goodPage_details" style={{marginTop: "15px"}}>
                            <UpdateForm dataVente={this.props.dataVente} id={this.props.id}/>
                        </div>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

