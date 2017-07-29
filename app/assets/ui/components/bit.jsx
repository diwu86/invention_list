import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

export default class Bit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tags: [],
        bitsSuggestions: []
    };
    
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  clearTags(){
    this.setState({tags: []})
  }

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  }

  handleAddition(tag) {
    tag = tag.replace("_","-")
    let tags = this.state.tags;
    // bit has to be from the suggestted bits and should not include duplicates
    if (this.state.bitsSuggestions.includes(tag) && !tags.map(t => { return t.text}).includes(tag)){
      tags.push({
          id: tags.length + 1,
          text: tag
      });
    }
    this.setState({tags: tags});
  }

  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags;

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: tags });
  }

  componentDidMount(){
    $.ajax("/bits")
    .success(data => this.setState({bitsSuggestions: data}))
    .error(error => console.log(error));
  }

  render(){
    const { tags, bitsSuggestions } = this.state;
    const Keys = { COMMA : 188, SPACE: 32};
    let _delimiters = [Keys.COMMA, Keys.SPACE];
    let placeholder = "Add another bit";
    let autocomplete = true;
    return (

      <div className="input-field col s6">
          <ReactTags tags={tags} ref="bits"
            suggestions={bitsSuggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            delimiters={_delimiters}
            autocomplete={autocomplete}
            placeholder={placeholder} />
      </div>
    )
  }
}
