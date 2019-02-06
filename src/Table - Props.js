import React, { Component } from 'react';

class Table extends Component{
    constructor(){
        super();
        this.state = {
            time1: "9-5",
            time2: "12-4",
            time3: "9-1",

            times : [ 
                "9-5", 
                "12-4",
                "9-1"]
        }
    }

    render() {
        return(
            <div>
                <table class="tableVisual">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {this.props.trainersprop.map((tp) => (
                            <tr>
                                <td>{tp.personID.toString()}</td>
                                <td>{tp.personName.toString()}</td>
                                <td>{tp.Time.toString()}</td>
                    
                            </tr>
                        ))}
                    
                    </tbody>
                </table>
                <span>
                    <select id="trainers">
                        {this.props.trainersprop.map((tp) => ( 
                            <option value={tp.toString()}>{tp.toString()}</option>
                        ))}
                    </select>  
                    <input type="text" placeholder="Enter time here"></input>
                </span>
                <input type="button" onClick={this.updateTableInfo.bind(this)} value="Submit"/>
            </div>    
        );
    }
    
    updateTableInfo(){
    }
}


export default Table;