import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Heading, { headingStyles, type HeadingVariant } from './Heading';

describe('Typography/Heading', () => {
    describe.each([
        ['h1', headingStyles({ variant: 'h1' })],
        ['h2', headingStyles({ variant: 'h2' })],
        ['h3', headingStyles({ variant: 'h3' })],
        ['h4', headingStyles({ variant: 'h4' })],
        ['h5', headingStyles({ variant: 'h5' })],
    ])('variant: %s', (variant, expectedClasses) => {
        it(`renders with the correct classes and html for variant: ${variant}`, () => {
            const { getByText } = render(<Heading variant={variant as HeadingVariant}>Hello world</Heading>)

            expect(getByText('Hello world')).toHaveClass(expectedClasses)
            expect(getByText('Hello world').tagName.toLowerCase()).toBe(variant)
        })

        it(`renders the correct content for variant: ${variant}`, () => {
            const { getByText } = render(<Heading variant={variant as HeadingVariant}>Hello world</Heading>)

            expect(getByText('Hello world')).toHaveTextContent('Hello world')
        })
    })

    it('applies additional className', () => {
        const variant = 'h1'
        const expectedClasses = headingStyles({ variant: variant as HeadingVariant })

        const { getByText } = render(
            <Heading className="bg-red-500" variant="h1">
                Hello world
            </Heading>,
        )

        expect(getByText('Hello world')).toHaveClass(expectedClasses, 'bg-red-500')
    })
})
