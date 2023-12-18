import Image from "next/image";
import HtmlIcon from "@/public/html.svg";
import CssIcon from "@/public/css.svg";
import JSIcon from "@/public/javascript.svg";
import TSIcon from "@/public/typescript 1.svg";
import PyIcon from "@/public/python.svg";
import WPIcon from "@/public/wordpress.svg";
import GitIcon from "@/public/git.svg";
import DockerIcon from "@/public/docker.svg";
import NodeIcon from "@/public/nodejs.svg";
import ShellIcon from "@/public/shell.svg";
import PostgresIcon from "@/public/postgresql.svg";
import MySQLIcon from "@/public/mysql.svg";
import ReactIcon from "@/public/react.svg";
import VueJSIcon from "@/public/vuejs.svg";
import SassIcon from "@/public/sass.svg";
import TailwindIcon from "@/public/tailwindcss.svg";
import DjangoIcon from "@/public/django.svg";
import FlaskIcon from "@/public/flask.svg";
import NextIcon from "@/public/nextjs.svg";
import NestIcon from "@/public/nestjs.svg";

export default function Tecnologias (){
    return (
        <section className="pt-28" id="principais-tecnologias">
            <h2 className="basic_title">Principais Tecnologias</h2>
            <div className="max-w-screen-xl mx-auto px-5 flex flex-col justify-between items-center
            lg:flex-row">
                <div className="max-w-xl flex flex-wrap gap-9 justify-around pb-8 md:pb-20 lg:w-1/2 lg:pb-0">
                    <Image src={HtmlIcon} alt="Icone do HTML5" title="HTML5" className="basic_icon__tecnologia"/>
                    <Image src={CssIcon} alt="Icone do CSS" title="CSS3" className="basic_icon__tecnologia"/>
                    <Image src={JSIcon} alt="Icone do JavaScript" title="JavaScript" className="basic_icon__tecnologia"/>
                    <Image src={TSIcon} alt="Icone do TypeScript" title="TypeScript" className="basic_icon__tecnologia"/>
                    <Image src={PyIcon} alt="Icone do Python" title="Python" className="basic_icon__tecnologia"/>
                    <Image src={WPIcon} alt="Icone do WordPress" title="WordPress" className="basic_icon__tecnologia"/>
                    <Image src={GitIcon} alt="Icone do Git" title="Git" className="basic_icon__tecnologia"/>
                    <Image src={DockerIcon} alt="Icone do Docker" title="Docker" className="basic_icon__tecnologia"/>
                    <Image src={NodeIcon} alt="Icone do NodeJS" title="NodeJS" className="basic_icon__tecnologia"/>
                    <Image src={ShellIcon} alt="Icone do Shell prompt" title="Prompt" className="basic_icon__tecnologia"/>
                    <Image src={PostgresIcon} alt="Icone do PostgreSQL" title="PostgreSQL" className="basic_icon__tecnologia"/>
                    <Image src={MySQLIcon} alt="Icone do MySQL" title="MySQL" className="basic_icon__tecnologia"/>
                    <Image src={ReactIcon} alt="Icone do ReactJS" title="React" className="basic_icon__tecnologia"/>
                    <Image src={VueJSIcon} alt="Icone do VueJS" title="VueJS" className="basic_icon__tecnologia"/>
                    <Image src={SassIcon} alt="Icone do Sass" title="Sass" className="basic_icon__tecnologia"/>
                    <Image src={TailwindIcon} alt="Icone do Tailwind CSS" title="Tailwind Css" className="basic_icon__tecnologia"/>
                    <Image src={DjangoIcon} alt="Icon do Django" title="Django" className="basic_icon__tecnologia"/>
                    <Image src={FlaskIcon} alt="Icone do Flask" title="Flask" className="basic_icon__tecnologia"/>
                    <Image src={NextIcon} alt="Icone do NextJS" title="NextJS" className="basic_icon__tecnologia"/>
                    <Image src={NestIcon} alt="Icone do NestJS" title="NestJS" className="basic_icon__tecnologia"/>
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