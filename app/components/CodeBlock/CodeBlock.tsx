"use client"
import hljs from "highlight.js";
import { useEffect } from "react";
import { ReactNode } from "react";
import 'highlight.js/styles/atom-one-dark.css';


export default function CodeBlock({ children }: { children?: ReactNode }){
    useEffect(()=>{
        hljs.highlightAll()
    },[])

    return (
        <code className="language-python">{children}</code>
    )
}