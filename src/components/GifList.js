import React from 'react'
import GifItem from './GifItem'

const GifList = ({gifs, onGifSelect}) => {
    const itemize = image => <GifItem key={image.id} gif={image} onGifSelect={onGifSelect} />;
    const gifItems = gifs.map(itemize);

    return (
      <div className="gif-list">{gifItems}</div>
    );
};

export default GifList
