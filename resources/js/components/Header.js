import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="header">
                <div className="header-name">
                    {this.props.name}
                </div>
            </div>
                
        )
    }
}