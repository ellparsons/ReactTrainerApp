import React, { Component } from 'react';
import Header from './Header.js';
import Table from './Table.js';
import TableTitle from './TableTitle.js';
import Backbutton from './Backbutton.js';
import NavBar from './NavBar.js';
import Submit from  './Submit.js';
import Input from './Input.js';
import Dropdown from './DropdownSelect.js';
import './Trainer.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      header: "Trainer View",
    
      trainers : [ {
        personID: "1",
        personName: "Joe Bloggs",
        Time: "9-5",
      }, {
      personID: "2",
        personName: "Bob Smith",
        Time: "11-3",
    }, {
        personID: "3",
        personName: "Bob Jones",
        Time: "12-6"
    },]
     }
  }
  render(){
    return (
      <div class="contentBody">
        <Header headerProp={this.state.header} />
        <NavBar/>
          <div id="border">
            <TableTitle/>
            <div>
              <Table trainersprop={this.state.trainers}/>
            </div>
          </div>  
      <Backbutton/>
      </div>
      );
    }
}

export default App;
