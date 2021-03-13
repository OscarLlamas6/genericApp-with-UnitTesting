import React, { Component } from 'react'
import '../css/Profile.css'
import Cookies from 'universal-cookie';
import MenuPrincipal from '../components/MenuPrincipal'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ModalTitle } from 'react-bootstrap';
import axios from 'axios';
import md5 from 'md5';
import swal from 'sweetalert';
import { timers } from 'jquery';
import user from '../img/user.png';
import AnimalAvatar from 'animal-avatars.js'

const cookiess = new Cookies();
const Surl = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/editarUsuario";
const Aurl = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/getAlbumes";
const Curl = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/newAlbum";
const Eurl = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/deleteAlbum";
const urlUsuario = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/usuarioId";
const urlFoto = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/obtenerFoto";
const url3 = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/subirFoto";
const url4 = "http://p1-2127715980.us-east-2.elb.amazonaws.com:9000/guardarFotoPerfil";

let enBase64 = '';
let imagen = user;
let ext = '';
let FechaHora = '';

export default class Profile extends Component {
    
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

    handleChange2=async e=>{
        e.persist();
        await this.setState({
            album:{
                ...this.state.album,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.album);
    }

    handleChange3=async e=>{
        e.persist();
        await this.setState({
            eliminar:{
                ...this.state.seleccionado,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.eliminar.seleccionado);
    }


    modaEditarEstado=()=>{
        this.setState({modalEditar: !this.state.modalEditar})
    }

    modaEditarAlbum=()=>{
        this.setState({modalAlbum: !this.state.modalAlbum})
    }

    componentDidMount(){
        if(!cookiess.get('username')){
            window.location.href='./';
        }
        //this.ObtenerAlbum();
        //this.Usuario();
    }


    //EDITAR PERFIL
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
  

    render() {

        let usuario = cookiess.get("username");
        let nombre = cookiess.get("nombre");
        let apellido = cookiess.get("apellido");
        let foto = cookiess.get("image")
        
        return (
            <div>
                <>
                <MenuPrincipal/>
                </>
                <div className="salto"></div>
                <div className="container-lg">
                <div className="card text-center">
                    <div className="col1">
                        <div className="marco1">
                        <img  className="fotoPerfil" src={foto}></img>
                        </div>
                    </div>
                    <div className="usuario">
                    <h2>@{usuario}</h2>
                    <h4>{nombre} {apellido}</h4>
                    </div>
                    <div className="salto"></div>
                    <div className="salto"></div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                        <button type="button" className="btn btn-info btn-lg btni" onClick={()=>this.modaEditarEstado()}>Crear Publicación</button>
                        </div>
                    </div>
                    <div className="salto"></div>
                </div>
                <div className="publicaciones">
                <div className="salto"></div>
                    <div className="container">
                        <div className="col2">
                                <p><b>Fecha:10/03/2021 Hora: 15:50</b> { nombre } { apellido}</p>
                                <p>Publicación de Ejemplo</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col2">
                                <p><b>Fecha:10/03/2021 Hora: 15:50</b> { nombre } { apellido}</p>
                                <p>Publicación de Ejemplo</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col2">
                                <p><b>Fecha:10/03/2021 Hora: 15:50</b> { nombre } { apellido}</p>
                                <p>Publicación de Ejemplo</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col2">
                                <p><b>Fecha:10/03/2021 Hora: 15:50</b> { nombre } { apellido}</p>
                                <p>Publicación de Ejemplo</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col2">
                                <p><b>Fecha:10/03/2021 Hora: 15:50</b> { nombre } { apellido}</p>
                                <p>Publicación de Ejemplo</p>
                        </div>
                    </div>
                </div>
                </div>


                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader toggle={this.modaEditarEstado} style={{display: ''}}>
                    Crear Publicación
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="userNombre">Publicación</label>
                                        <textarea className="form-control" rows="5" name="publi" id="publi" placeholder="¿En que estas pensando?..." cols="52" onChange={this.handleChange}></textarea>
                                        <br></br>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-info" onClick={this.PublicarEstado}>
                            Publicar
                        </button>
                        <button className="btn btn-dark" onClick={()=>this.modaEditarEstado()}>
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}