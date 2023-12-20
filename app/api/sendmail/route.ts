import { STATUS_CODES } from "http";
import nodemeiler from "nodemailer";

export async function POST(request: Request) {
    const transporter = nodemeiler.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const contact = {
        from: process.env.EMAIL,
        to: process.env.EMAIL_CONTACT
    }

    const response = await request.text()
    const data = JSON.parse(response)
    const contatBody = {
        ...contact,
        ...data
    }

    try {
        await transporter.sendMail(contatBody)
        return new Response(STATUS_CODES[200], {
            status: 200,
            statusText: "Email enviado com sucesso!",
        });
    } catch (error) {
        console.error({
            message: 'Erro na configuração do SMTP',
            error
        })
        return new Response(STATUS_CODES[400], {
            status: 400,
            statusText: "Erro ao enviar o email",
        });
    }
}