import React, {Component} from 'react';
import axios from 'axios';
export default class Individual extends Component {

    state = {
        listCustomer: [],
        listConsulting: [],
        listExam: []
    };

    componentDidMount = () => {

        this.getConsulting();

    }

    getConsulting = () => {

        const data = {
            customer: this.props.user.id
        };

        axios.post('user/historial', data).then(
            res => {
                this.setState({
                    listConsulting: res.data.data_consulting,
                    listExam: res.data.data_exam
                });
            },
            err => {
                console.log(err);
            }
        )

    }

    render(){

        let message;

        if (this.props.user['fk_rol'] === 2){
            return (
                <div className="container section mt-4">
                    <div class="section-title">
                        <h5>Consultas</h5>
                        <p>Estas son todas las consultas que realizó.</p>
                    </div>
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Fecha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        this.state.listConsulting.map((item)=>{
                                            return(
                                                <tr key={item.id} >
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.description}</td>
                                                    <td>{item.created_at}</td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>  

                                <div class="section-title">
                                    <h5>Éxamenes</h5>
                                    <p>Estas son todos los examenes que realizo.</p>
                                </div>
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Descripcion</th>
                                            <th scope="col">Fecha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        this.state.listExam.map((item)=>{
                                            return(
                                                <tr key={item.id} >
                                                    <th scope="row">{item.id}</th>
                                                    <td>{item.description}</td>
                                                    <td>{item.created_at}</td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                </div>

                
            )
        } 

        return (

            <div className="container">
                No tiene permisos aqui
            </div>

        )
    }
}