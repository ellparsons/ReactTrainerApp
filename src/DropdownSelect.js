import React, { Component } from 'react';

class Dropdown extends Component{
    render(){
        return(
            <form>
                <span>
                    <select id="trainers">
                        {this.props.trainersprop.map((tp) => ( 
                        <option value={tp.personName.toString()}>{tp.personName.toString()}</option>
                        ))}
                    </select>  
                </span>
            </form>
        );
    }
}
export default Dropdown;