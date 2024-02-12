import { getPost } from "@/app/api/notion";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/app/components/CodeBlock/CodeBlock";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/footer/Footer";


export default async function PagePost({ params }: {params: {slug: string}}) {
    const post = await getPost(params.slug)

    return(
        <>
            <Header />
            <main className="min-h-screen sm:px-3 pt-20 pb-14 md:px-4">
                <div className="max-w-[820px] mx-auto">
                    <div className="py-12 border-y-2 border-blue">
                        <h1 className="font-bold text-4xl text-blue font-serif text-center">{post.title}</h1>
                    </div>
                    <ReactMarkdown
                        components={{
                            h2: ({node, ...props}) => <h2 className="text-blue text-3xl font-serif font-bold py-7" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-blue text-2xl font-serif font-bold py-4" {...props} />,
                            p: ({node, ...props}) => <p className="py-2 text-justify" {...props} />,
                            img: ({node, ...props}) => <img className="max-h-96 mx-auto py-4" {...props} />,
                            code: ({node, ...props}) => <CodeBlock {...props}/>,
                            ul: ({node, ...props}) => <ul className="list-disc pl-4" {...props}/>,
                            a: ({node, ...props}) => <a className="text-blue-secundary underline" target="_blank"{...props} />
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </main>
            <Footer />
        </>
    )
}