import React, {Component} from 'react';
export default class CustomerModal extends Component {

    render(){

        let message;

        if (this.props.user['fk_rol'] === 1){
            return (
                <div class="modal fade" id="customerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Clientes</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Guardar</button>
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