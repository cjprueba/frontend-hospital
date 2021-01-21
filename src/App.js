import React, { Component } from 'react';
import axios from 'axios';
import Nav from './components/nav.component';
import Home from './components/home.component';
import Login from './components/login.component';
import Register from './components/register.component';
import RegisterConsulting from './components/consulting/register.component';
import VisualizeConsulting from './components/consulting/visualize.component';
import RegisterExam from './components/exam/register.component';
import VisualizeExam from './components/exam/visualize.component';
import Historial from './components/customer/historial.component';
import Individual from './components/customer/individual.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {

  state = {};

  componentDidMount = () => {

    axios.post('user-info').then(
        res => {
            this.setUser(res.data.user);
        },
        err => {
            console.log(err);
        }
    )
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav user={this.state.user} setUser={this.setUser}/>
        <div className="aut-wrapper">
          <div className="auth-inner">
            <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user}/>}/>
                <Route exact path="/login" component={() => <Login setUser={this.setUser} />}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/consulta/registrar" component={() => <RegisterConsulting user={this.state.user}/>}/>
                <Route exact path="/consulta/ver" component={() => <VisualizeConsulting user={this.state.user}/>}/>
                <Route exact path="/examen/registrar" component={() => <RegisterExam user={this.state.user}/>}/>
                <Route exact path="/examen/ver" component={() => <VisualizeExam user={this.state.user}/>}/>
                <Route exact path="/paciente/historial" component={() => <Historial user={this.state.user}/>}/>
                <Route exact path="/paciente/individual" component={() => <Individual user={this.state.user}/>}/>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
  }
}
