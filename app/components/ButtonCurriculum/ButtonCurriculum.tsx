'use client'

type TypeCurriculum = {
    curriculumUrl: string
}
export default function ButtonCurriculum({curriculumUrl}: TypeCurriculum) {
    const filename = 'curriculum.pdf'

    return (
        <button
            type="button"
            className="basic_bottom"
            onClick={() => {
                fetch(curriculumUrl)
                .then((response) => response.blob())
                .then((data) => {
                    const url = URL.createObjectURL(data)
                    const link = document.createElement('a')
                    link.href = url
                    link.download = filename
                    link.click()
                })
            }}
        >
            Baixar curriculum
        </button>
    )
}