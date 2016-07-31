import React, { Component } from 'react';

export default class App extends Component {
    renderBody() {
        return <div>Hello, world!</div>
    }

    render() {
        return (
            <div>
                <h1>Munchkin</h1>
                {this.renderBody()}
            </div>
        )
    }
};
