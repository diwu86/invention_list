import Invention from "./Invention"

export default class InventionList extends React.Component {
  render(){
    let inventions = this.props.inventions.map(invention => <Invention key={invention.id} {...invention} />)
    return (
      <div className="collection">
        {inventions}
      </div>
    )
  }
}
