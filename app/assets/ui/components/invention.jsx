import React from 'react';
import ReactDOM from 'react-dom';
export default class Invention extends React.Component {
  render() {
    return (
       <li>
         <div className="collapsible-header">{this.props.title}</div>
         <div className="collapsible-body">
         <ul className="col s4 collection">
             <li className="collection-item">Descritpion: {this.props.description}</li>
             <li className="collection-item">Submitted by: {this.props.user_name}</li>
             <li className="collection-item">Bits used: {this.props.bits}</li>
             <li className="collection-item">Other materials used: {this.props.other_materials}</li>
         </ul>
         <img className="col s4" src={this.props.image} />
         </div>
       </li>
    );
  }
}
