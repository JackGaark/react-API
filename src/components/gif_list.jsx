import React, { Component } from 'react';

import Gif from './gif.jsx';

const  GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
 );
};

export default GifList;
