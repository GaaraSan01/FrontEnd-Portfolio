import Image from "next/image";

export default function Tecnologias (){
    return (
        <section className="pt-28" id="principais-tecnologias">
            <h2 className="basic_title">Principais Tecnologias</h2>
            <div className="max-w-screen-xl mx-auto px-5 flex flex-col justify-between items-center
            lg:flex-row">
                <div className="max-w-xl flex flex-wrap gap-9 justify-around pb-8 md:pb-20 lg:w-1/2 lg:pb-0">
                    <Image src={'html.svg'} width={80} height={80} alt="Icone do HTML5" title="HTML5" className="basic_icon__tecnologia"/>
                    <Image src={'css.svg'} width={80} height={80} alt="Icone do CSS" title="CSS3" className="basic_icon__tecnologia"/>
                    <Image src={'javascript.svg'} width={80} height={80} alt="Icone do JavaScript" title="JavaScript" className="basic_icon__tecnologia"/>
                    <Image src={'typescript.svg'} width={80} height={80} alt="Icone do TypeScript" title="TypeScript" className="basic_icon__tecnologia"/>
                    <Image src={'python.svg'} width={80} height={80} alt="Icone do Python" title="Python" className="basic_icon__tecnologia"/>
                    <Image src={'wordpress.svg'} width={80} height={80} alt="Icone do WordPress" title="WordPress" className="basic_icon__tecnologia"/>
                    <Image src={'git.svg'} width={80} height={80} alt="Icone do Git" title="Git" className="basic_icon__tecnologia"/>
                    <Image src={'docker.svg'} width={80} height={80} alt="Icone do Docker" title="Docker" className="basic_icon__tecnologia"/>
                    <Image src={'nodejs.svg'} width={80} height={80} alt="Icone do NodeJS" title="NodeJS" className="basic_icon__tecnologia"/>
                    <Image src={'shell.svg'} width={80} height={80} alt="Icone do Shell prompt" title="Prompt" className="basic_icon__tecnologia"/>
                    <Image src={'postgresql.svg'} width={80} height={80} alt="Icone do PostgreSQL" title="PostgreSQL" className="basic_icon__tecnologia"/>
                    <Image src={'mysql.svg'} width={80} height={80} alt="Icone do MySQL" title="MySQL" className="basic_icon__tecnologia"/>
                    <Image src={'react.svg'} width={80} height={80} alt="Icone do ReactJS" title="React" className="basic_icon__tecnologia"/>
                    <Image src={'vuejs.svg'} width={80} height={80} alt="Icone do VueJS" title="VueJS" className="basic_icon__tecnologia"/>
                    <Image src={'sass.svg'} width={80} height={80} alt="Icone do Sass" title="Sass" className="basic_icon__tecnologia"/>
                    <Image src={'tailwindcss.svg'} width={80} height={80} alt="Icone do Tailwind CSS" title="Tailwind Css" className="basic_icon__tecnologia"/>
                    <Image src={'django.svg'} width={80} height={80} alt="Icon do Django" title="Django" className="basic_icon__tecnologia"/>
                    <Image src={'flask.svg'} width={80} height={80} alt="Icone do Flask" title="Flask" className="basic_icon__tecnologia"/>
                    <Image src={'nextjs.svg'} width={80} height={80} alt="Icone do NextJS" title="NextJS" className="basic_icon__tecnologia"/>
                    <Image src={'nestjs.svg'} width={80} height={80} alt="Icone do NestJS" title="NestJS" className="basic_icon__tecnologia"/>
                </div>
                <div className="lg:w-1/2">
                    <ul id="list_habilidades">
                        <li className="basic_list">
                            Criando sites responsivos com HTML5 e CSS3;
                        </li>
                        <li className="basic_list">
                            Desenvolvendo aplicações Full-Stack com Django;
                        </li>
                        <li className="basic_list">
                            Desenvolvendo API Rest com autenticação JWT;
                        </li>
                        <li className="basic_list">
                            Criando servidores escalaveis com NestJS e TypeScript;
                        </li>
                        <li className="basic_list">
                            Micro-serviços com Flask;
                        </li>
                        <li className="basic_list">
                            Conhecimentos sobre desenvolvimento agil como SCRUM e Kanban;
                        </li>
                        <li className="basic_list">
                            Conhecimentos sobre boas prática de programação como OO e SOLID;
                        </li>
                        <li className="basic_list">
                            Conhecimentos dos principais frameworks de front-end como ReactJS e VueJS;
                        </li>
                        <li className="basic_list ">
                            Conhecimentos sobre em alguns frameworks back-end nas linguagens JavaScript/TypeScript e Python;
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}