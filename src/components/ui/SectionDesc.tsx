import type { ReactNode } from "react"

interface PropType{
    children: ReactNode;
    section: string;
}

export default function SectionDesc({children, section}: PropType){
    return(
        <div className="flex gap-gap-lg mb-2xl">
            <h2 className="bg-primary text-2xl-desk capitalize font-medium px-2 rounded-[7px]">{section}</h2>
            <p className="text-md-desk w-[50ch]">{children}</p>
        </div>
    )
}