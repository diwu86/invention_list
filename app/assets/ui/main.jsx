import React from 'react';
import ReactDOM from 'react-dom';

import InventionBox from './components/InventionBox';
import InventionList from './components/InventionList';
import InventionDetail from './components/InventionDetail';

class Main extends React.Component {
    constructor(props){
      super(props);
      this.state = { inventionList: []}
    }
    formattedInventions(inventionList){
      let formattedList = inventionList.map( invention => {
        invention.formattedBits = invention.bits.map ( bit => {
          return bit.name;
        });
        return invention;
      });
      return {
        inventionList: formattedList
      };
    }
    addInvention(invention){
      $.post("/inventions", {body: invention})
      .success( data => {
          if(data.errors){
              alert(data.errors);
              console.log(data.errors);
          }else{
              let newInventionList = this.state.inventionList;
              newInventionList.unshift(data);
              this.setState({ inventionList: newInventionList});
          }

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
  $('.collapsible').collapsible();
  let reactInventionDetail = document.getElementById('InventionDetail');
  if(reactInventionDetail){
    ReactDOM.render(
        <InventionDetail />,
        reactInventionDetail
    );
  }
};

$(documentReady);
