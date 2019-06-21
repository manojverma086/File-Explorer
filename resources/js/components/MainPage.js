import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
                <div className="main-page-box">
                    <Header name={(this.props.item||{}).name}/>
                </div>
                <Content item={this.props.item || {}}/>
                </div>
        );
    }
}
