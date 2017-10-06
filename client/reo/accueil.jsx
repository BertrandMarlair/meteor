import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ScrollableAnchor from 'react-scrollable-anchor';
import Services from './services.jsx';
import ReactDOM from 'react-dom';  
import {  
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Accueil extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                className="resolutions"
                transitionName="route"
                transitionEnterTimeout={300}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={200}
                transitionAppear={true}
            >
                <div className="slider">
                    <div className="slider_box">
                        <h2 className="slider_plus">Votre partenaire immobilier</h2>
                        <a className="sc-bdVaJa jiYPPT" href="/biens">Voir nos biens</a>
                    </div>
                    <a href='#section1' className="slider_btn">
                        <img src="http://uofastore.com/images/eRatex/totop.png"/>
                    </a>
                </div>
                <ScrollableAnchor id={'section1'} >
                    <div className="scroll"> </div>
                </ScrollableAnchor>
                <main id="main" className="wrapper" data-reactid="35">
                    <h3 className="home_h3" data-reactid="37">
                        <span className="quote quote-left">“</span>
                            Notre priorité est d'assurer un service parfaitement adapté à vos besoins.
                        <span className="quote quote-right">”</span>
                    </h3>
                    <div className="home_emojis" data-reactid="38">
                        <div className="home_emoji cf" data-reactid="39">
                            <img src="http://icon-icons.com/icons2/603/PNG/512/heart_love_valentines_relationship_dating_date_icon-icons.com_55985.png"/>
                            <p className="home_p home_p-svg" data-reactid="42">
                                Nous connaissons l’importance de la première rencontre avec nos clients. Elle est l’occasion pour eux de sentir s’ils pourront nous faire confiance, et pour nous, de comprendre leurs attentes et leurs aspirations.
                            </p>
                            <p className="home_p home_p-svg" data-reactid="43">
                                C’est pourquoi nous avons développé chacun de nos services avec pour unique objectif : l’accompagnement du propriétaire à chaque étape de son projet immobilier, nous y investir comme s’il était le nôtre et ce, jusqu’à la signature finale.
                            </p>
                        </div>
                        <div className="home_emoji cf" data-reactid="44">
                            <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-251c205de6105b216e43f280285d959d.png"/>
                            <p className="home_p home_p-svg" data-reactid="47">
                                Un marketing ciblé et une parfaite maitrise du marché immobilier sont pour nous les ingrédients nécessaires pour une collaboration aux meilleures conditions. Chacune de nos parutions est taillée sur mesure pour répondre à vos besoins, ceux de votre bien et ceux du marché.
                            </p>
                        </div>
                        <div className="home_emoji cf" data-reactid="48">
                            <img src="https://cdn4.iconfinder.com/data/icons/game-design-flat-icons-2/512/24_find_search_magnifier_game_design_flat_icon-512.png"/>
                            <p className="home_p home_p-svg" data-reactid="51">
                                Nous voulons garantir à nos clients la tranquillité d’esprit en leur offrant un accompagnement sur-mesure et en anticipant leurs attentes. Notre objectif est celui d’atteindre des résultats exceptionnels dans leur intérêt.
                            </p>
                            <p className="home_p home_p-svg" data-reactid="52">
                                Nous nous engageons à donner à nos clients le meilleur service possible en nous assurant que nos responsabilités et nos promesses soient exécutées.
                            </p>
                        </div>
                    </div>
                    <div className="home_philo" data-reactid="53">
                        <h2 className="home_title" data-reactid="54">Notre philosophie</h2>
                        <p className="home_p" data-reactid="55">
                            REO est un bureau immobilier actif dans le domaine du courtage : achat, vente, location, investissement. L’équipe est constituée de professionnels dynamiques et polyvalents qui travaillent en respectant scrupuleusement les règles déontologiques et légales de l’institut professionnel des agents immobiliers. Notre bureau se veut créatif et humain en vous apportant des solutions modernes pour le succès de vos projets immobiliers...
                        </p>
                        <p className="home_p" data-reactid="56">
                            Idéalement implantée au cœur du Brabant Wallon, notre agence bénéficie d’une localisation privilégiée pour assurer un service optimal à notre clientèle.  Nous vous souhaitons une agréable visite de notre site. N’hésitez pas à nous contacter, notre équipe se tient déjà à votre disposition.
                        </p>
                        <Router>
                            <div>
                                <Link to="/services" className="home_btn">Nos services</Link>
                                <Route path="/signin" component={Services} />
                            </div>
                        </Router>
                    </div>
                </main>        
            </ReactCSSTransitionGroup>
        )
    }
}