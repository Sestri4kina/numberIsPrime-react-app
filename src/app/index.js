import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputForm from './input-form'

class App extends React.Component {
    render(){
        return(
            <div>
                <h1>Check if a number is prime</h1>
                <InputForm />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));