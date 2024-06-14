
import { classNames } from '@/styling'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

export const headingStyles = cva('font-medium', {
    variants: {
        variant: {
            h1: 'text-heading-1',
            h2: 'text-heading-2',
            h3: 'text-heading-3',
            h4: 'text-heading-4',
            h5: 'text-heading-5',
        },
    },
})

export type HeadingStylesProps = VariantProps<typeof headingStyles>
export type HeadingVariant = Exclude<HeadingStylesProps['variant'], null | undefined>

type Props = {
    /**
     * This prop is of type string and is used to determine the text appearance of the component.
     * @required
     */
    variant: Exclude<HeadingStylesProps['variant'], null | undefined>
    /**
     * Additional styles for the component.
     */
    className?: string
    /**
     * Children elements of the component.
     */
    children: React.ReactNode
}

export type HeadingProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>
export type HeadingComponent = <C extends React.ElementType = 'h1'>(props: HeadingProps<C>) => React.ReactElement | null

// @ts-expect-error - Typings are not correct
const Heading: HeadingComponent = forwardRef(
    <Tag extends React.ElementType = 'h1'>(
        { as, variant, className, children, ...rest }: HeadingProps<Tag>,
        ref?: PolymorphicRef<Tag>,
    ) => {
        const Component = as || variant

        return (
            <Component className={classNames(headingStyles({ variant }), className)} ref={ref} {...rest}>
                {children}
            </Component>
        )
    },
)
export default Heading
