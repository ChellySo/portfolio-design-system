import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe('Card component', () => {
    it('renders card component with children', () => {
        render(
            <Card title="card title" data-testid="card">
                <p data-testid="child">card here</p>
            </Card>
        )

        const card = screen.getByTestId('card')
        const child = screen.getByTestId('child')

        expect(card).toBeInTheDocument()
        expect(child).toBeInTheDocument()
    })

    it('applies custom class names', () => {
        render(
            <Card className='bg-sky-500' data-testid='card' title='card title'>
                card here
            </Card>
        )

        const card = screen.getByTestId('card')
        expect(card).toHaveClass('bg-sky-500')
    })
})