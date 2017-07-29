import React from 'react';
import ReactDOM from 'react-dom';
import OtherMaterial from './otherMaterial';
import Bit from './bit';

export default class InventionBox extends React.Component {

  postInvention(event){
    event.preventDefault();
    let invention = {title: this.refs.inventionTitle.value,
                     description: this.refs.inventionDescription.value,
                     user_name: this.refs.inventionUserName.value,
                     email: this.refs.inventionEmail.value,
                     bits: this.refs.inventionBits.refs.bits.props.tags,
                     other_materials: this.refs.inventionOtherMaterials.refs.otherMaterialTags.props.tags
                     };
    this.props.postInvention(invention);
    this.refs.inventionTitle.value = '';
    this.refs.inventionDescription.value = '';
    this.refs.inventionUserName.value = '';
    this.refs.inventionEmail.value = '';
    this.refs.inventionBits.clearTags();
    this.refs.inventionOtherMaterials.clearTags();
  }

  render() {
    return (
      <div className="row">
         <form onSubmit={this.postInvention.bind(this)}>
           <div className="row">
             <div className="input-field col s4">
               <input ref="inventionTitle" name="title" type="text"  />
               <label for="title">Title</label>
             </div>
             <div className="input-field col s4">
               <input ref="inventionUserName" name="user_name" type="text" className="validate" />
               <label for="user_name">User Name</label>
             </div>
             <div className="input-field col s4">
               <input ref="inventionEmail" name="email" type="email" className="validate" />
               <label for="email">Email</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input ref="inventionDescription" name="description" type="text" className="validate" />
               <label for="description">Description</label>
             </div>
           </div>
           <div className='row'>
              <label for="description" className="col s6">Bits Used</label>
              <label for="description" className="col s6">Other Materials Used</label>
           </div>
           <div className="row">
             <Bit ref="inventionBits"/>
             <OtherMaterial  ref="inventionOtherMaterials"/>
           </div>
           <button type="submit" className="btn right">Submit</button>
         </form>
       </div>
    )
  }
}
