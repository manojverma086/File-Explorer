import React, { Component } from 'react';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <div className="document-box">
                    <div className="mask">
                    </div>
                </div>
                <div className="content">
                    <img src={this.props.item.url} className="content-img"/>
                </div>
            </div>
        )
    }
}