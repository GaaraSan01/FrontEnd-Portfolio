'use client'
import Link from "next/link"
import IButton from "@/app/@types/TypeButton"
import { useState } from "react"
import { Arrow } from "../svgs"

export default function ButtonPadrao({href, conteudo, arrow, blank}: IButton) {
    const [onHover, setOnHover] = useState(false)

   return (
    <Link 
        href={href} 
        className="basic_bottom"
        onMouseEnter={() => setOnHover(!onHover)}
        onMouseLeave={() => setOnHover(!onHover)}
        target={blank ? '_blank' : ''}
    >
        {conteudo}
        {arrow && (
            <Arrow className={onHover ? 'fill-white' : 'fill-blue'}/>
        )}
    </Link>
   ) 
}