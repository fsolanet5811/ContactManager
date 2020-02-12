import React, { Component } from 'react';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            context: props.context
        }
    }

    render() {
        return (
            <div>
                Side Bar!
            </div>
        )
    }
}

export default SideBar;