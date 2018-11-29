import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Don't call render if props.id did not change
    return nextProps.id !== this.props.id;
  }

  render() {
    console.log("GIF RENDER" + this.props.id);

    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
