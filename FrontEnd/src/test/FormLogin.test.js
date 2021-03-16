import React from 'react'
import { screen, render } from '@testing-library/react'
import FormLogin from '../components/FormLogin'

describe('FormularioLogin', ()=>{
    it('must display a tittle', () =>{
        render(<FormLogin/>)
        // /expresion regular/ i -> ignore case 
        expect(screen.queryByText(/contraseña/i)).toBeInTheDocument()
    })

    it('Debe tener boton de iniciar sesion', () =>{
        render(<FormLogin/>)

        // console.log(
        //     screen.getByRole(
        //         'button', 
        //         {
        //             name: /iniciar sesión/i
        //         }
        //     )
        // );

        expect(
            screen.getByRole(
                'button', 
                {
                    name: /iniciar sesión/i
                }
            )
        ).toBeInTheDocument();
    })

    it('Debe mostart imagen de perfil default', () =>{
        let a = render(<FormLogin/>)
        // /expresion regular/ i -> ignore case 
        expect(screen.queryByAltText(/userDefault/i)).toBeInTheDocument()
    })
});