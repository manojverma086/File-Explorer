import React, { Component } from 'react';
import Tab from './Tab';
export default class Tabs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let tabs = [];
        for(let i = 0; i < this.props.items.length; i++) {
            tabs.push(<Tab key={i} selectItem={this.props.selectItem} index={i} active={this.props.active} item={this.props.items[i]}/>)
        }
        return (
                <div className="tabs">
                    {tabs}
                </div>
        );
    }
}
