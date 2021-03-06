import React from 'react';
import ReactDOM from 'react-dom';

import InventionBox from './components/InventionBox';
import InventionList from './components/InventionList';

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
              this.refs.invBox.clearInput();
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
            <InventionBox postInvention={this.addInvention.bind(this)} ref="invBox"/>
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
};

$(documentReady);
