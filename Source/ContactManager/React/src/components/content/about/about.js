import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class About extends Component {
    render() {
        return (
            <div>
                This application was developed for COP 4331.
            </div>
        );
    }
}

export default hot(module)(About);