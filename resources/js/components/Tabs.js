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
        console.log(index);
        this.setState({
            active: index
        })
    }
    render() {
        let tabs = [];
        console.log("it will render again");
        for(let i = 0; i < this.props.items.length; i++) {
            tabs.push(<Tab key={i} parentMethod={this.click.bind(i)} index={i} active={this.state.active} item={this.props.items[i]}/>)
        }
        return (
                <div className="tabs">
                    {tabs}
                </div>
        );
    }
}
