import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import Loader from '../../animation/loader.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ImageGallery from 'react-image-gallery';
import SuppForm from './addBien/suppForm.jsx';



export default class BienSingle extends TrackerReact(Component) {
    
    constructor(){
        super();

        this.state = {
            subscription: {
                resolutions: Meteor.subscribe("userbiens")
            }
        }
    }

    mapClick(){
        document.getElementById('map').style.pointerEvents="auto"
    }
    mapBlur(){
        document.getElementById('map').style.pointerEvents="none"
    }

    resolutions(){
        return Biens.findOne(this.props.id);
    }

    resolution2(){
        return Biens.find()
    }

    componentDidMount(){
        window.scrollTo(0,0)
    }

    componentWillUnmount(){
        this.state={}
    }

    deleteBiens(){
        Meteor.call('deleteBien', this.props.id)
        document.getElementById('test').click() 
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
        let data = this.resolutions();
        if(!data){return(<Loader />)}else{
            let images = [];
            for(var j = 0;j<data.image.length;j++){
                images.push({
                    original: data.image[j],
                    thumbnail: data.image[j]
                })
            } 
         
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
                    <div className="goodPage cf">
                        <div className="goodPage_column">
                            <div className="goodPage_block goodPage_block-img">
                                <h2 className="goodPage_title goodPage_title-img">
                                    {data.title}
                                </h2>
                                <h3 className="goodPage_location">
                                    {data.cp}
                                </h3>
                                <div className="goodPage_frame">
                                    <ImageGallery
                                    items={images}
                                    slideDuration={200}
                                    />
                                </div>
                                <div className="goodPage_btnBox">
                                    <button className="goodPage_btn">
                                        Contactez nous par mail
                                    </button>
                                </div>
                                <div className="goodPage_btnBox goodPage_btnBox-right">
                                    <button className="goodPage_btn">
                                        Contactez nous par téléphone
                                    </button>
                                </div>
                                 <div className="goodPage_btnBox goodPage_btnBox-right">
                                    <button className="goodPage_btn" onClick={this.deleteBiens.bind(this)}>
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                            <div className="goodPage_block">
                                <div className="goodPage_heading">
                                    <h2 className="goodPage_title">
                                        Description 
                                    </h2>
                                </div>
                                <p className="goodPage_description">
                                    {data.descrip}
                                </p>
                            </div>
                        </div>
                        <div className="goodPage_column goodPage_column-right">
                            <div className="goodPage_block goodPage_block-right">
                                <div className="goodPage_heading">
                                    <h2 className="goodPage_title">
                                        Détails du bien 
                                    </h2>
                                </div>
                                <table className="goodPage_details">
                                    <tbody>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Prix</td>
                                            <td className="goodPage_value">{data.Prix}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Surface habitable</td>
                                            <td className="goodPage_value">{data.Surfacehabitable} m<sup>2</sup></td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Chambres</td>
                                            <td className="goodPage_value">{data.Chambres}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Salles de bain</td>
                                            <td className="goodPage_value">{data.Sallesdebain}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Salles de douche</td>
                                            <td className="goodPage_value">{data.Sallesdedouche}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Caves</td>
                                            <td className="goodPage_value">{data.Caves}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Type de bien</td>
                                            <td className="goodPage_value">{data.Typedebien}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Etat de l'intérieur</td>
                                            <td className="goodPage_value">{data.Etatdelintérieur}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Type de cuisine</td>
                                            <td className="goodPage_value">{data.Typedecuisine}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Carburant du chauffage</td>
                                            <td className="goodPage_value">{data.Carburantduchauffage}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Année de construction</td>
                                            <td className="goodPage_value">{data.Annéedeconstruction}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Facades</td>
                                            <td className="goodPage_value">{data.Facades}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Ascenceur</td>
                                            <td className="goodPage_value">{data.Ascenceur}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Télédistribution</td>
                                            <td className="goodPage_value">{data.Télédistribution}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Terrasse</td>
                                            <td className="goodPage_value">{data.Terrasse}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Porte blindée</td>
                                            <td className="goodPage_value">{data.Porteblindée}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Buanderie</td>
                                            <td className="goodPage_value">{data.Buanderie}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Interphone</td>
                                            <td className="goodPage_value">{data.Interphone}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Videophone</td>
                                            <td className="goodPage_value">{data.Videophone}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Ecole à proximité</td>
                                            <td className="goodPage_value">{data.Ecoleàproximité}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Commerces à proximité</td>
                                            <td className="goodPage_value">{data.Commercesaproximité}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Status</td>
                                            <td className="goodPage_value">{data.Status}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Superficie des terrasses</td>
                                            <td className="goodPage_value">{data.Superficiedesterrasses} m<sup>2</sup></td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Etage</td>
                                            <td className="goodPage_value">{data.Etage}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Connexion internet</td>
                                            <td className="goodPage_value">{data.Connexioninternet}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Egouts</td>
                                            <td className="goodPage_value">{data.Egouts}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Eau</td>
                                            <td className="goodPage_value">{data.Eau}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Electricité</td>
                                            <td className="goodPage_value">{data.Electricité}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Gaz</td>
                                            <td className="goodPage_value">{data.Gaz}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Cable TV</td>
                                            <td className="goodPage_value">{data.CableTV}</td>
                                        </tr>
                                        <tr className="goodPage_line">
                                            <td className="goodPage_key">Ligne téléphonique</td>
                                            <td className="goodPage_value">{data.Lignetéléphonique}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>                                  
                    <div style={{height: "400px", marginTop: "-30px"}} onClick={this.mapClick.bind(this)}>
                        <iframe width="100%" height="100%" frameBorder="0" id="map" style={{pointerEvents: "none"}} onMouseOut={this.mapBlur.bind(this)}
                        src={'https://www.google.com/maps/embed/v1/search?key=AIzaSyBmRfr7i7r-BLEa5Oe6xnmAnsgerqB5GCg&q='+data.cp}
                        allowFullScreen></iframe>
                    </div>
                    <a href="/biens" id="test" style={{visibility: 'hidden'}}> test</a>
                </ReactCSSTransitionGroup>
            )
        }
    }  
}

/*import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TrackerReact from 'meteor/ultimatejs:tracker-react'

export default class BienSingle extends TrackerReact(Component) {
    
    constructor() {
        super();

        this.state = {
                biens: {
                    biens: Meteor.subscribe("userbiens")
                },    
                subscription: {
                    resolutions: Meteor.subscribe("userResolutions")
                }
            }
        }
    
    mapClick(){
        document.getElementById('map').style.pointerEvents="auto"
    }
    mapBlur(){
        document.getElementById('map').style.pointerEvents="none"
    }

    bienSingle(){
        return Biens.findOne(this.props.id);;
    }

    bienSingles(){
        return Biens.find().fetch()
    }

    resolutions(){
        bite = "65wt9shJTbBauAcGS"
        return Resolutions.findOne(bite);
    }

   
}
*/
