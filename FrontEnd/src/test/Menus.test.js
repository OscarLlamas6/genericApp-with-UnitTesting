import React from 'react'
import { screen, render } from '@testing-library/react'
import Menu from "../components/Menu";
import MenuPrincipal from "../components/Menu";

describe('Debe aparecer el titulo de la pagina', ()=>{
    it('Debe tener el titulo analisis', () =>{
        expect(true);
        render(<Menu/>);

        expect(screen.queryByText(/analisis/i)).toBeInTheDocument();
    })
    it('Debe tener el titulo diseño', () =>{
        expect(true);
        render(<Menu/>);

        expect(screen.queryByText(/diseño/i)).toBeInTheDocument();
    })
});