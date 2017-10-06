import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class test extends TrackerReact(React.Component) {
    
    render () {
        return (
            <div>
                <h1>My resolutions</h1>
            </div>
        )
    }
}