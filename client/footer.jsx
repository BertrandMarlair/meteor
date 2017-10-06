import React, {Component} from 'react';
import ReactDom from 'react-dom';
import MediaQuery from 'react-responsive';

export default class Footer extends Component {
    render(){
        return (
            <div className="footers">
                <MediaQuery query='(min-width: 835px)'>
                    <div className="footer-grids">
                        <div className="footer one">
                            <h3>More About Company</h3>
                            <p> Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, 
                            sed quia consequuntur magni dolores eos qui 
                            ratione voluptatem sequi nesciunt.</p>
                            <p className="adam">- Patrick Victoria, CEO</p>
                            <div className="clear"></div>
                        </div>
                        <div className="footer two">
                            <h3>Keep Connected</h3>
                            <ul>
                                <li><a className="fb" href="#"><i></i>Like us on Facebook</a></li>
                                <li><a className="fb1" href="#"><i></i>Follow us on Twitter</a></li>
                                <li><a className="fb2" href="#"><i></i>Add us on Google Plus</a></li>
                                <li><a className="fb3" href="#"><i></i>Follow us on Dribbble</a></li>
                                <li><a className="fb4" href="#"><i></i>Follow us on Pinterest</a></li>
                            </ul>
                        </div>
                        <div className="footer three">
                            <h3>Contact Information</h3>
                            <ul>
                                <li>The company name <span>Lorem ipsum dolor,</span>Glasglow Dr 40 Fe 72.  </li>
                                <li>1234567890  </li>
                                <li><a href="mailto:info@example.com">contact@example.com</a> </li>
                            </ul>
                        </div>
                        <div className="clear"></div>
                    </div>
                </MediaQuery>
                <MediaQuery query='(max-width: 835px)'>
                    <div className="footer-grids">
                        <div className="footer two">
                            <h3>Keep Connected</h3>
                            <ul>
                                <li><a className="fb" href="#"><i></i></a></li>
                                <li><a className="fb1" href="#"><i></i></a></li>
                                <li><a className="fb2" href="#"><i></i></a></li>
                                <li><a className="fb3" href="#"><i></i></a></li>
                                <li><a className="fb4" href="#"><i></i></a></li>
                            </ul>
                        </div>
                        <div className="footer three">
                            <h3>Contact Information</h3>
                            <ul>
                                <li>&nbsp;</li>
                                <li>&nbsp;</li>
                                <li><a href="mailto:info@example.com">&nbsp;</a></li>
                            </ul>
                        </div>
                        <div className="footer one">
                            <h3>More About Company</h3>
                            <a>&nbsp;</a>
                        </div>
                        <div className="clear"></div>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}