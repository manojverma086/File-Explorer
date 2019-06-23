import React, { Component } from 'react';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        let ext = this.props.item.url ? this.props.item.url.split('.').pop() : '';
        return (
            <div>
                <div className="document-box">
                    <div className="mask">
                    </div>
                </div>
                <div className="content">
                    {ext.toLowerCase() == 'pdf' && 
                    <object data={this.props.item.url} className="content-data"></object> ||
                    <img src={this.props.item.url} className="content-data"/>}

                </div>
            </div>
        )
    }
}