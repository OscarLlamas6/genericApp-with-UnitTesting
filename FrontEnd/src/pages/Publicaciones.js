import React, { Component } from 'react';
import '../css/Publicaciones.css';
import Tarjetas from '../components/Tarjetas';
import axios from 'axios';
import swal from 'sweetalert';

import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ModalTitle } from 'react-bootstrap';

import Cookies from 'universal-cookie';
const cookiess = new Cookies();
const Surl = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/editarUsuario";


export default class Publicaciones extends Component {
    state={
        data:[],
        modalEditar: false,
        modalAlbum: false,
        form:{
            userName: '',
            publi: '',
            fecha: '',
            hora: ''
        },
        eliminar:{
            seleccionado: '',
        },
        album:{
        crearAlbum: '',
        },
        Albumes: [],
        miFoto: ''
    };

    PublicarEstado=async()=>{

        var fechahora = new Date();
        var fechaA = fechahora.getDate() + '-' + (fechahora.getMonth() + 1) + '-' + fechahora.getFullYear();
        var horaA = fechahora.getHours() + ':' + fechahora.getMinutes() + ':' + fechahora.getSeconds();
        
        axios.post(Surl,{userName: cookiess.get("userName"), publi: this.state.form.publi, fecha: fechaA, hora: horaA})
        .then(response=>{
            if(response.data == "Nel"){
                swal({
                    title: "Error",
                    text: "No se pudo crear la publicacíon.",
                    icon: "error",
                    button: "Aceptar"
                });
                this.modaEditarEstado();
            }else{
                swal({
                    title: "Publicacíon",
                    text: "Se creo la publicación correctamente.",
                    icon: "success",
                    button: "Aceptar",
                    timer: "2000"
                });
                cookiess.set('userName', cookiess.get("userName"), {path: "/"});
                setTimeout('document.location.reload()',2000);  
            }
        })
        .catch(error=>{
            console.error("error");
            swal({
                title: "Error",
                text: "Ha ocurrido un error.",
                icon: "error",
                button: "Aceptar"
            });
        })
    }

    handleChange=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    render(){
        return(
            <div className="Publicaciones">
                <div className="container">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" name="publi" id="publi" placeholder="¿En que estas pensando?..." cols="52" onChange={this.handleChange}></textarea>
                                        <br></br>
                                    </div>
                            </div>
                            </div>
                        </div>
                        <button className="btn btn-info" onClick={this.PublicarEstado}>
                            Publicar
                        </button>
                </div>
                <div className="salto"></div>
                <div className="container">
                <Tarjetas></Tarjetas>
                </div>
                
            </div>
        )
    }

}