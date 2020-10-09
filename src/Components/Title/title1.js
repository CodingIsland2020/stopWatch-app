import React, { Component } from 'react';

import './Title.css'

class Title extends Component {

    constructor(props){
        super()
        this.state = {
            title: 'my first course',
            isInput: false
        }
    }

    inputHandler() {
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event) {
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }

    keyPressHandler(event) {
        if (event.key === 'Enter') {
            this.setState({
                ...this.state,
                isInput: false
            })
        }
    }

    blurHandler(event) {
        this.setState({
            ...this.state,
            isInput: false
        })
    }

    render() {

        let output = null

        if(this.state.isInput){
            output = (
                <div className="title">
                    <input
                    className="form-control"
                    onChange={ event => this.inputChange(event) }
                    onKeyPress= { event => this.keyPressHandler(event) }
                    onBlur = { event => this.blurHandler(event) }
                    type="text"
                    value={ this.state.title }
                    />
                </div>
            )
        }else {
            output = (
                <div className="title d-flex">
                    <h1 className="display-4">{ this.state.title }</h1>
                    <span onClick={ () => this.inputHandler() } className="edit-icon ml-auto">
                        <i className="fas fa-pencil-alt"></i>
                    </span>
                </div>
            )
        }

        return (
            <div>
                {output}
            </div>
        );
    }
}

export default Title;