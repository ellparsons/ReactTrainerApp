import React, { Component } from 'react';

class NavBar extends Component{
    render(){
        return(
            <nav class="navBar">
                <a class="navbutton" href="homepage.html">Home</a>
                <a class="navbutton" href="trainer.html">Trainer</a>
            </nav> 
        );
    }
}
export default NavBar;