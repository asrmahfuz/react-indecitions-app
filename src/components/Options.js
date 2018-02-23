import React from 'react';
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
                <button
                    className="button button--link"
                    onClick={props.handleDeleteAllOptions}
                >
                    Remove All
            </button>
        </div>        
        {props.options.length === 0 && <p className="message">Please Add Some Options to Get Started!</p>}
        {props.options.map((option, index) => (
            <Option
                count={index}
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
);

export default Options;