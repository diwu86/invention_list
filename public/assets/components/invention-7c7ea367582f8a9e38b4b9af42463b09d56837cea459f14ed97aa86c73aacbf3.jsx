import React from 'react';
import ReactDOM from 'react-dom';
export default class Invention extends React.Component {
  render() {
    return (
       <li>
         <div className="collapsible-header">{this.props.title}</div>
         <div className="collapsible-body row">
             <div className="col s8">
                 <li >Descritpion: {this.props.description}</li>
                 <li >Submitted by: {this.props.user_name}</li>
                 <li >Bits used: {this.props.bits}</li>
                 <li >Other materials used: {this.props.other_materials}</li>
             </div>
             <div className="col s4 ">
                 <img  src={this.props.image} />
             </div>
         </div>
       </li>
    );
  }
}
