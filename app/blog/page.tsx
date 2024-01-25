import type { Metadata } from "next";
import { getPosts } from "../api/notion";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Blog | Vinícius H.',
    description: 'Blog pessoal de Vinicius H. que fala sobre a área de Desenvolvimento de Software.',
  }

export default async function Blog() {
    const posts = await getPosts()

    return(
        <>
            <Header />
            <main className="px-4 h-screen">
                <div className="container mx-auto py-28">
                    <h1 className="font-serif text-blue text-4xl font-bold mb-7">Blog</h1>
                    <ul>
                        {posts.map((post) => {
                            return (
                                <li>
                                    <Link href={`blog/${post.slug}`}>        
                                        <div className="bg-white shadow-xl border-2 border-blue-secundary p-4 my-4">
                                            <h1 className="font-serif font-semibold text-blue text-2xl">
                                                {post.title}
                                            </h1>
                                            {post.tags.map((tag) => (
                                                <span className="text-green text-sm font-bold">
                                                    {" "}
                                                    #{tag}
                                                </span>
                                            ))}
                                            <p className="text-sm">
                                                {new Intl.DateTimeFormat('pt-BR').format(new Date(post.createdAt))}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    )
}