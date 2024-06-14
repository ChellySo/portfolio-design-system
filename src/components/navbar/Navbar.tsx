import { classNames } from "@/styling"
import LogoCS from "../logo/LogoCS"

const Navbar: React.FC<React.ComponentPropsWithoutRef<'nav'>> = ({ className, children, ...rest }) => {
    return (
        <div className={classNames('z-20 flex w-full py-7 items-center bg-purple-900 justify-between font-medium text-lg', className)} {...rest}>
            <a href="/"><LogoCS /></a>
            <nav className="text-purple-400">{children}</nav>
        </div>
    )
}

export default Navbar