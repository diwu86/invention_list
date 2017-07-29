import OtherMaterial from './otherMaterial';

export default class InventionBox extends React.Component {

  postInvention(event){
    event.preventDefault();
    let invention = {title: this.refs.inventionTitle.value,
                     description: this.refs.inventionDescription.value,
                     user_name: this.refs.inventionUserName.value,
                     email: this.refs.inventionEmail.value,
                     other_materials: this.refs.inventionOtherMaterials.refs.otherMaterialTags.props.tags
                     };
    this.props.postInvention(invention);
    this.refs.inventionTitle.value = '';
    this.refs.inventionDescription.value = '';
    this.refs.inventionUserName.value = '';
    this.refs.inventionEmail.value = '';
    this.refs.inventionBits.value = '';
    this.refs.inventionOtherMaterials.clearTags();
  }

  render() {
    return (
      <div className="row">
         <form onSubmit={this.postInvention.bind(this)}>
           <div className="row">
             <div className="input-field col s12">
               <input ref="inventionTitle" name="title" type="text"  />
               <label for="title">Title</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input ref="inventionDescription" name="description" type="text" className="validate" />
               <label for="description">Description</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s6">
               <input ref="inventionUserName" name="user_name" type="text" className="validate" />
               <label for="user_name">User Name</label>
             </div>
             <div className="input-field col s6">
               <input ref="inventionEmail" name="email" type="email" className="validate" />
               <label for="email">Email</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input ref="inventionBits" name="bits" type="text" className="validate" />
               <label for="bits">Bits used</label>
             </div>
           </div>
           <OtherMaterial ref="inventionOtherMaterials" />
           <button type="submit" className="btn right">Submit</button>
         </form>
       </div>
    )
  }
}
