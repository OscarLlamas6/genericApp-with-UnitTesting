import React from 'react';

function Card({usuario, imagenPublicacion, contenido, fecha}){

    var imagen = ""
    if(imagenPublicacion != ""){
        imagen =  <img src={imagenPublicacion} className="card-img-top"></img> 
    }else{
        imagen = ""
    }

    return(
        <div className="centro-tarjeta"> 
        <div className="card text-center bg-dark">
            {imagen}
            <div className="card-body text-light">
                <h1 className="card-title">
                    {usuario}
                </h1>
                <p className="card-text">{contenido}</p>
                <p className="card-text text-secondary">{fecha}</p>

            </div>
        </div>
        </div>
    )
}
export default Card