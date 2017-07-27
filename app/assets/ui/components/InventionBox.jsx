export default class InventionBox extends React.Component {
  render() {
    return (
      <div className="row">
         <form className="col s12">
           <div className="row">
             <div className="input-field col s12">
               <input  id="title" type="text" className="validate" />
               <label for="title">Title</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input id="description" type="text" className="validate" />
               <label for="description">Description</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s6">
               <input id="user_name" type="text" className="validate" />
               <label for="user_name">User Name</label>
             </div>
             <div className="input-field col s6">
               <input id="email" type="email" className="validate" />
               <label for="email">Email</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input id="bits" type="text" className="validate" />
               <label for="bits">Bits used</label>
             </div>
           </div>
           <div className="row">
             <div className="input-field col s12">
               <input id="other_material" type="text" className="validate" />
               <label for="other_material">Other Material</label>
             </div>
           </div>
           <button type="submit" className="btn right">Submit</button>
         </form>
       </div>
    )
  }
}
