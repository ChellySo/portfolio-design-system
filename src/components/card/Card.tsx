import { classNames } from "@/styling"
import { ArrowUpRight } from "lucide-react"
import Heading from "../heading/Heading"
import Typography from "../typography/Typography"

export interface CardProps extends React.ComponentPropsWithRef<'div'> {
    /**
     * The title of the card.
     */
    title: string
    /**
     * The URL to redirect to when the card is clicked.
     */
    href?: string
    /**
     * The information regarding a relevant date in the card.
     */
    date?: string
    /**
    * Additional tailwind class name(s) to apply to the card.
    */
    className?: string
    /**
     * Children elements of the component.
     */
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ className, title, href, children, date, ...rest }: CardProps) => {
    return (
        <div className={classNames(!!date ? 'rounded-8 px-6 py-5 xs:flex' : 'rounded-8 px-6 py-5', className)} {...rest}>
            {date &&
                <div className="xs:mr-10 my-2">
                    <Typography variant="md/lilac">{date}</Typography>
                </div>
            }

            <div>
                <div className="flex text-purple-200">
                    <Heading variant="h3" className="leading-6 xs:text-heading-2">
                        {title}
                    </Heading>
                    {href && <a href={href}><ArrowUpRight /></a>}
                </div>
                <div className="mt-3">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Card