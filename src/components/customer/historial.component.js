import React, {Component} from 'react';
import axios from 'axios';
export default class Historial extends Component {

    state = {
        listCustomer: [],
        listConsulting: [],
        listExam: []
    };

    componentDidMount = () => {

        this.getConsulting();

    }

    getConsulting = () => {

        axios.post('user/customer').then(
            res => {
                this.setState({
                    listCustomer: res.data.data
                });
            },
            err => {
                console.log(err);
            }
        )

    }

    detail = (value) => {

        const data = {
            customer: value
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

        if (this.props.user['fk_rol'] === 1){
            return (
                <div className="container section mt-4">
                    <div class="section-title">
                        <h5>Historial Pacientes</h5>
                        <p>Puede observar todo el historial de sus pacientes clicando encima de sus registros.</p>
                    </div>
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Paciente</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Telefóno</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.listCustomer.map((item)=>{
                                return(
                                    <tr key={item.id} onClick={e => this.detail(item.id)} data-toggle="modal" data-target="#historialModal">
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phone}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>

                    <div class="modal fade" id="historialModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Detalle</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="section-title">
                                    <h5>Consultas</h5>
                                    <p>Estas son todas las consultas que realizo el paciente.</p>
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
                                    <p>Estas son todos los examenes que realizo el paciente.</p>
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
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" onClick={this.saveConsulting} class="btn btn-primary">Guardar</button>
                            </div>
                            </div>
                        </div>
                        </div>
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