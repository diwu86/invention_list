export default class InventionBox extends React.Component {

  postInvention(event){
    event.preventDefault();
    let invention = {id: 7, title: this.refs.inventionTitle.value,
                     description: this.refs.inventionDescription.value,
                     user_name: this.refs.inventionUserName.value,
                     email: this.refs.inventionEmail.value,
                     bits: this.refs.inventionBits.value,
                     other_materials: this.refs.inventionOtherMaterials.value};
    this.props.postInvention(invention);
    this.refs.inventionTitle.value = '';
    this.refs.inventionDescription.value = '';
    this.refs.inventionUserName.value = '';
    this.refs.inventionEmail.value = '';
    this.refs.inventionBits.value = '';
    this.refs.inventionOtherMaterials.value = '';
  }

  render() {
    return (
      <div className="row">
         <form onSubmit={this.postInvention.bind(this)}>
           <div className="row">
             <div className="input-field col s12">
               <input refs="inventionTitle" id="title" type="text"  />
               <label for="title">Title</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input refs="inventionDesscription" id="description" type="text" className="validate" />
               <label for="description">Description</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s6">
               <input refs="inventionUserName" id="user_name" type="text" className="validate" />
               <label for="user_name">User Name</label>
             </div>
             <div className="input-field col s6">
               <input refs="inventionEmail" id="email" type="email" className="validate" />
               <label for="email">Email</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input refs="inventionBits" id="bits" type="text" className="validate" />
               <label for="bits">Bits used</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input refs="inventionOtherMaterials" id="other_material" type="text" className="validate" />
               <label for="other_material">Other Material</label>
             </div>
           </div>
           <button type="submit" className="btn right">Submit</button>
         </form>
       </div>
    )
  }
}
