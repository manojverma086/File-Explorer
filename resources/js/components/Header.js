import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        return (
            <div class="header">
                <div className="name">
                    {this.props.name}
                </div>
            </div>
        )
    }
}