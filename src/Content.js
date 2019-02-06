import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                <p>{this.props.contentProp}</p>
            </div>
        );
    }
}
export default Content;
