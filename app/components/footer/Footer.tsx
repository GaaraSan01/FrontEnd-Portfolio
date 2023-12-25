import Link from "next/link"
import { ArrowUp, GitHub, Instagram, Linkedin } from "../svgs"

export default function Footer (){
    return (
        <footer className="bg-blue flex flex-col gap-8 items-center
        justify-end h-40 pb-3 px-5">
            <Link href={'#banner'} className="fixed bottom-8 right-8">
                <ArrowUp className=" fill-white stroke-blue hover:stroke-white hover:fill-blue  transition-all duration-200 ease-in"/>
            </Link>
            <div className="flex gap-4">
                <Link href={'https://www.instagram.com/vinih.io/'} target="_blank">
                    <Instagram className="fill-green-secundary hover:fill-white transition-all duration-300"/>
                </Link>
                <Link href={'https://www.linkedin.com/in/vin%C3%ADcius-henrique-machado-598435247/'} target="_blank">
                    <Linkedin className="fill-green-secundary hover:fill-white transition-all duration-300"/>
                </Link>
                <Link href={'https://github.com/GaaraSan01'} target="_blank">
                    <GitHub className="fill-green-secundary hover:fill-white transition-all duration-300"/>
                </Link>
            </div>
            <Link 
                href={'https://github.com/GaaraSan01'} 
                target="_blank"
                className="text-xs text-white font-semibold text-center"
            >
                &copy; Desenvolvido por Vinicius H. - Todos os direitos reservados.
            </Link>
        </footer>
    )
}