import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import InputRange from 'react-input-range';
import styles from 'react-input-range/lib/css/index.css';
import SearchContainer from './searchContainer.jsx';
import SearchBiens from './searchBiens.jsx';
import FlipMove from 'react-flip-move';
import moment from 'moment';
import shuffle from 'lodash/shuffle';
import throttle from 'lodash/throttle';
import classNames from 'classnames';
Biens = new Mongo.Collection("biens");


export default class VenteBiens extends TrackerReact(React.Component) {

    constructor(props) {
        super(props);

        this.state = {
            rangeValue: {
                min: 0,
                max: 2000000,
            },
            biens: {
                biens: Meteor.subscribe("biens")
            },
            priceMax: 2000000,
            dataVente: {},
            critere: 0,
            searchWrapper: [
                {
                    title: "categorie",
                    select: ["Appartement", "Immeuble de rapport", "Terrain", "Bureau", "Commerce", "Maison"],
                    type: [8285428, 8307872, 8307842, 8307854, 8307909, 8277860],
                    id : 0
                },{
                    title: "region",
                    select: ["Brabant Wallon", "Bruxelles", "Hainaut"],
                    type: [8965311, 8965384, 8965436],
                    id: 1
                },{
                    title: "chambre",
                    select: ["1", "2", "3", "4", "5+"],
                    type: [1, 2, 3, 4, 5],
                    id: 2
                }
            ],
            addArticles: [],
            enterLeaveAnimation: 'fade',
            query: this.props.query,
            type: this.props.query.type,
        }
        this.moreCritere = this.moreCritere.bind(this);
        this.addClass = this.addClass.bind(this);
    }

        
    biens(){
        return Biens.find().fetch()
    }

    test(){
        let bien = this.biens();
        var reset = 0;
        if(bien.length > 0){
            reset = 1      
        }    
        if(reset==0){   
            setTimeout(()=>{this.test()},300);
        }else{
            this.state.dataVente=bien
            this.setSlider()
            this.reevalue()
        }
    }
    
    componentDidMount(){
        this.setSlider()
        this.test()
    }

    setSlider(){
        if(this.state.dataVente.length>0){
            let price = 0;
            for (var i=0; i < this.state.dataVente.length; i++) {
                if(parseInt(this.state.dataVente[i].price) > parseInt(price)){
                    price=this.state.dataVente[i].price; 
                }
            } 
            this.state.priceMax = parseInt(price)
            this.state.rangeValue.max = parseInt(price)      
            if(this.state.query.min){
                this.state.rangeValue.min = parseInt(this.state.query.min)
            }

            if(this.state.query.max){
                this.state.rangeValue.max = parseInt(this.state.query.max)
            }
        }
    }
    moreCritere(){
        let dropdown = document.getElementsByClassName('return1')[0]
        let text = document.getElementsByClassName('search_moreTxt')[0]
        let range =   document.getElementById('search')
        if(this.state.critere == 0){
            text.innerText = "Moins de critère";
            range.style.marginTop = "0px";
            dropdown.style.transform = "rotate(0deg)"
            this.state.critere = 1
        }else{
            text.innerText = "Plus de critère";
            range.style.marginTop = "-74px";
            dropdown.style.transform = "rotate(180deg)"
            this.state.critere = 0
        }
    }

    nbrSpace(nbr){
        var nombre = nbr,
        chaine = String(nombre),
        newChaine = '',
        longueur = chaine.length,
        b = 0,
        i = 0;
        if(longueur%3 != 0){
            b = 3 - longueur%3;
        }
        for(i=0; i < longueur; i++){
            if(b == 3){
            newChaine += ' ';
                b = 0;
            }
            b++;
            newChaine += chaine[i];
        }
        return newChaine;
    }

