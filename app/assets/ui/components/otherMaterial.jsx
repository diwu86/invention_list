import React from 'react';
import ReactDOM from 'react-dom';
import { WithContext as ReactTags } from 'react-tag-input';

export default class OtherMaterial extends React.Component {
  constructor(props) {
    super(props);
    let _other_matertials = ["bargraph","bend-sensor","branch","bright-led"];
    // $.ajax("/other_materials")
    // .success( data => _other_matertials = data.map(e => {
    //   return e.name
    // }))
    // .error( error => console.log(error));

    this.state = {
        tags: [],
        suggestions: _other_matertials
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
    // Do not add duplicates
    if (!tags.map(t => { return t.text}).includes(tag)){
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
    $.ajax("/other_materials")
    .success(data => this.setState({suggestions: data}))
    .error(error => console.log(error));
  }

  render(){
    const { tags, suggestions } = this.state;
    const Keys = { COMMA : 188, SPACE: 32};
    let delimiters = [Keys.COMMA, Keys.SPACE];
    let placeholder = "Add other material";
      let minQueryLength = 1;
    return (
        <div className="input-field col s6">
          <ReactTags tags={tags}
            ref="otherMaterialTags"
            suggestions={suggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            delimiters={delimiters}
            placeholder={placeholder}
            minQueryLength={minQueryLength} />
        </div>
    )
  }
}
