import { classNames } from '@/styling'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'

export const largeHeadingStyles = cva(classNames('font-medium'), {
    variants: {
        variant: {
            large: 'text-heading-lg',
            xlarge: 'text-heading-xl',
            xxlarge: 'text-heading-xxl',
        }
    }
})

export type LargeHeadingStylesProps = VariantProps<typeof largeHeadingStyles>
export type LargeHeadingVariant = Exclude<LargeHeadingStylesProps['variant'], null | undefined>

export interface LargeHeadingProps extends React.HTMLProps<HTMLHeadingElement> {
    /**
     * This prop is of type string and is used to determine the text appearance of the component.
     * @required
     */
    variant: Exclude<LargeHeadingStylesProps['variant'], null | undefined>
    /**
     * Additional styles for the component.
     */
    className?: string
    /**
     * Children elements of the component.
     */
    children: React.ReactNode
}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({ variant, className, children, ...rest }: LargeHeadingProps, ref) => {
    return (
        <h1 ref={ref} className={classNames(className, largeHeadingStyles({ variant }))} {...rest}>
            {children}
        </h1>
    )
},
)

export default LargeHeading