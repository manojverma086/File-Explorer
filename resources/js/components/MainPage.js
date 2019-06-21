import React, { Component } from 'react';
import Header from './Header';
import Document from './Document';

export default class MainPage extends Component {
    render() {
        return (
                <div className="main-page-box">
                    <Header name={this.props.item.name}/>
                    <Document item={this.props.item}/>
                </div>
        );
    }
}
