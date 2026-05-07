import type { ReactElement, ReactNode } from "react";
import Button from "../ui/Button";
import logo from "../../assets/icons/Logo.svg"

interface navProp{
    children: ReactNode;
}

export function NavButtons({children}:navProp){
    return (
        <li className="text-lg-desk capitalize font-normal hover:text-primary hover:cursor-crosshair">
            {children}
        </li>
    )
}

export default function Navbar(){
    return(
        <div className="flex items-center justify-between my-xl ">
            <img src={logo} alt="" />
            <ol className="flex gap-gap-lg items-center">
                <NavButtons>about us</NavButtons>
                <NavButtons>services</NavButtons>
                <NavButtons>use cases</NavButtons>
                <NavButtons>pricing</NavButtons>
                <NavButtons>blog</NavButtons>
                <Button>request a quote</Button>
            </ol>

            

        </div>
    )
}