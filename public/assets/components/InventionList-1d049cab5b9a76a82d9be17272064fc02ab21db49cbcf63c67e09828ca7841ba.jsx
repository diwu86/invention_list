import React from 'react';
import ReactDOM from 'react-dom';
import Invention from "./Invention"

export default class InventionList extends React.Component {
  render(){
    let inventions = this.props.inventions.map(invention => <Invention key={invention.id} {...invention} />)
    return (
        <div>
         <h4>Check out these inventions</h4>
         <ul className="collapsible" data-collapsible="accordion">
           {inventions}
         </ul>
        </div>
    )
  }
}
