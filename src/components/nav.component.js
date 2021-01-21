import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);
    }
    render(){   

        let buttons;
        let consultingMenu;
        let examMenu;
        let patientMenu;

        if (this.props.user) {

            if (this.props.user['fk_rol'] === 1){

                patientMenu = (
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="consultingDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Paciente
                        </a>
                        <div className="dropdown-menu" aria-labelledby="consultingDropdown">
                            <Link to={'/paciente/historial'} className="dropdown-item">Historial</Link>
                        </div>
                    </li>
                    
                )

                consultingMenu = (
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="consultingDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Consulta
                        </a>
                        <div className="dropdown-menu" aria-labelledby="consultingDropdown">
                            <Link to={'/consulta/registrar'} className="dropdown-item">Registrar</Link>
                        </div>
                    </li>
                    
                )
                examMenu = (
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="consultingDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Éxamen
                        </a>
                        <div className="dropdown-menu" aria-labelledby="consultingDropdown">
                            <Link to={'/examen/registrar'} className="dropdown-item">Registrar</Link>
                        </div>
                    </li>
                    
                )
            } else {

                patientMenu = (
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="consultingDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Historial
                        </a>
                        <div className="dropdown-menu" aria-labelledby="consultingDropdown">
                            <Link to={'/paciente/individual'} className="dropdown-item">Mi historial</Link>
                        </div>
                    </li>
                    
                ) 
            }

            buttons = (
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        {patientMenu}
                        {consultingMenu}
                        {examMenu}
                        <li className="nav-item">
                            <Link to={'/'} onClick={this.handleLogout} className="nav-link">Logout</Link>
                        </li>
                    </ul>
                </div>
            )

        } else {

            buttons = (
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={'/login'} className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/register'} className="nav-link">Registrar</Link>
                    </li>
                    </ul>
                </div>
            )   

        }

        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}>Inicio</Link>
                    {buttons}
                </div>
            </nav>
        )
    }
}