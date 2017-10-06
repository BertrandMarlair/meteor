import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {
    setVar(){
        Session.set('Meteor.loginButtons.dropdownVisible', true);    
    }
    
    render(){
        return(
            <ReactCSSTransitionGroup
                        component="div"
                        className="resolutions"
                        transitionName="route"
                        transitionEnterTimeout={300}
                        transitionAppearTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionAppear={true}>
                <div className="about">
                    <h1> About us </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel turpis semper, cursus nibh id, fringilla risus. Nunc dapibus dignissim bibendum. Aenean mi neque, ultricies eu dolor non, pellentesque fringilla arcu. Curabitur fringilla molestie velit, eu aliquam enim tristique eget. Maecenas et lobortis massa. Pellentesque pellentesque sodales justo nec consequat. Nam sodales tempor sem eget luctus. Donec at nunc ut turpis gravida auctor. Praesent scelerisque nunc feugiat, vehicula enim nec, egestas magna. Sed suscipit diam at risus egestas, ut venenatis nulla porttitor. Fusce aliquam ac nunc ac tristique. Maecenas eget ante turpis.
                        <br/><br/>Aenean orci ante, imperdiet nec mauris at, ullamcorper hendrerit libero. Praesent auctor risus ante, quis imperdiet lorem imperdiet in. Ut tellus urna, cursus a mauris non, consectetur vehicula mauris. Fusce tempor tincidunt pharetra. Nullam eu justo vitae sem dapibus gravida. Donec suscipit turpis non elit hendrerit, vel luctus ante euismod. Vivamus libero lorem, vulputate sit amet imperdiet a, placerat non ex. Donec rutrum ullamcorper sagittis. Duis euismod bibendum libero sed ornare. Maecenas id odio ipsum.
                    </p>
                    <button onClick={this.setVar}>Sign Up</button>
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}