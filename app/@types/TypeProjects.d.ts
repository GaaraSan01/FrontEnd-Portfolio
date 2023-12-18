interface TypeProjetos {
    id: number,
    imagem: string,
    titulo: string,
    categoria: string,
    descricao: string,
    link: string
}

export type ApiResponse = TypeProjetos[]