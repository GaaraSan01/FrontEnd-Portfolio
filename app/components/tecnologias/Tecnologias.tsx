import Image from "next/image";
import Link from "next/link";

export default function Tecnologias (){
    return (
        <section className="pt-28" id="principais-tecnologias">
            <h2 className="basic_title">Principais Tecnologias</h2>
            <div className="max-w-screen-xl mx-auto px-5 flex flex-col justify-between items-center
            lg:flex-row">
                <div className="max-w-xl flex flex-wrap gap-9 justify-around pb-8 md:pb-20 lg:w-1/2 lg:pb-0">
                    <Link href={'https://developer.mozilla.org/pt-BR/docs/Web/HTML'} target="_blank">
                        <Image src={'html.svg'} width={80} height={80} alt="Icone do HTML5" title="HTML5" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://developer.mozilla.org/pt-BR/docs/Web/CSS'} target="_blank">
                        <Image src={'css.svg'} width={80} height={80} alt="Icone do CSS" title="CSS3" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'} target="_blank">
                        <Image src={'javascript.svg'} width={80} height={80} alt="Icone do JavaScript" title="JavaScript" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://www.typescriptlang.org/'} target="_blank">
                        <Image src={'typescript.svg'} width={80} height={80} alt="Icone do TypeScript" title="TypeScript" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://python.org'} target="_blank">
                        <Image src={'python.svg'} width={80} height={80} alt="Icone do Python" title="Python" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://wordpress.com/pt-br'} target="_blank">
                        <Image src={'wordpress.svg'} width={80} height={80} alt="Icone do WordPress" title="WordPress" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://git-scm.com/'} target="_blank">
                        <Image src={'git.svg'} width={80} height={80} alt="Icone do Git" title="Git" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://www.docker.com/'} target="_blank">
                        <Image src={'docker.svg'} width={80} height={80} alt="Icone do Docker" title="Docker" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://nodejs.org/en'} target="_blank">
                        <Image src={'nodejs.svg'} width={80} height={80} alt="Icone do NodeJS" title="NodeJS" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://guialinux.uniriotec.br/shell/'} target="_blank">
                        <Image src={'shell.svg'} width={80} height={80} alt="Icone do Shell prompt" title="Prompt" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://www.postgresql.org/'} target="_blank">
                        <Image src={'postgresql.svg'} width={80} height={80} alt="Icone do PostgreSQL" title="PostgreSQL" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://www.mysql.com/'} target="_blank">
                        <Image src={'mysql.svg'} width={80} height={80} alt="Icone do MySQL" title="MySQL" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://react.dev/'} target="_blank">
                        <Image src={'react.svg'} width={80} height={80} alt="Icone do ReactJS" title="React" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://vuejs.org/'} target="_blank">
                        <Image src={'vuejs.svg'} width={80} height={80} alt="Icone do VueJS" title="VueJS" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://sass-lang.com/'} target="_blank">
                        <Image src={'sass.svg'} width={80} height={80} alt="Icone do Sass" title="Sass" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://tailwindcss.com/'} target="_blank">
                        <Image src={'tailwindcss.svg'} width={80} height={80} alt="Icone do Tailwind CSS" title="Tailwind Css" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://www.djangoproject.com/'} target="_blank">
                        <Image src={'django.svg'} width={80} height={80} alt="Icon do Django" title="Django" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://flask.palletsprojects.com/en/3.0.x/'} target="_blank">
                        <Image src={'flask.svg'} width={80} height={80} alt="Icone do Flask" title="Flask" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://nextjs.org/'} target="_blank">
                        <Image src={'nextjs.svg'} width={80} height={80} alt="Icone do NextJS" title="NextJS" className="basic_icon__tecnologia"/>
                    </Link>
                    <Link href={'https://nestjs.com/'} target="_blank">
                        <Image src={'nestjs.svg'} width={80} height={80} alt="Icone do NestJS" title="NestJS" className="basic_icon__tecnologia"/>
                    </Link>
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