import React, {Component} from 'react';

export default class SearchBiens extends Component {
  

    render(){   
        let background
        if(this.props.Status == "NOUVEAU"){
            background = {backgroundColor: "#77c04e"}
        }else{
            background = {backgroundColor: "#0f9ed5"}
        }
        return(
            <span className="offerSpan" data-reactid="168">
                <a className="minOffer_link" href={"/bien/"+this.props.biens.url+"/"+this.props.biens._id} onClick={this.props.clickHandler} data-reactid="169">
                    <div className="minOffer_frame" data-reactid="170">
                        <img className="minOffer_image" src={this.props.biens.image[0]} data-reactid="171"/>
                        <span className="minOffer_tag minOffer_tag-new" style={background} title={this.props.Status} data-reactid="172">
                            {this.props.biens.Status}
                        </span>
                        <h4 className="minOffer_category" data-reactid="173">
                            {this.props.biens.Typedebien}
                        </h4>
                        <span className="minOffer_price" data-reactid="174">
                            {this.props.biens.Prix}
                        </span>
                        <div className="minOffer_peb" data-reactid="177">
                        </div>
                    </div>
                    <div className="minOffer_bottom" data-reactid="179">
                        <span className="minOffer_location" title="1410 Waterloo" data-reactid="180">
                            {this.props.biens.cp}
                        </span>
                        <div className="minOffer_symbols" data-reactid="181">
                            <div className="minOffer_symbol" title="Nombre de facades" data-reactid="182">
                                <img src="https://image.freepik.com/icones-gratuites/mur-de-briques_318-62089.jpg" />
                                <span className="minOffer_number" data-reactid="185">
                                    {this.props.biens.Facades}
                                </span>
                            </div>
                            <div className="minOffer_symbol" title="Nombre de chambres" data-reactid="186">
                                <img src="https://image.freepik.com/icones-gratuites/personne-qui-dort-sur-un-lit_318-27520.jpg" />
                                <span className="minOffer_number" data-reactid="189">
                                    {this.props.biens.Chambres}
                                </span>
                            </div>
                            <div className="minOffer_symbol" title="Nombre de salles d'eau" data-reactid="190">
                                <img src="https://image.freepik.com/icones-gratuites/baignoire-avec-douche-ouverte_318-63387.jpg" />
                                <span className="minOffer_number" data-reactid="193">
                                    {this.props.biens.Sallesdebain}
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </span>                                    
        )
    }
}

