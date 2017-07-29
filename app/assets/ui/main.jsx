import InventionBox from './components/InventionBox';
import InventionList from './components/InventionList';

class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = { inventionList: []}
    }
    addInvention(invention){
      $.post("/inventions", {body: invention})
      .success( savedInvention => {
        let newInventionList = this.state.inventionList;
        newInventionList.unshift(savedInvention);
        this.setState({ inventionList: newInventionList});
      })
    }
    componentDidMount(){
      $.ajax("/inventions")
      .success(data => this.setState({inventionList: data}))
      .error(error => console.log(error));
    }
    render() {
        return (
          <div className="container">
            <InventionBox postInvention={this.addInvention.bind(this)}/>
            <InventionList inventions={this.state.inventionList}/>
          </div>
        );
    }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if(reactNode){
    ReactDOM.render(
        <Main />,
        reactNode
    );
  }

};

$(documentReady);
