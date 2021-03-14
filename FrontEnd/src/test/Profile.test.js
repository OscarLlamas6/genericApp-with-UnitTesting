import React from 'react'
import { screen, render } from '@testing-library/react'
import Profile from '../pages/Profile'

//TODO: probar si corre sin describe:
describe('Validacion de campos', ()=>{
    it('Las cookies tengan datos.', () =>{

        let perfil = new Profile();
        perfil.state = {
            username: '',
            nombre: '',
            apellido: '',
            publi: '',
        };
    });

    it('Existir boton para crear publicacion', () =>{
        expect(true);
        render(<Profile/>);
        expect(screen.queryByText(/Crear Publicación/i)).toBeInTheDocument();
    })
});