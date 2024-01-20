'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.png"
import { ListMenu } from "./utils/utilsMenu";
import { useState } from "react";
import { GitHub, Linkedin } from "../svgs";

export default function Header() {
    const [menuResponsive, setMenuResponsive] = useState(false)

    return (
        <>
            <header className="bg-blue py-6 fixed w-screen z-40">
                <div className="max-w-7xl mx-auto lg:px-7 flex justify-between sm:px-4">
                    <Link href={'/'}>
                        <Image src={logo} alt="Vinícius H." />
                    </Link>
                    <nav className="w-1/2 flex lg:justify-around lg:items-center sm:justify-end">
                        <ListMenu />
                        <div className="lg:flex lg:gap-6 sm:hidden">
                            <Link href={'https://github.com/GaaraSan01'} target="_blank">
                                <GitHub className="fill-green-secundary hover:fill-white transition-all duration-300"/>
                            </Link>
                            <Link href={'https://www.linkedin.com/in/vin%C3%ADcius-henrique-machado-598435247/'} target="_blank">
                                <Linkedin className="fill-green-secundary hover:fill-white transition-all duration-300"/>
                            </Link>
                        </div>

                        <button
                            className="lg:hidden"
                            onClick={
                                () => setMenuResponsive(!menuResponsive)
                            }
                        >
                            <Image src={'/menu.svg'} width={32} height={32} alt="Menu" />
                        </button>

                    </nav>
                </div>
            </header>
            <div className={!menuResponsive ? 'menu__responsive' : 'menu__responsive sm:h-2/3 md:h-1/2 p-3'}>
                <div className="w-full flex justify-end">
                    <button
                        onClick={() => setMenuResponsive(!menuResponsive)}
                    >
                        <Image src={'/close.svg'} width={32} height={32} alt="Fechar menu" />
                    </button>
                </div>
                <ul className="text-white text-center font-semibold flex flex-col gap-5">
                    <li>
                        <Link 
                           href={'/#sobre-mim'} className="basic_itemListMenu"
                           onClick={() => setMenuResponsive(!menuResponsive)}
                        >
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href={'/#principais-tecnologias'} 
                        className="basic_itemListMenu"
                        onClick={() => setMenuResponsive(!menuResponsive)}
                        >
                            Tecnologias
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href={'/#meus-principais-projetos'} 
                        className="basic_itemListMenu"
                        onClick={() => setMenuResponsive(!menuResponsive)}
                        >
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href={'/#contato'} 
                        className="basic_itemListMenu"
                        onClick={() => setMenuResponsive(!menuResponsive)}
                        >
                            Contato
                        </Link>
                    </li>
                    <li>
                        <Link 
                        href={'/blog'} 
                        className="basic_itemListMenu"
                        onClick={() => setMenuResponsive(!menuResponsive)}
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
                <div className="flex gap-4 mb-4">
                    <Link href={'https://github.com/GaaraSan01'} target="_blank">
                        <GitHub className="fill-green-secundary hover:fill-white transition-all duration-300"/>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/vin%C3%ADcius-henrique-machado-598435247/'} target="_blank">
                        <Linkedin className="fill-green-secundary hover:fill-white transition-all duration-300"/>
                    </Link>
                </div>
            </div>
        </>
    )
}