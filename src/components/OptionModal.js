import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.showSelectedOption}
        contentLabel="Selected Option Popup"
        onRequestClose={props.hideOptionModal}
    >
        <h1>Selected Option</h1>
        {props.showSelectedOption && (<h2>{props.showSelectedOption}</h2>)}
        <button onClick={props.hideOptionModal}>Okay!</button>
    </Modal>
);

export default OptionModal;