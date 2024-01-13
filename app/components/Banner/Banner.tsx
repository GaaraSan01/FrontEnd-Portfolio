import ButtonPadrao from "../Button/Button";
import ButtonCurriculum from "../ButtonCurriculum/ButtonCurriculum";

export default function Banner() {
    return (
        <section className="min-h-screen flex items-center bg-fundo-branco bg-fixed" id="banner">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h1 className="text-xl font-bold font-serif text-blue md:text-2xl lg:text-4xl">
                    Hellow World! Meu nome é <span className="" id="gradiente__destaque">Vinícius Henrique</span><br/>
                    Sou um desenvolvedor <span className="" id="gradiente__destaque">Full-Stack</span>
                </h1>
                <div className="flex flex-col gap-3 pt-8 md:flex-row md:justify-center md:pt-20">
                    <ButtonCurriculum curriculumUrl="curriculum.pdf" />
                    <ButtonPadrao href="#sobre-mim" conteudo="Quero saber mais!" arrow={true}/>
                </div>
            </div>
        </section>
    )
}