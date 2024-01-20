import Link from "next/link"

export const ListMenu = () => {
    return (
        <ul className="text-white lg:flex lg:gap-8 sm:hidden px-2">
            <li>
                <Link href={'/#sobre-mim'} className="basic_itemListMenu">
                    Sobre
                </Link>
            </li>
            <li>
                <Link href={'/#principais-tecnologias'} className="basic_itemListMenu">
                    Tecnologias
                </Link>
            </li>
            <li>
                <Link href={'/#meus-principais-projetos'} className="basic_itemListMenu">
                    Projetos
                </Link>
            </li>
            <li>
                <Link href={'/#contato'} className="basic_itemListMenu">
                    Contato
                </Link>
            </li>
            <li>
                <Link href={'/blog'} className="basic_itemListMenu">
                    Blog
                </Link>
            </li>
        </ul>
    )
}
