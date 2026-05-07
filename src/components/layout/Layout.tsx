import type { ReactElement, ReactNode } from "react";

interface layoutProp{
    children: ReactElement,
}

export default function Layout({children}:layoutProp){
    return(
        <section className="mx-auto my-0 max-w-max-width px-16">
            {children}
        </section>
    )
}