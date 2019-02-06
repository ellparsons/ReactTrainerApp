import React, { Component } from 'react';

class Submit extends Component{
    render(){
        return(
            <input type="button" onClick={this.updateTable} value="Submit"/>
        );
    }
}


export default Submit;