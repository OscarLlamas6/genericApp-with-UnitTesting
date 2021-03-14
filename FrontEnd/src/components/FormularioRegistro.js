import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import user from '../img/user.png';
import swal from 'sweetalert';

const url = "https://shrouded-coast-79182.herokuapp.com/new";

const cookies = new Cookies();
let enBase64 = '';
let imagen = user;
let ext = '';
let FechaHora = '';

export default class FormularioRegistro extends Component{

   // constructor(){
     //   super();
        //this.
        state = {
            userName: '',
            name: '',
            lastName: '',
            contra: '',
            contra2: '',
            foto: "",
            usuarios: []
        }
    //}

    // Retorna false y muestra un swal informando que datos estan erroneos/incompletos. 
    // Retorna true si los datos son validos
    ComprobacionYMensaje(){
        if(this.state.userName == '' || this.state.name == ''  || this.state.lastName == '' || this.state.contra == '' || this.state.contra2 == '' || this.state.foto == ''){
            swal({
                title: "Error",
                text: "Llenar todos los campos",
                icon: "error",
                button: "Aceptar"
            });
            return false;
        }

        if(this.state.contra != this.state.contra2){
            swal({
                title: "error",
                text: "la contraseña no coincide",
                icon: "error",
                button: "aceptar"
            });
            return false;
        }
        
        return true;
    }

    Registrar=async()=>{
        let existe = 0;
        console.log(this.state)
        if(existe == 0){
            axios.post(url, {username: this.state.userName, nombre: this.state.name, apellido: this.state.lastName, password: this.state.contra, image: enBase64})
            .then(response=>{
                console.log('response');
                console.log(response.data);
                if(response.data == "error"){
                    console.log("error al registrarse");
                    swal({
                        title: "Error",
                        text: "Error al registrarse",
                        icon: "error",
                        button: "Aceptar"
                    });
                }else if(response.data.message == "Usuario registrado :)"){   
                    console.log("El usuario fue registrado");
                    swal({
                        title: "Registrado",
                        text: "Registrado correctamente",
                        icon: "success",
                        button: "Aceptar"
                    })
                    .then((value) => {
                        window.location.href="./"
                        //swal(`The returned value is: ${value}`);
                      });
                }
            })
            .catch(error=>{
                console.log("ERROR")
            })
        }else{
            swal({
                title: "Error",
                text: "El nombre de usuario esta ocupado",
                icon: "error",
                button: "Aceptar"
            });
            console.log('el usuario ya existe');
        }
    }

    render(){
        const convertirBase64=(archivos)=>{
            Array.from(archivos).forEach(archivo=>{
                var reader = new FileReader();
                reader.readAsDataURL(archivo);
                reader.onload=function(){
                    var aux=[];
                    var base64 = reader.result;
                    imagen = base64;
                    console.log("a base 64");
                    console.log(imagen);
                    aux = base64.split(',');
                    enBase64 = aux[1];
                    console.log(enBase64);
                    var aux2, aux3 = [];
                    aux2 =aux[0].split('/');
                    aux3 = aux2[1].split(';');
                    ext = aux3[0]
                    console.log('la extension es: ' + ext);
                }
            })
        }
        return(
            
            <div className="modal-dialog text-center">
            <div className="col-sm-8 cuadro-central">
                <div className="modal-content">
                    <div className="col-12 user-img">
                        <img src={imagen}></img>
                    </div>
                    <form onSubmit={this._handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="uFoto" className="form-label">Seleccionar foto</label>
                            <div id="div_file">
                                <label id="texto">Add Photo</label>
                                <input type="file" id="Photo" accept="image/png, image/jpeg" multiple onChange={(e)=>convertirBase64(e.target.files)}></input>   
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="uUsuario" className="form-label">Usuario</label>
                            <input onChange={e => this.setState({userName: e.target.value})} type="text" className="form-control" id="uUsuario" placeholder="Usuario" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="uNombre" className="form-label">Nombre</label>
                            <input onChange={e => this.setState({name: e.target.value})} type="text" className="form-control" id="uNombre" placeholder="Nombre" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="uApellido" className="form-label">Apellido</label>
                            <input onChange={e => this.setState({lastName: e.target.value})} type="text" className="form-control" id="uApellido" placeholder="Apellido" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="uContra" className="form-label">Contraseña</label>
                            <input onChange={e => this.setState({contra: e.target.value})} type="password" className="form-control" id="uContra" placeholder="Contraseña"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="uContraC" className="form-label">Confirmar contraseña</label>
                            <input onChange={e => this.setState({contra2: e.target.value})} type="password" className="form-control" id="uContrac" placeholder="Confirmar contraseña"/>
                        </div>
                        <button type="submit" className="btn btn-dark">Registrarse</button>
                        </form>
                        <a href="/">Ya tienes una cuenta? logeate</a>
                    <div>
                        <br></br>
                    </div>
                    </div>
            </div>
        </div>
        );

    }

    _handleSubmit = (e) =>{
        e.preventDefault();
        console.log('oprimio registarse');
        this.state.foto = enBase64;
        if(this.ComprobacionYMensaje()){
            console.log('registro')
            this.Registrar();
        }
    }

    
    
}