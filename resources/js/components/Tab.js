import React, { Component } from 'react';

export default class Tab extends Component {
    constructor(props) {
    }
    render() {
        return (
                <div className="tab"> 
                    <div className="ui-mini-badge">
                    </div>
                    <div className="document-name">{this.props.item.name}</div>
                    <div className="addendnm-btn"></div>
                    <div className="name">{this.props.item.author}</div>
                    {this.props.active === this.props.index && <div className="tab-active">
                        <div className="rect"></div>
                    </div>}
                    {this.props.active != this.props.index &&
                    <div className="rect-inactive"></div>}
                </div>
        );
    }
}
