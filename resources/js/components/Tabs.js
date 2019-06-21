import React, { Component } from 'react';
import Tab from './Tab';
export default class Tabs extends Component {
    constructor(props) {
        this.state = {
            items: [],
            active: 0
        }
    }
    componentDidMount() {
        this.setState({
            items: this.props.items
        })
    }
    click = (index) => {
        this.setState({
            active: index
        })
    }
    render() {
        let tabs = [];
        for(let i = 0; i < this.state.items.length; i++) {
            tabs.push(<Tab onClick={this.click.bind(i)} index={i} active={this.state.active} item={this.state.items[i]}/>)
        }
        return (
                <div className="tabs">
                    {tabs}
                </div>
        );
    }
}
