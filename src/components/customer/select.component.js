import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CustomerSelect(props) {

    const [ listCustomer, setListCustomer ] = useState([]);
    const [ customer, setCustomer ] = useState(null);

    useEffect(() => {

        axios.post('user/customer').then(
            res => {
                setListCustomer(res.data.data);
            },
            err => {
                console.log(err);
            }
        )
  
    }, []);

        console.log(listCustomer);
        if (listCustomer) {
            if (props.user['fk_rol'] === 1){
                return (
                    <div className=" mb-3">
                                    <label htmlFor="phone">Paciente</label>
                                    <select id="inputState" className="form-control" onChange={(event)=>props.setCustomer(event.target.value)}>
                                        <option defaultValue>Seleccionar...</option>
                                        
                                        {
                                            listCustomer.map((item)=>{
                                                return(
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                                )
                                            })
                                        }

                                    </select>
                    </div>
                )
            } 
        }
        return (

            <div className="container">
                No tiene permisos aqui
            </div>

        )
    
}

export default CustomerSelect;