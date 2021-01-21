import React, {Component} from 'react';
export default class Home extends Component {

    componentWillMount = () => {
        
    }

    render(){

        let message;

        if (this.props.user){
            message = (
                <div class="alert alert-success mt-4" role="alert">
                    Hola {this.props.user.name}
                </div>
            )
        } else {
            message = (
                <div class="alert alert-warning mt-4" role="alert">
                    No estas logueado !
                </div>
            )
        }

        return (

            <div className="container">
                {message}
            </div>

        )
    }
}
