"use client"
import hljs from "highlight.js";
import { useEffect } from "react";
import { ReactNode } from "react";
import 'highlight.js/styles/default.css';


export default function CodeBlock({ children }: { children?: ReactNode }){

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    return (
        <code className="hljs p-4">{children}</code>
    )
}