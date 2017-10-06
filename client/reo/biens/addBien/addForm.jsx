import React,{Component}  from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const inputs1 = ["title", "price", "cp", "regions", "mail", "tel", "descrip", 
                "Prix", "Surfacehabitable", "Chambres", "Sallesdebain", "Sallesdedouche",
                "Caves", "Typedebien", "Type", "Etatdelintérieur", "Typedecuisine", "Carburantduchauffage",
                "Annéedeconstruction", "Facades", "Ascenceur", "Télédistribution", "Terrasse", "Porteblindée",
                "Buanderie", "Interphone", "Videophone", "Ecoleàproximité", "Commercesaproximité", "Status", "Superficiedesterrasses",
                "Etage", "Connexioninternet", "Egouts", "Eau", "Electricité", "Gaz", "CableTV", "Lignetéléphonique", "url", "garage", "jardin", "immo", "image"]

export default class AddForm extends Component {

    addBiens(event){
        event.preventDefault();
        let a = 0;
        for(let i = 0; i<inputs1.length; i++){
            if(!document.getElementsByName(inputs1[i])[0].value){
               a++
            }
        }
        if(a!=0){
            Bert.alert('Veuillez remplir tous les champs', 'danger', 'fixed-top', 'fa-frown-o');
        }else{
            let title = document.getElementsByName('title')[0].value;
            let price = document.getElementsByName('price')[0].value;
            let cp = document.getElementsByName('cp')[0].value;
            let regions = document.getElementsByName('regions')[0].value;
            let mail = document.getElementsByName('mail')[0].value;
            let tel = document.getElementsByName('tel')[0].value;
            let descrip = document.getElementsByName('descrip')[0].value;
            let Prix = document.getElementsByName('Prix')[0].value;
            let Surfacehabitable = document.getElementsByName('Surfacehabitable')[0].value;
            let Chambres = document.getElementsByName('Chambres')[0].value;
            let Sallesdebain = document.getElementsByName('Sallesdebain')[0].value;
            let Sallesdedouche = document.getElementsByName('Sallesdedouche')[0].value;
            let Caves = document.getElementsByName('Caves')[0].value;
            let Typedebien = document.getElementsByName('Typedebien')[0].value;
            let Type = document.getElementsByName('Type')[0].value;
            let Etatdelintérieur = document.getElementsByName('Etatdelintérieur')[0].value;
            let Typedecuisine = document.getElementsByName('Typedecuisine')[0].value;
            let Carburantduchauffage = document.getElementsByName('Carburantduchauffage')[0].value;
            let Annéedeconstruction = document.getElementsByName('Annéedeconstruction')[0].value;
            let Facades = document.getElementsByName('Facades')[0].value;
            let Ascenceur = document.getElementsByName('Ascenceur')[0].checked ? "Oui" : "Non"
            let Télédistribution = document.getElementsByName('Télédistribution')[0].checked ? "Oui" : "Non"
            let Terrasse = document.getElementsByName('Terrasse')[0].checked ? "Oui" : "Non"
            let Porteblindée = document.getElementsByName('Porteblindée')[0].checked ? "Oui" : "Non"
            let Buanderie = document.getElementsByName('Buanderie')[0].checked ? "Oui" : "Non"
            let Interphone = document.getElementsByName('Interphone')[0].checked ? "Oui" : "Non"
            let Videophone = document.getElementsByName('Videophone')[0].checked ? "Oui" : "Non"
            let Ecoleàproximité = document.getElementsByName('Ecoleàproximité')[0].checked ? "Oui" : "Non"
            let Commercesaproximité = document.getElementsByName('Commercesaproximité')[0].checked ? "Oui" : "Non"
            let Status = document.getElementsByName('Status')[0].value;
            let Superficiedesterrasses = document.getElementsByName('Superficiedesterrasses')[0].value;
            let Etage = document.getElementsByName('Etage')[0].value;
            let Connexioninternet = document.getElementsByName('Connexioninternet')[0].checked ? "Oui" : "Non"
            let Egouts = document.getElementsByName('Egouts')[0].checked ? "Oui" : "Non"
            let Eau = document.getElementsByName('Eau')[0].checked ? "Oui" : "Non"
            let Electricité = document.getElementsByName('Electricité')[0].checked ? "Oui" : "Non"
            let Gaz = document.getElementsByName('Gaz')[0].checked ? "Oui" : "Non"
            let CableTV = document.getElementsByName('CableTV')[0].checked ? "Oui" : "Non"
            let Lignetéléphonique = document.getElementsByName('Lignetéléphonique')[0].checked ? "Oui" : "Non"
            let url = document.getElementsByName('url')[0].value;
            let garage = document.getElementsByName('garage')[0].checked ? "Oui" : "Non"
            let jardin = document.getElementsByName('jardin')[0].checked ? "Oui" : "Non"
            let immo = document.getElementsByName('immo')[0].value;
            let reg=new RegExp("[,]+", "g");
            let image = document.getElementsByName('image')[0].value.split(reg);;
            Meteor.call('addBien', 
            title, price, cp, regions, image, mail, tel, descrip, Prix, Surfacehabitable, Chambres,
            Sallesdebain, Sallesdedouche, Caves, Typedebien, Type, Etatdelintérieur, Typedecuisine,
            Carburantduchauffage, Annéedeconstruction, Facades, Ascenceur, Télédistribution, Terrasse,
            Porteblindée, Buanderie, Interphone, Videophone, Ecoleàproximité, Commercesaproximité, Status,
            Superficiedesterrasses, Etage, Connexioninternet, Egouts, Eau, Electricité, Gaz, CableTV, Lignetéléphonique, url, garage, jardin, immo);
            document.getElementById('test').click()   
        }
    }


