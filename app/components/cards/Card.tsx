'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import TypeCardProjects from "@/app/@types/TypeCardProjects"
import img_card from "@/public/img_Cadr.png";
import { Arrow } from "../svgs"


export const Card = ({img, title, copy, link, categoria}: TypeCardProjects) => {
    const [onHover, setOnHover] = useState(false)
    return (
        <>
            <div className="max-w-[356px] flex flex-col gap-4 p-4 bg-green-secundary border-solid border-blue border-2 rounded-sm lg:mb-8">
                {img ? (
                    
                    <img src={img} alt={title} height={163} width={"100%"}/>
                ):(
                    <Image src={img_card} alt="Imagens dev" height={163}/>
                )}
                <h3 className="font-serif text-xl lg:text-2xl">
                    {title}
                </h3>
                <p className="text-xs">
                    {categoria}
                </p>
                <p className="text-sm lg:text-base">
                    {copy}
                </p>
                <Link href={link} className="py-2.5 px-4 w-full flex items-center justify-between font-serif text-blue border-blue border-2 rounded-sm hover:bg-blue hover:text-white transition duration-300 text-sm lg:text-base"
                    onMouseEnter={() => setOnHover(!onHover)}
                    onMouseLeave={() => setOnHover(!onHover)}
                    target="_blank"
                >
                    Ver projeto
                    <Arrow className={onHover ? 'fill-white' : 'fill-blue'} /> 
                </Link>
            </div>
        </>
    )
}