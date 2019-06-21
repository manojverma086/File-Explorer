import React, { Component } from 'react';
import Tabs from './Tabs';
import UploadIcon from './Icons';
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="sidebar">
                </div>
                    <div className="label">
                    Files
                </div>
                <div className="upload">
                    <div className="text">Upload</div>
                    <div className="icon">
                        <UploadIcon/>
                        </div>
                        <div className="rect">
                            </div>    
                    </div>
                <div className="rect-3"></div>
                    <div className="divider"></div>
                <Tabs items={this.props.items}/>
            </div>
        );
    }
}
