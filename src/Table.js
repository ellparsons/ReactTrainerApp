import React, { Component } from 'react';

class Table extends Component{
    constructor(){
        super();
        this.state = {
            time1: "9-5",
            time2: "12-4",
            time3: "9-1"
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
            </div>    
        );
    }
}


export default Table;