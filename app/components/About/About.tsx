import ButtonPadrao from "../Button/Button"
import Image from "next/image"

export default function About(){
    return (
        <section id="sobre-mim" className="pt-24">
            <h2 className="basic_title">Sobre mim</h2>
            <div className="max-w-screen-xl mx-auto px-5 flex flex-col-reverse gap-8 justify-between items-center md:flex-row">
                <div className="w-full flex flex-col gap-8 lg:w-1/2">
                    <h3 className="text-xl font-serif lg:text-4xl">
                        Minha tragetória
                    </h3>
                    <p className="text-justify text-sm lg:text-base">
                        Olá! Meu nome é <strong>Vinícius Henrique</strong>, sou um <strong>desenvolvedor Full-Stack</strong> sediado em <strong>São José dos Pinhais</strong>, PR, na região metropolitana de Curitiba. Minha jornada no mundo da programação começou no <strong>back-end</strong>, onde mergulhei profundamente no universo do Python. Com o tempo, expandi meus horizontes e, atualmente, estou imerso no estudo de <strong>front-end</strong>.
                    </p>
                    <div className="flex flex-col gap-5 lg:flex-row">
                        <ButtonPadrao href="#principais-tecnologias" conteudo="Ver tecnologias" arrow={false}/>
                        <ButtonPadrao href="#contato" conteudo="Entrar em contato" arrow={true}/>
                    </div>
                </div>
                <div className=" flex justify-end pb-5 md:w-1/2">
                    <Image src={'/avatar.png'} width={569} height={568} alt="Foto de Vinícius Henrique com moudura" quality={100}/>
                </div>
            </div>
        </section>
    )
}