    url(){
        let groups = "&groups=";
        let regions = "&regions=";
        let bedrooms = "&bedrooms=";
        let min = "&min=";
        let max = "&max=";
        let dropdown = "/biens?type=";
        let garagesCheck = "";
        let gardenCheck = "";
        const current = document.getElementsByClassName('dropdown_label-current')
        let garages = document.getElementById('searchgarages')
        let garden = document.getElementById('searchgarden')
        for(var i = 0; i < current.length; i++){
            let alt = current[i].getAttribute("alt")
            let data = current[i].getAttribute("data")
            if(alt==0){
                groups +=  this.state.searchWrapper[alt].type[data] + "-"
            }else if(alt==1){
                regions += this.state.searchWrapper[alt].type[data] + "-"
            }else if(alt==2){
                bedrooms += this.state.searchWrapper[alt].type[data] + "-"
            }
        }
        if(groups=="&groups="){groups=""}else{groups=groups.substring(0,groups.length-1)}
        if(regions=="&regions="){regions=""}else{regions=regions.substring(0,regions.length-1)}
        if(bedrooms=="&bedrooms="){bedrooms=""}else{bedrooms=bedrooms.substring(0,bedrooms.length-1)}
        
        if(garages.checked){garagesCheck="&garages=yes"}else{garagesCheck=""}
        if(garden.checked){gardenCheck="&garden=yes"}else{gardenCheck=""}
        if(this.state.rangeValue.min != 0){min +=this.state.rangeValue.min}else{min=""}
        if(this.state.rangeValue.max != this.state.priceMax){max +=this.state.rangeValue.max}else{max=""}
        dropdown += this.state.type
        dropdown += min + max + groups + regions + garagesCheck + gardenCheck + bedrooms
        document.getElementById('test').href = dropdown
        document.getElementById('test').click()
        var reg=new RegExp("[=]+", "g");
        var groupsState=groups.split(reg);
        var regionsState=regions.split(reg);
        var bedroomsState=bedrooms.split(reg);
        var garagesState=garagesCheck.split(reg);
        var gardenState=gardenCheck.split(reg);
        var minState=min.split(reg);
        var maxState=max.split(reg);
        this.state.query = {
            groups: groupsState[1],
            regions: regionsState[1],
            bedrooms: bedroomsState[1],
            garages: garagesState[1],
            garden: gardenState[1],
            min: minState[1],
            max: maxState[1],
            type: this.state.type
        }
        this.reevalue();
    }

    reevalue(){
        if(this.state.query.groups){           
            let groups = this.state.query.groups
            let reg=new RegExp("[-]+", "g");
            let groupsTable=groups.split(reg);
            for (var j=0; j<groupsTable.length; j++) {
                for (var k=0; k<this.state.searchWrapper[0].type.length; k++) {
                    if(groupsTable[j]==this.state.searchWrapper[0].type[k]){
                        this.addClass(k, "categorie")
                    }
                }
            }
        }
        if(this.state.query.regions){           
            let regions = this.state.query.regions
            let reg=new RegExp("[-]+", "g");
            let regionsTable=regions.split(reg);
            for (var l=0; l<regionsTable.length; l++) {
                for (var m=0; m<this.state.searchWrapper[1].type.length; m++) {
                    if(regionsTable[l]==this.state.searchWrapper[1].type[m]){
                        this.addClass(m, "region")
                    }
                }
            }
        }
        if(this.state.query.bedrooms){           
            let bedrooms = this.state.query.bedrooms
            let reg=new RegExp("[-]+", "g");
            let bedroomsTable=bedrooms.split(reg);
            for (var n=0; n<bedroomsTable.length; n++) {
                for (var o=0; o<this.state.searchWrapper[2].type.length; o++) {
                    if(bedroomsTable[n]==this.state.searchWrapper[2].type[o]){
                        this.addClass(o, "chambre")
                    }
                }
            }
        }
        if(this.state.query.garages){
            document.getElementById('searchgarages').checked = true
        }

        if(this.state.query.garden){
            document.getElementById('searchgarden').checked = true
        }

        if(this.state.query.type=="Vente"){
            document.getElementById('typeVenteLabel').classList.add('typeChoices_label-active')
        }else if(this.state.query.type=="Location"){
            document.getElementById('typeLocationLabel').classList.add('typeChoices_label-active')
        }
        this.triage();
    }

