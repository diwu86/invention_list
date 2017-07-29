import React from 'react';
import ReactDOM from 'react-dom';
export default class Invention extends React.Component {
  render() {
    return (

       <a href={"/inventions/" +this.props.id} className="collection-item">{this.props.title}</a>
      // <li>
      //   <div className="collapsible-header">{this.props.title}</div>
      //   <div className="collapsible-body">
      //   <ul class="collection">
      //     <li class="collection-item">Descritpion: {this.props.description}</li>
      //     <li class="collection-item">Submitted by: {this.props.user_name}</li>
      //     <li class="collection-item">Bits used: {this.props.formattedBits}</li>
      //     </ul>
      //   </div>
      // </li>
    );
  }
}
