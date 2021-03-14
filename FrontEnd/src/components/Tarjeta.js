import React from 'react';

function Card({usuario, imagenPublicacion, contenido, fecha}){
    return(
        <div className="card text-center bg-dark">
            <img src={imagenPublicacion} className="card-img-top"></img>
            <div className="card-body text-light">
                <h4 className="card-title">
                    {usuario}
                </h4>
                <p className="card-text">{contenido}</p>
                <p className="card-text text-secondary">{fecha}</p>

            </div>
            <div className="container">
                <a className="btn btn-outline-secondary rounded-2" target="_blank">Comentar</a>
            </div>
        </div>
    )
}
export default Card