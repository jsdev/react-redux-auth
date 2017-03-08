import React from 'react'

const GifsTemp = ({gifs}) => {
    const gifItems = gifs.map(gif => <li key={gif.id}><img src={gif.url} /></li>);
    return <ul className="gif-list">{gifItems}</ul>
};

export default GifsTemp