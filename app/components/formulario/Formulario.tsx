'use client'
import { useState } from "react"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendMails } from "@/app/api/_api";


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
        reset
    } = useForm<FormProps>({
        mode:'onBlur',
        resolver: zodResolver(schema)
    })
    const [onHover, setOnHover] = useState(false)

    const onSubmitForm = async (data: FormProps) => {
        const formatData = {
            subject: `Portfólio | ${data.name}`,
            html: `
                <h1>Formulário do Portfólio</h1>
                <ul>
                    <li>
                        <strong>Nome:</strong>
                        ${data.name}
                    </li>
                    <li>
                        <strong>Telefone:</strong> ${data.tel}
                    </li>
                    <li>
                        <strong>Email:</strong> ${data.email}
                    </li>
                    <li><strong>Assunto:</strong> ${data.assunto}</li>
                </ul>
            `
        }

        try {
            const response = await SendMails.post('/', formatData)
            reset()
            return `Email enviado com sucesso! ${response.status}`
        } catch (error) {
            console.error({
                message: 'Erro ao se conectar à API de emails!'
            })
        }        
    }

    return (
        <form className="flex flex-col gap-y-8 max-w-5xl w-full" onSubmit={handleSubmit(onSubmitForm)}>
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex flex-col md:w-1/2">
                    <input 
                        type="text"  
                        id="nome" 
                        className="basic_input md:w-full"
                        placeholder="Digite seu nome..."
                        {...register('name')}
                    />
                    {errors.name && <span className="text-red-700 text-sm">{errors.name?.message}</span>}
                </div>

                <div className="flex flex-col md:w-1/2">
                    <input 
                        type="tel"
                        id="telefone" 
                        className="basic_input w-full"
                        placeholder="Digite seu telefone/whatsapp..."
                        {...register('tel')}
                    />
                    {errors.tel && <span className="text-red-700 text-sm">{errors.tel?.message}</span>}
                </div>
            </div>
            <div>
                <input 
                    type="email" 
                    id="email" 
                    className="basic_input w-full"
                    placeholder="Digite seu e-mail..."
                    {...register('email')}
                />
                {errors.email && <span className="text-red-700 text-sm">{errors.email?.message}</span>}
            </div>
            <div>
                <textarea 
                    id="assunto" 
                    className="basic_input w-full min-h-[300px]"
                    placeholder="Digite o assunto..."
                    {...register('assunto')}
                ></textarea>
                {errors.assunto && <span className="text-red-700 text-sm">Preencha o assunto!</span>}
            </div>
            <button
                className="basic_bottom max-w-[150px]"
                onMouseEnter={() => setOnHover(!onHover)}
                onMouseLeave={() => setOnHover(!onHover)}
                type="submit"
            >
                Enviar
                <svg width="31" height="15" className={onHover ? 'fill-white' : 'fill-blue'} viewBox="0 0 31 15"  xmlns="http://www.w3.org/2000/svg">
                    <path id="Arrow 1" d="M30.7071 8.20711C31.0976 7.81658 31.0976 7.18342 30.7071 6.79289L24.3431 0.428931C23.9526 0.0384069 23.3195 0.0384069 22.9289 0.428931C22.5384 0.819456 22.5384 1.45262 22.9289 1.84315L28.5858 7.5L22.9289 13.1569C22.5384 13.5474 22.5384 14.1805 22.9289 14.5711C23.3195 14.9616 23.9526 14.9616 24.3431 14.5711L30.7071 8.20711ZM0 8.5H30V6.5H0L0 8.5Z"/>
                </svg>
            </button>

            {
                isSubmitting && 
                <span className="font-semibold text-blue-secundary text-center">Menssagem enviada com sucesso!</span>
            }
        </form>
    )
}