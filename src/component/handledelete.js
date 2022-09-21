import React from 'react';
import axios from 'axios';

export default class DeleteEmployee extends React.Component {

    handleDelete = () => {
        axios.delete(`http://localhost:8080/student/info/delete`)
        .then(response => {
            this.setState({ status: response.status });
        })
    }

    render() {
        return (
            <>
                <h4>Axios DELETE Request Example in React</h4>

                <input type="button" name="submit" value="Delete" onClick={this.handleDelete}/>
            </>
        )
    }
}