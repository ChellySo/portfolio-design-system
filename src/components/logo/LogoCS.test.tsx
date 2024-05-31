import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import LogoCS from "./LogoCS";

describe('Logo', () => {
    it('renders logo', () => {
        render(
            <LogoCS data-testid="logo" />
        )

        const logo = screen.getByTestId('logo')

        expect(logo).toBeInTheDocument()
    })

})