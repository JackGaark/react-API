import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.SearchFunction(event.target.value);
  }

  render() {
    console.log("SEARCH_BAR DID RENDER" )
    return (
      <input
        type='text'
        className='form-control form-search'
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
