import axios from 'axios';
export function getFiles() {
    axios.get(`/getFiles`)
            .then(response => response.json())
            .then(json => this.setState({ users: json.data, done: true }))
}