import React, {Component} from 'react';
export default class Consulting extends Component {

    render(){

        let message;

        if (this.props.user['fk_rol'] === 1){
            return (
                <div class="alert alert-warning mt-4" role="alert">
                    Hola visualizar exam doctor
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