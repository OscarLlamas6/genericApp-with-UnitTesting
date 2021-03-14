import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Tarjeta from './Tarjeta'
import { Typography } from '@material-ui/core';
import '../css/tarjetas.css';

import imagen1 from '../img/user.png';

const tarjetas = [
    {
        id: 1,
        usuario: 'Tarjeta 1',
        image: imagen1,
        contenido: 'adsflkjalfdksj',
        fecha: '12/16/21'
    },
    {
        id: 2,
        usuario: 'Tarjeta 2',
        image: imagen1,
        contenido: 'fdsfsdfs fsdfsdfsdfs sdfsdfsfsdfs dfsdfsdf',
        fecha: '5/05/13'
    },
    {
        id: 3,
        usuario: 'Tarjeta 3',
        image: imagen1,
        contenido: 'fdsfsdfs fsdfsdfsdfs sdfsdfsfsdfs dfsdfsdf',
        fecha: '05/10/21'
    }
    
]

function Tarjetas() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    tarjetas.map(tarjeta => (
                        <div className="col-md-4" key={tarjeta.id}>
                            <Tarjeta usuario={tarjeta.usuario} imagenPublicacion={tarjeta.image} contenido={tarjeta.contenido} fecha={tarjeta.fecha}></Tarjeta>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tarjetas