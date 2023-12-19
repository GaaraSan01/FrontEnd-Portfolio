'use client'
import { useState } from "react"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
    name: z.string()
    .min(3, 'Por favor, informe um nome válido!'),

    tel: z.string()
    .min(11, 'Por favor, digite um telefone válido!'),

    email: z.string()
    .email('Formato de email inválido!'),

    assunto: z.string()
})

type FormProps = z.infer<typeof schema>

export const Formulario = () => {
    const {
        register, 
        handleSubmit, 
        formState:{errors, isSubmitting},
        reset,
        getValues
    } = useForm<FormProps>({
        mode:'onBlur',
        resolver: zodResolver(schema)
    })
    const [onHover, setOnHover] = useState(false)

    return (
        <form className="flex flex-col gap-y-8 max-w-5xl w-full ">
            <div className="flex flex-col gap-6 md:flex-row">
                <input 
                    type="text"  
                    id="nome" 
                    className="basic_input md:w-1/2"
                    placeholder="Digite seu nome..."
                    {...register('name')}
                />
                <input 
                    type="tel"
                    id="telefone" 
                    className="basic_input md:w-1/2"
                    placeholder="Digite seu telefone/whatsapp..."
                    {...register('tel')}
                />
            </div>
            <div>
                <input 
                    type="email" 
                    id="email" 
                    className="basic_input w-full"
                    placeholder="Digite seu e-mail..."
                    {...register('email')}
                />
            </div>
            <div>
                <textarea 
                    name="Assunto" 
                    id="assunto" 
                    className="basic_input w-full min-h-[300px]"
                    placeholder="Digite o assunto..."
                ></textarea>
            </div>
            <button
                className="basic_bottom max-w-[150px]"
                onMouseEnter={() => setOnHover(!onHover)}
                onMouseLeave={() => setOnHover(!onHover)}
            >
                Enviar
                <svg width="31" height="15" className={onHover ? 'fill-white' : 'fill-blue'} viewBox="0 0 31 15"  xmlns="http://www.w3.org/2000/svg">
                    <path id="Arrow 1" d="M30.7071 8.20711C31.0976 7.81658 31.0976 7.18342 30.7071 6.79289L24.3431 0.428931C23.9526 0.0384069 23.3195 0.0384069 22.9289 0.428931C22.5384 0.819456 22.5384 1.45262 22.9289 1.84315L28.5858 7.5L22.9289 13.1569C22.5384 13.5474 22.5384 14.1805 22.9289 14.5711C23.3195 14.9616 23.9526 14.9616 24.3431 14.5711L30.7071 8.20711ZM0 8.5H30V6.5H0L0 8.5Z"/>
                </svg>
            </button>
        </form>
    )
}