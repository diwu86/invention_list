import InventionBox from './components/InventionBox';

class Main extends React.Component {

    render() {
        return (
          <div className="container">
            <InventionBox />
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
