import axios, {post} from 'axios';
import React, { Component } from 'react';
import Tabs from './Tabs';
import UploadIcon from './Icons';
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }
    change = (e) => {   
        this.setState({file:e.target.files[0]})
    }
    submit = () => {
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        });
    }

    fileUpload(file){
        const url = '/file';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
    }
    render() {
        return (
            <div>
                <div className="sidebar">
                </div>
                    <div className="label">
                    Files
                </div>
               
                    <form onSubmit={this.submit}>
                    <div className="upload">
                        <input type="file" name="file" onChange={this.change} className="custom-file-input"></input>
                        <button type="submit" className="custom-btn icon">
                            <UploadIcon/>
                        </button>
                        <div className="rect">
                        </div>    
                    </div>
                    </form>
                    
                <div className="rect-3"></div>
                    <div className="divider"></div>
                <Tabs items={this.props.items}/>
            </div>
        );
    }
}
