import React from 'react'
import { screen, render } from '@testing-library/react'
import FormularioRegistro from "../components/FormularioRegistro";

describe('Que esten todos los campos necesarios', ()=>{
    it('Debe tener datos personales', () =>{
        expect(true);
        render(<FormularioRegistro/>);

        expect(screen.queryByText(/usuario/i)).toBeInTheDocument();
        expect(screen.queryByText(/nombre/i)).toBeInTheDocument();
        expect(screen.queryByText(/apellido/i)).toBeInTheDocument();
    })
    it('Debe tener contrasena y confirmacion contrasena', () =>{
        render(<FormularioRegistro/>)

        expect(screen.queryByText(/confirmar contraseña/i)).toBeInTheDocument()
    })
});

//TODO: probar si corre sin describe:
describe('Validacion de campos', ()=>{
    it('Que rechace campos no validos', () =>{

        let dummyFormulario = new FormularioRegistro();
        dummyFormulario.state = {
            userName: '',
            name: '',
            lastName: '',
            contra: '',
            contra2: '',
            foto: "",
            usuarios: []
        };

        let result = dummyFormulario.ComprobacionYMensaje();
        expect(!result).toBeTruthy();
    });
    it('Que acepte campos validos', () =>{
        let dummyFormulario = new FormularioRegistro();
        dummyFormulario.state = {
            userName: 'valido',
            name: 'valido',
            lastName: 'valido',
            contra: 'contraValida',
            contra2: 'contraValida',
            // chapuz:
            foto: "any",
            usuarios: []
        }

        let result = dummyFormulario.ComprobacionYMensaje();
        expect(result).toBeTruthy();
    });
});