    componentDidMount(){
        for(var a=function(a,b){
            void 0===b&&(b=!0);
            var c=a.parentNode,d=a.parentNode.parentNode.parentNode,
                e=d.querySelector(".tab-content.active"),
                f=d.querySelector(a.getAttribute("name"));
            if(c.classList.contains("active"))
                return!1;
            if(d.querySelector(".tabs .active").classList.remove("active"),c.classList.add("active"),b){
                e.classList.add("fade"),e.classList.remove("in");
                var g=function(){
                    this.classList.remove("fade"),
                    this.classList.remove("active"),
                    f.classList.add("active"),
                    f.classList.add("fade"),
                    f.offsetWidth,f.classList.add("in"),
                    this.removeEventListener("transitionend",g)};
                e.addEventListener("transitionend",g)
            }else 
                f.classList.add("active"),
                e.classList.remove("active")
        },
        b=document.querySelectorAll(".tabs a"),
        c=0;c<b.length;c++)b[c].addEventListener("click",function(b){
            a(this)
        });
        var d=function(b){
            var c=window.location.hash,d=document.querySelector('a[name="'+c+'"]');
            null===d||d.classList.contains("active")||a(d,void 0!==b)
        };
        window.addEventListener("hashchange",d),d();
    }

    render(){
        return (  
            <div>
                <ul className="tabs">
                    <li className="active"><a name="#home">Accueil</a></li>
                    <li className=""><a name="#mentions">Mentions</a></li>
                    <li className=""><a name="#about">A propos</a></li>
                </ul>       
                <form onSubmit={this.addBiens.bind(this)}>
                    <div className="tabs-content">
                        <div className="tab-content active fade in" id="home">
                            <div className="goodPage_line">
                                <div className="goodPage_key">Titre :</div>
                                <div className="goodPage_value"><input type="text" name="title" placeholder={this.props.dataVente.title}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Code Postal :</div>
                                <div className="goodPage_value"><input type="text" name="cp" placeholder={this.props.dataVente.cp}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Prix calculable :</div>
                                <div className="goodPage_value"><input type="number" name="price" placeholder={this.props.dataVente.price}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Prix Affichable :</div>
                                <div className="goodPage_value"><input type="text" name="Prix" placeholder={this.props.dataVente.Prix}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Type de bien :</div>
                                <div className="goodPage_value"><input type="text" name="Typedebien" placeholder={this.props.dataVente.Typedebien}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Surface habitable :</div>
                                <div className="goodPage_value"><input type="number" name="Surfacehabitable" placeholder={this.props.dataVente.Surfacehabitable}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Facades :</div>
                                <div className="goodPage_value"><input type="number" name="Facades" placeholder={this.props.dataVente.Facades}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Année de construction :</div>
                                <div className="goodPage_value"><input type="number" name="Annéedeconstruction" placeholder={this.props.dataVente.Annéedeconstruction}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Chambres :</div>
                                <div className="goodPage_value">
                                    <select name="Chambres">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Salles de bain :</div>
                                <div className="goodPage_value"><input type="number" name="Sallesdebain" placeholder={this.props.dataVente.Sallesdebain}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Salles de douche :</div>
                                <div className="goodPage_value"><input type="number" name="Sallesdedouche" placeholder={this.props.dataVente.Sallesdedouche}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Caves :</div>
                                <div className="goodPage_value"><input type="number" name="Caves" placeholder={this.props.dataVente.Caves}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Type de cuisine :</div>
                                <div className="goodPage_value"><input type="text" name="Typedecuisine" placeholder={this.props.dataVente.Typedecuisine}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Carburant du chauffage :</div>
                                <div className="goodPage_value"><input type="text" name="Carburantduchauffage" placeholder={this.props.dataVente.Carburantduchauffage}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Etat de l'intérieur :</div>
                                <div className="goodPage_value"><input type="text" name="Etatdelintérieur" placeholder={this.props.dataVente.Etatdelintérieur}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Etage :</div>
                                <div className="goodPage_value"><input type="number" name="Etage" placeholder={this.props.dataVente.Etage}/></div>
                            </div>

                        </div>
                         
                        <div className="tab-content" id="mentions" style={{height: "741px"}}> 
                            <div className="goodPage_line">
                                <div className="goodPage_key">Mail :</div>
                                <div className="goodPage_value"><input type="text" name="mail" placeholder={this.props.dataVente.mail}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Téléphone :</div>
                                <div className="goodPage_value"><input type="number" name="tel" placeholder={this.props.dataVente.tel}/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Regions :</div>
                                <div className="goodPage_value">
                                    <select name="regions">
                                        <option value="8965311">Brabant Wallon</option>
                                        <option value="8965384">Bruxelles</option>
                                        <option value="8965436">Hainaut</option>
                                    </select>
                                </div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Type :</div>
                                <div className="goodPage_value">
                                    <select name="Type">
                                        <option value="8285428">Appartement</option>
                                        <option value="8307872">Immeuble de rapport</option>
                                        <option value="8307842">Terrain</option>
                                        <option value="8307854">Bureau</option>
                                        <option value="8307909">Commerce</option>
                                        <option value="8277860">Maison</option>
                                    </select>
                                </div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Ascenceur :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Ascenceur" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Télédistribution :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Télédistribution" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Porteblindée :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Porteblindée" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Buanderie :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Buanderie" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Interphone :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Interphone" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Videophone :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Videophone" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Ecole à proximité :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Ecoleàproximité" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Commerces à proximité :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Commercesaproximité" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Connexion internet :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Connexioninternet" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Egouts :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Egouts" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Eau :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Eau" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Electricité :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Electricité" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Gaz :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Gaz" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">CableTV :</div>
                                <div className="goodPage_value"><input type="checkbox" name="CableTV" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Ligne téléphonique :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Lignetéléphonique" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Garage :</div>
                                <div className="goodPage_value"><input type="checkbox" name="garage" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Jardin :</div>
                                <div className="goodPage_value"><input type="checkbox" name="jardin" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line checkbox">
                                <div className="goodPage_key">Terrasse :</div>
                                <div className="goodPage_value"><input type="checkbox" name="Terrasse" defaultChecked/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Superficie des terrasses :</div>
                                <div className="goodPage_value"><input type="number" name="Superficiedesterrasses" placeholder={this.props.dataVente.Superficiedesterrasses}/></div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Status :</div>
                                <div className="goodPage_value"><input type="text" name="Status" placeholder={this.props.dataVente.Status}/></div>
                            </div>
                        </div>
                        <div className="tab-content" id="about">
                            <div className="textarea goodPage_line">
                                <div className="goodPage_key">Description :</div>
                                <textarea name="descrip" defaultValue={this.props.dataVente.descrip} />
                            </div>
                             <div className="goodPage_line">
                                <div className="goodPage_key">Immobiler type :</div>
                                <div className="goodPage_value">
                                    <select name="immo">
                                        <option value="Vente">Vente</option>
                                        <option value="Location">Location</option>
                                    </select>
                                </div>
                            </div>
                            <div className="goodPage_line">
                                <div className="goodPage_key">Url :</div>
                                <div className="goodPage_value"><input type="text" name="url" placeholder={this.props.dataVente.url}/></div>
                            </div>
                            <div className="textarea goodPage_line">
                                <div className="goodPage_key">image :</div>
                                <textarea name="image" defaultValue={this.props.dataVente.image} />
                            </div>
                            <input className="submit" type="submit" value="Submit"/>
                        </div>
                    </div>
                </form>
                <a href="/biens" id="test" style={{visibility: 'hidden'}}> test</a>
            </div>
        )
    }
}