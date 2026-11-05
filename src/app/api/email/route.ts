import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Função para lidar com requisições POST
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Verificação de campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 });
    }

    // Configuração do transporte SMTP usando variáveis de ambiente
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Obtém o host do .env
      port: parseInt(process.env.SMTP_PORT || '465'), // Porta (465 para SSL, 587 para TLS)
      secure: process.env.SMTP_PORT === '465', // true para 465 (SSL), false para 587 (TLS)
      auth: {
        user: process.env.EMAIL_USER, // Usuário do e-mail
        pass: process.env.EMAIL_PASS, // Senha do e-mail
      },
      connectionTimeout: 10000,  // Tempo de conexão (10 segundos)
      greetingTimeout: 10000,    // Tempo para resposta do servidor (10 segundos)
      socketTimeout: 10000,      // Tempo para socket ficar aberto (10 segundos)
    });

    // Envio do email
    await transporter.sendMail({
      from: `"assoftware.com.br" <${process.env.EMAIL_USER}>`, // Remetente
      to: process.env.EMAIL_USER, // Email de destino
      subject: 'Nova mensagem do formulário de contato', // Assunto
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`, // Corpo em texto simples
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${message}</p>`, // Corpo em HTML
    });

    // Retorno de sucesso
    return NextResponse.json({ success: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Verificação se o erro é relacionado a timeout
    if ((error as unknown as { code: string }).code === 'ETIMEDOUT') {
      return NextResponse.json({ error: 'Tempo de conexão com o servidor expirou. Tente novamente.' }, { status: 500 });
    }
    
    // Caso não seja um erro de timeout, retornar erro genérico
    return NextResponse.json({ error: 'Erro ao enviar email.' }, { status: 500 });
  }
}

// Função para lidar com métodos não permitidos
export function OPTIONS() {
  return NextResponse.json({ message: 'Método permitido.' }, { status: 200 });
}
