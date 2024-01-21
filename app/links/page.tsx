import Link from "next/link";
import { Linkedin, GitHub, Instagram } from "@/app/components/svgs";
import ButtonPadrao from "../components/Button/Button";


export default function Links() {
    return (
        <main className="bg-fundo-branco">
            <div className="container py-7 h-screen mx-auto flex flex-col items-center gap-7">
                <div>
                    <img src="https://avatars.githubusercontent.com/u/91447833?v=4" alt="Avatar de Vinicius" width={140} height={140} className="rounded-full"/>
                </div>
                <div>
                    <p className="text-xl text-center">
                        <strong className="font-serif text-blue">Desenvolvedor FullStack</strong> - Curitiba PR
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href={'https://www.linkedin.com/in/vin%C3%ADcius-henrique-machado-598435247/'} target="_blank">
                        <Linkedin className="links__centralizador"/>
                    </Link>
                    <Link href={'https://github.com/GaaraSan01'} target="_blank">
                        <GitHub className="links__centralizador"/>
                    </Link>
                    <Link href={'https://www.instagram.com/vinih.io'} target="_blank">
                        <Instagram className="links__centralizador"/>
                    </Link>
                </div>
                <div className="w-full py-6 flex flex-col gap-4 px-4">
                    <ButtonPadrao href="/" conteudo="Portfólio" arrow/>
                    <ButtonPadrao href="https://wa.me/5541987478023" blank conteudo="Solicitar orçamento"/>
                    <ButtonPadrao href="/blog" conteudo="Blog - Artigos sobre tecnologia"/>
                </div>
            </div>
        </main>
    )
}