    switch(label){
        if(label=="Vente"){
            document.getElementById('typeVenteLabel').classList.add('typeChoices_label-active')
            document.getElementById('typeLocationLabel').classList.remove('typeChoices_label-active')
            this.setState({ type: "Vente" })
        }else if(label=="Location"){
            document.getElementById('typeLocationLabel').classList.add('typeChoices_label-active')
            document.getElementById('typeVenteLabel').classList.remove('typeChoices_label-active')
            this.setState({ type: "Location" })
        }
    }

    addClass(id, wrapper){
        let label = document.getElementById('search'+wrapper+'label['+id+']')
        label.classList.add('dropdown_label-current')
    }

     renderArticles() {
        return this.state.addArticles.map( (article, i) => {
        return (
            <SearchBiens
            key={article._id}
            biens={article}
            dataVente={this.state.dataVente}
            {...article}
            />
        );
        });
    }

    moveArticle(source, dest, add) {
        addArticles=[];
        for(var i = 0; i<add.length; i++){
            addArticles.push(this.state.dataVente[add[i]])
        }
        this.setState({
            addArticles: addArticles
        });
    }

    triage(){
        if(this.state.dataVente){
            let dataVente = this.state.dataVente
            let finalTable= []
            let remove=[];
            let add=[];
            let query = this.state.query

            for(var i = 0; i<dataVente.length; i++){
                if(query.max){
                    if(parseInt(dataVente[i].price)<=parseInt(query.max)){
                        if(query.min){
                            if(parseInt(dataVente[i].price)>=parseInt(query.min)){
                                add.push(i)
                            }
                        }else{
                            add.push(i)
                        }
                    }
                }else{
                    if(query.min){
                        if(parseInt(dataVente[i].price)>=parseInt(query.min)){
                            add.push(i)
                        }
                    }else{
                        add.push(i)
                    }  
                }
            }

            if(query.type){
                let immo = []
                for(var i = 0; i<add.length; i++){
                    if(this.state.dataVente[add[i]].immo == query.type){
                        immo.push(add[i])
                    }
                }
                add=immo
            }

            if(query.groups){
                let reg=new RegExp("[-]+", "g");
                let groupsTable=query.groups.split(reg);
                let groups = []
                for(j=0; j<groupsTable.length;j++){
                    for(var i = 0; i<add.length; i++){
                        if(this.state.dataVente[add[i]].Type == groupsTable[j]){
                            groups.push(add[i])
                        }
                    }
                }
                add=groups
            }
             
            if(query.regions){
                let reg=new RegExp("[-]+", "g");
                let regionsTable=query.regions.split(reg);
                let regions = []
                for(j=0; j<regionsTable.length;j++){
                    for(var i = 0; i<add.length; i++){
                        if(this.state.dataVente[add[i]].regions == regionsTable[j]){
                            regions.push(add[i])
                        }
                    }
                }
                add=regions
            }

            if(query.bedrooms){
                let reg=new RegExp("[-]+", "g");
                let bedroomsTable=query.bedrooms.split(reg);
                let bedrooms = []
                for(j=0; j<bedroomsTable.length;j++){
                    for(var i = 0; i<add.length; i++){
                        if(this.state.dataVente[add[i]].Chambres == bedroomsTable[j]){
                            bedrooms.push(add[i])
                        }
                    }
                }
                add=bedrooms
            }

            if(query.garages){
                let garages = [];
                for(var i = 0; i<add.length; i++){
                    if(this.state.dataVente[add[i]].garage == "Oui"){
                        garages.push(add[i])
                    }
                }
                add=garages
            }
            
            if(query.garden){
                let garden = [];
                for(var i = 0; i<add.length; i++){
                    if(this.state.dataVente[add[i]].jardin == "Oui"){
                        garden.push(add[i])
                    }
                }
                add=garden
            }
            
            this.moveArticle('dataVente', 'removedArticles', add)
        }
    }

