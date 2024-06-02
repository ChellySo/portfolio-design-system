import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe('Badge component', () => {
    it('renders badge with children', () => {
        render(
            <Badge data-testid="badge">
                <p data-testid="child">badge here</p>
            </Badge>
        )

        const badge = screen.getByTestId('badge')
        const child = screen.getByTestId('child')

        expect(badge).toBeInTheDocument()
        expect(child).toBeInTheDocument()
    })

    it('applies custom class names', () => {
        render(
            <Badge className='mr-2' data-testid="badge">
                badge here
            </Badge>
        )

        const badge = screen.getByTestId('badge')
        expect(badge).toHaveClass('mr-2')
    })
})