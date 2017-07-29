export default class InventionDetail extends React.Component {
  render() {
    let _invention;
    $.ajax("/inventions/3")
    .success( data => _invention = data)
    .error( error => console.log(error));
    return (
      // TODO
      <p>detail</p>
      // <li>
      //   <div className="collapsible-header">{_invention.title}</div>
      //   <div className="collapsible-body">
      //   <ul className="collection">
      //     <li className="collection-item">Descritpion: {_invention.description}</li>
      //     <li className="collection-item">Submitted by: {_invention.user_name}</li>
      //     <li className="collection-item">Bits used: {_invention.description}</li>
      //     </ul>
      //   </div>
      // </li>
    );
  }
}