    render(){
        const test = {backgroundImage: "url('https://www.reo-partners.be/img/a-vendre.jpg')"};
        const test2 = {backgroundImage: "url('https://www.reo-partners.be/img/a-louer.jpg')"};
        let res = this.biens();
        if(res.length < 1){
            return (<div>
                        <h1>My resolutions</h1>
                    </div>)
        }else{
            this.state.dataVente=res
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
                <main id="main" className="goodsPage_page">
                    <button className="search_toggleBtn">
                        <svg className="search_toggleSvg">
                            <img src="loupe" />
                        </svg>
                    </button>
                    <div className="goodsPage">
                        <h2 className="goodsPage_h2">Nos biens</h2>
                        <div className="goodsPage_container cf">
                            <form method="post" className="search">
                                <div className="search_wrapper">
                                    <div className="typeChoices">
                                        <div className="typeChoices">
                                            <div className="typeChoices_el">
                                                <input type="radio" name="type" value="Vente" className="typeChoices_input" id="typeVente" onClick={this.switch.bind(this, "Vente")}/>
                                                <label className="typeChoices_label" id="typeVenteLabel" htmlFor="typeVente">Vente</label>
                                            </div>
                                            <div className="typeChoices_el">
                                                <input type="radio" name="type" value="Location" className="typeChoices_input" id="typeLocation" onClick={this.switch.bind(this, "Location")}/>
                                                <label className="typeChoices_label" id="typeLocationLabel" htmlFor="typeLocation">Location</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search_container">    
                                        <SearchContainer wrapper={this.state.searchWrapper[0]}/> 
                                        <SearchContainer wrapper={this.state.searchWrapper[1]}/> 
                                        <div className="search_toShow search_toShow-shown visible">                                            
                                            <SearchContainer wrapper={this.state.searchWrapper[2]}/> 
                                            <div className="cf search_switchboxes">
                                                <div className="switchbox switchbox-searchForm">
                                                    <label className="switchbox_label" htmlFor="searchgarages">
                                                        Garage
                                                    </label>
                                                    <input type="checkbox" name="garages" value="false" className="switchbox_checkbox" id="searchgarages"/>
                                                </div>
                                                <div className="switchbox switchbox-searchForm">
                                                    <label className="switchbox_label" htmlFor="searchgarden">
                                                        Jardin
                                                    </label>
                                                    <input type="checkbox" name="garden" value="false" className="switchbox_checkbox" id="searchgarden"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inter visible">
                                        </div>
                                        <div id="search" className="search_bottom">
                                            <label className="search_price">
                                                Prix
                                            </label>
                                            <div className="search_values">
                                                <span className="search_value">Min. {this.nbrSpace(this.state.rangeValue.min)}</span> - 
                                                <span className="search_value"> Max. {this.nbrSpace(this.state.rangeValue.max)}</span>
                                            </div>
                                            <forms className="form">
                                                <InputRange
                                                maxValue={this.state.priceMax}
                                                minValue={0}
                                                value={this.state.rangeValue}
                                                onChange={value => this.setState({ rangeValue: value })}
                                                step={10000}/>
                                            </forms>
                                        </div>
                                        <button type="button" className="btn-cancel search_more" onClick={this.moreCritere.bind(this)}>
                                            <span className="search_moreTxt">
                                                Plus de critères
                                            </span>
                                            <i className="dropdown_arrow return1"></i>
                                        </button>
                                        <button type="button" className="btn-cancel search_btn" onClick={this.url.bind(this)}>
                                            <img src="https://image.flaticon.com/icons/png/128/34/34097.png" className="imgLoupe" />
                                            <span className="search_btnTxt">
                                                Rechercher
                                            </span>
                                        </button>
                                        <a href="" id="test" style={{visibility: 'hidden'}}> test</a>
                                    </div>
                                </div>
                            </form>          
                            <div className="goodsPage_flex" style={{position: 'relative'}} data-reactid="167">
                                <FlipMove
                                    staggerDurationBy="30"
                                    duration={500}
                                    enterAnimation={this.state.enterLeaveAnimation}
                                    leaveAnimation={this.state.enterLeaveAnimation}
                                    typeName="div"
                                >
                                    {this.renderArticles()}
                                </FlipMove>
                            </div>
                        </div>
                    </div>
                </main>
            </ReactCSSTransitionGroup>
        )
    }
}

