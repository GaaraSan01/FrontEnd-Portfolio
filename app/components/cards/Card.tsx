'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import TypeCardProjects from "@/app/@types/TypeCardProjects"
import img_card from "@/public/img_Cadr.png";


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
                    <svg width="31" height="15" className={onHover ? 'fill-white' : 'fill-blue'} viewBox="0 0 31 15"  xmlns="http://www.w3.org/2000/svg">
                            <path id="Arrow 1" d="M30.7071 8.20711C31.0976 7.81658 31.0976 7.18342 30.7071 6.79289L24.3431 0.428931C23.9526 0.0384069 23.3195 0.0384069 22.9289 0.428931C22.5384 0.819456 22.5384 1.45262 22.9289 1.84315L28.5858 7.5L22.9289 13.1569C22.5384 13.5474 22.5384 14.1805 22.9289 14.5711C23.3195 14.9616 23.9526 14.9616 24.3431 14.5711L30.7071 8.20711ZM0 8.5H30V6.5H0L0 8.5Z"/>
                    </svg>
                </Link>
            </div>
        </>
    )
}