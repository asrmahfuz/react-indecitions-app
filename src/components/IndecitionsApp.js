import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecitionsApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            options: props.options,
            showSelectedOption: undefined
        };
    }

    handleDeleteAllOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        let option = Math.floor(Math.random() * this.state.options.length);
        option = this.state.options[option];
        this.setState(() => ({
            showSelectedOption: option
        }));
    }

    hideOptionModal = () => {
        this.setState(() => ({
            showSelectedOption: undefined
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return "Enter a valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option is already exists!";
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    componentDidMount() {
        const options = JSON.parse(localStorage.getItem('options'));
        this.setState(() => ({options}));
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        const title = "Indecition";
        const subtitle = "Put your life in the hands of a computer.";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteAllOptions={this.handleDeleteAllOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    showSelectedOption={this.state.showSelectedOption}
                    hideOptionModal={this.hideOptionModal}
                />

            </div>
        );
    }
}

IndecitionsApp.defaultProps = {
    options: []
}

export default IndecitionsApp;