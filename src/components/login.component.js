
import axios from 'axios';
import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
export default class Login extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('/auth/login', data)
        .then(res => {
            localStorage.setItem('token', res.data.access_token);
            this.setState({
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
        })
    };

    render(){

        if (this.state.loggedIn) {
            window.location.href = '/';
        }

        return (
            <div className="container mt-4">
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" onChange={e => this.email = e.target.value} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={e => this.password = e.target.value} className="form-control"/>
                    </div>

                    <button className="btn btn-primary btn-block">Iniciar Sesión</button>
                </form>
            </div>
        )
    }
}
