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
                ],
                active: 0
        }
    }
    componentDidMount() {
        fetch(`/file`)
            .then(res => res.json())
            .then(result => console.log(result));
    }
    selectItem = (index) => {
        this.setState({
            active: index
        })
    }
    render() {
        return (
            <BrowserRouter>
                <div className="frame">
                    <Sidebar selectItem={this.selectItem} active={this.state.active} items={this.state.items}/>
                    <MainPage item={this.state.items[this.state.active]}/>
                </div>
            </BrowserRouter>
        );
    }
}
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
