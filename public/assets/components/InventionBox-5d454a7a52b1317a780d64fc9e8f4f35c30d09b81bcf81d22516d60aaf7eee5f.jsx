import React from 'react';
import ReactDOM from 'react-dom';
import OtherMaterial from './otherMaterial';
import Bit from './bit';
import FileUploader from './fileUploader';

export default class InventionBox extends React.Component {

  postInvention(event){
    event.preventDefault();
    let invention = {title: this.refs.inventionTitle.value,
                     description: this.refs.inventionDescription.value,
                     user_name: this.refs.inventionUserName.value,
                     email: this.refs.inventionEmail.value,
                     bits: this.refs.inventionBits.refs.bits.props.tags,
                     other_materials: this.refs.inventionOtherMaterials.refs.otherMaterialTags.props.tags,
                     image: this.refs.inventionImage.state.uploadedFileThumbUrl
                     };
    this.props.postInvention(invention);
    this.refs.inventionTitle.value = '';
    this.refs.inventionDescription.value = '';
    this.refs.inventionUserName.value = '';
    this.refs.inventionEmail.value = '';
    this.refs.inventionBits.clearTags();
    this.refs.inventionOtherMaterials.clearTags();
    this.refs.inventionImage.clearPic();
  }

  render() {
    return (
      <div className="row">
         <form onSubmit={this.postInvention.bind(this)}>
           <div className="row">
             <div className="input-field col s4">
               <input ref="inventionTitle" name="title" type="text" className="validate" required="required" aria-required="true"/>
               <label for="title" data-error="Title is required" >Title</label>
             </div>
             <div className="input-field col s4">
               <input ref="inventionUserName" name="user_name" type="text" className="validate" />
               <label for="user_name">User Name</label>
             </div>
             <div className="input-field col s4">
               <input ref="inventionEmail" name="email" type="email" className="validate"  />
               <label for="email" data-error="Invalid email format" >Email</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <textarea ref="inventionDescription" name="description" type="text" className="validate" required="required" aria-required="true"/>
               <label for="description" data-error="Description is required">Description</label>
             </div>
           </div>
           <div className="row">
             <Bit ref="inventionBits" />
             <OtherMaterial  ref="inventionOtherMaterials"/>
           </div>
           <FileUploader ref="inventionImage" state={this.state}/>
           <button type="submit" className="btn right">Submit</button>
         </form>
       </div>
    )
  }
}
