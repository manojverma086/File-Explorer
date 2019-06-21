import React, { Component } from 'react';
import Tab from './Tab';
export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }
    click = (index) => {
        this.setState({
            active: index
        })
    }
    render() {
        let tabs = [];
        for(let i = 0; i < this.props.items.length; i++) {
            tabs.push(<Tab onClick={this.click.bind(i)} index={i} active={this.state.active} item={this.props.items[i]}/>)
        }
        return (
                <div className="tabs">
                    {tabs}
                </div>
        );
    }
}
