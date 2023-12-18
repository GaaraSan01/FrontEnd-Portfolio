import ButtonPadrao from "../Button/Button"

export default function Banner() {
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h1 className="text-xl font-bold font-serif text-blue md:text-2xl lg:text-4xl">
                    Hellow World! Meu nome é <span className="" id="gradiente__destaque">Vinícius Henrique</span><br/>
                    Sou um desenvolvedor <span className="" id="gradiente__destaque">Full-Stack</span>
                </h1>
                <div className="flex flex-col gap-3 pt-8 md:flex-row md:justify-center md:pt-20">
                    <ButtonPadrao href="#" conteudo="Baixar Curriculum" arrow={false}/>
                    <ButtonPadrao href="#" conteudo="Quero saber mais!" arrow={true}/>
                </div>
            </div>
        </section>
    )
}