export default class Invention extends React.Component {
  render() {
    return (
      <a href={"/inventions/" +this.props.id} className="collection-item">{this.props.title}</a>
    );
  }
}
