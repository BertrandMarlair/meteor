import React, {Component} from 'react';


export default class SearchContainer extends Component {

    searchDropdownWrapper(id){
        let wrapper = document.getElementsByClassName('dropdown_elWrapper')[id]
        wrapper.classList.toggle('down')
    }

    categorie(){
        for(var i=0; i<this.props.wrapper.select.length;i++){
            let label = document.getElementById("search"+this.props.wrapper.title+"label["+i+"]")
            document.getElementById("search"+this.props.wrapper.title+"["+i+"]").addEventListener('click', ()=>{
                label.classList.toggle('dropdown_label-current')
            });
        }
    }

    componentDidMount(){
       this.categorie();
    }

    render(){
        var listSelect = this.props.wrapper.select.map(function(data, i){
            return (
                <div className="dropdown_el" key={i}>
                    <div>
                        <label htmlFor="searchcategories[0]" id={"search"+this.props.wrapper.title+"label["+i+"]"} alt={this.props.wrapper.id} data={i} className="dropdown_label">
                            {data}
                        </label>
                        <input type="checkbox" name="categories[0]" value="false" id={"search"+this.props.wrapper.title+"["+i+"]"} className="dropdown_checkbox"/>
                    </div>
                </div>
            )
        }.bind(this))
                        
        return(
            <div className="search_dropdownsWrapper">
                <div className="dropdown">
                    <input type="checkbox" className="dropdown_checkbox" id="dropdown_categories" value="on" alt={this.props.wrapper.id} onClick={this.searchDropdownWrapper.bind(this, this.props.wrapper.id)}/>
                    <label className="dropdown_head">
                        <span>{this.props.wrapper.title}</span>
                        <i className="dropdown_arrow"></i>
                    </label>
                    <div className="dropdown_elWrapper">
                        {listSelect}
                    </div>
                </div>
            </div> 
        )
    }
}
