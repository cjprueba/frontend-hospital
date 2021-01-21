import React, {Component} from 'react';
import axios from 'axios';
import CustomerSelect from '../customer/select.component';

export default class Consulting extends Component {

    state = {
        listConsulting: []
    };

    componentDidMount = () => {

        this.getConsulting();

    }

    setCustomer = customer => {
        this.setState({
          customer: customer
        })
    }

    getConsulting = () => {

        const data = {
            doctor: this.props.user.id,
        }

        axios.post('consulting/get', data).then(
            res => {
                this.setState({
                    listConsulting: res.data.data
                });
                console.log(this.state.listConsulting);
            },
            err => {
                console.log(err);
            }
        )

    }

    saveConsulting = () => {

        const data = {
            doctor: this.props.user.id,
            customer: this.state.customer,
            description: this.description
        }

        axios.post('consulting/save', data).then(
            res => {
                this.getConsulting();
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
                        <h5>Registrar Consulta</h5>
                        <p>Puede registrar nueva consultas en la guia.</p>
                    </div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#consultingModal">
                    Agregar
                    </button>

                    {
                    this.state.listConsulting.map((item)=>{
                        return(
                            <div key={item.id} class="alert alert-success mt-4" role="alert">
                                <b>#{item.id} </b>Paciente: {item.name} - Descripcion: {item.description} - Fecha: {item.created_at}
                            </div>
                        )
                    })
                    }
                    
                    <div class="modal fade" id="consultingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Agregar Consulta</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <CustomerSelect user={this.props.user} setCustomer={this.setCustomer}/>

                            <label className="mt-4">Descripción</label>
                            <input className="form-control" onChange={e => this.description = e.target.value} type="text"/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" onClick={this.saveConsulting} class="btn btn-primary" data-dismiss="modal">Guardar</button>
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