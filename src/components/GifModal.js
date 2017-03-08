import React from 'react'
import Modal from 'react-modal'

const GifModal = ({modalIsOpen, onRequestClose, selectedGif}) => {
    if (!selectedGif) return <div></div>;
    const closeRequest = () => onRequestClose();
    return (
      <Modal
        isOpen={ modalIsOpen }
onRequestClose={ closeRequest }>
        <div className="gif-modal">
            <img alt='unknown' src={ selectedGif.images.original.url } />
            <p><strong>Source:</strong> <a href={ selectedGif.source }>{ selectedGif.source }</a></p>
            <p><strong>Rating:</strong> { selectedGif.rating }</p>
            <button onClick={closeRequest}>close</button>
        </div>
      </Modal>
    );
};

export default GifModal
