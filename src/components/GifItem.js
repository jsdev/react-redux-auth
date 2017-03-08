import React from 'react'

const GifItem = ({gif, onGifSelect}) => (
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
        <img alt="some text" src={gif.images.downsized.url} />
    </div>
);

export default GifItem
