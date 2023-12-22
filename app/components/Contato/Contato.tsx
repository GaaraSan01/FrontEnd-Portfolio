import { Formulario } from "../formulario/Formulario"

export default function Contato() {
    return (
        <section className="pt-28 pb-24 px-5" id="contato">
            <h2 className="basic_title pb-7">
                Entre em contato
            </h2>
            <p className="max-w-[720px] text-center mx-auto pb-16 text-sm lg:text-base">
                Estou constantemente em busca de desafios que me permitam aplicar meus conhecimentos e contribuir para projetos inovadores.
            </p>
            <div className="md:container mx-auto flex justify-center items-center sm:w-full">
                <Formulario />
            </div>
        </section>
    )
}