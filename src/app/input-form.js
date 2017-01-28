import React, { Component } from 'react';
//require('./css/input-form.css');

export default class InputForm extends React.Component {
    render(){
        return(
            <form id="add-number" onSubmit={this.handleSubmit}>
                <input type="number" placeholder="Enter a number" required ref="newNumber"/>
                <input type="submit" value="Check" />
            </form>
        );
    }
    //custom functions
    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newNumber.value);
    }
};


