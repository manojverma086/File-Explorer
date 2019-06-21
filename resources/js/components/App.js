import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Sidebar from './Sidebar';
import MainPage from './MainPage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
                items: [
                    {name: "Document1#", author: "Manoj v"},
                    {name: "Document2#", author: "Manoj v"},
                    {name: "Document3#", author: "Manoj v"}
                ]
        }
    }
    componentDidMount() {
        fetch(`/file`)
            .then(res => res.json())
            .then(result => console.log(result));
    }
    render() {
        return (
            <BrowserRouter>
                <div className="frame">
                    <Sidebar items={this.state.items}/>
                    <MainPage item={this.state.items[0]}/>
                </div>
            </BrowserRouter>
        );
    }
}
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
