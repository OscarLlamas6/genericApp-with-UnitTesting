import React from 'react'
import { screen, render } from '@testing-library/react'
import FormLogin from '../components/FormLogin'

describe('FormularioLogin', ()=>{
    it('must display a tittle', () =>{
        render(<FormLogin/>)
        // /expresion regular/ i -> ignore case 
        expect(screen.queryByText(/contraseña/i)).toBeInTheDocument()
    })
});