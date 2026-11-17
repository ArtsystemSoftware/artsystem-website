'use client';
import { SectionTitle } from "@/components/SectionTitle";
import { useState, useEffect, useRef } from "react";
import { FaPhone, FaEnvelope, FaMap } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contato() {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 800);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Enviando...');
        setIsSubmitting(true);

        try {
            const token = await recaptchaRef.current?.executeAsync();
            if (!token) {
                setStatus('Erro: reCAPTCHA não validado.');
                setIsSubmitting(false);
                return;
            }

            const response = await fetch('/api/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, token }),
            });

            if (!response.ok) {
                const errorMessage = await response.text(); // Captura mensagem detalhada do backend
                console.error('Erro no backend:', errorMessage);
                setStatus('Erro ao enviar a mensagem. Tente novamente.');
                return;
            }

            setStatus('Mensagem enviada com sucesso!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Erro na requisição:', error);
            setStatus('Erro ao enviar a mensagem. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-screen lg:pt-52 lg:px-32 mb-32 bg-cover bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')]">
            <div className="flex flex-col lg:flex-row lg:grid md:grid-cols-2 items-center justify-center my-20">
                <div>
                    <SectionTitle preTitle="Contato" title="Fale Conosco" align={isMobile ? undefined : "left"}>
                        Você é sempre bem-vindo para entrar em contato conosco. Nosso atendimento ao cliente está
                        disponível de segunda a sexta, das 9h00 às 20h00. e sábado a domingo, das 10h00 às 18h00. (GMT
                        +3). Estamos ansiosos para ouvir de você!
                    </SectionTitle>
                    <ul className="px-12 lg:px-10 xl:px-0">
                        <li className="flex mb-4">
                            <FaPhone className="text-2xl text-custom1" />
                            <p className="ml-3 text-xl"><strong>Tel. Atendimento:</strong> +55 (11) 91740-1730</p>
                        </li>
                        <li className="flex mb-4">
                            <FaPhone className="text-2xl text-custom1" />
                            <p className="ml-3 text-xl"><strong>Tel. Suporte:</strong> +55 (11) 91740-1730</p>
                        </li>
                        <li className="flex mb-4">
                            <FaEnvelope className="text-2xl text-custom1" />
                            <p className="ml-3 text-xl"><strong>E-mail:</strong> comercial@assoftware.com.br</p>
                        </li>
                        <li className="flex mb-4">
                            <FaMap className="text-2xl text-custom1" />
                            <p className="ml-3 text-xl">Av. Dr. Getúlio Vargas, 582 – Sala 31 – Vila Guaraní – Mauá – SP</p>
                        </li>
                    </ul>
                    <form className="mt-8 space-y-6 px-12 lg:px-10 xl:px-0" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom1 focus:border-custom1 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom1 focus:border-custom1 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                rows={4} 
                                required 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-custom1 focus:border-custom1 sm:text-sm"
                            ></textarea>
                        </div>
                        <div>
                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lez858qAAAAABtna5lDYNkt21UzgFq4Q3fbcdyN"}
                                ref={recaptchaRef}
                                size="invisible"
                            />
                        </div>
                        <div>
                            <button 
                                type="submit" 
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-custom1 hover:bg-custom2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom1"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </button>
                        </div>
                        <p className="text-sm text-gray-600">{status}</p>
                    </form>
                </div>
                <div className="flex justify-center w-[70%] md:w-[50%] lg:w-[70%] xl:w-[65%] bg-custom1 rounded-3xl mx-24 mb-12 mt-32 lg:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2672851499933!2d-46.45252882385071!3d-23.666397665461076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce695a947ea7bb%3A0x99813c7db90fd720!2sAv.%20Dr.%20Getúlio%20Vargas%2C%20582%20-%20sala%2031%20-%20Vila%20Guarani%2C%20Mau%C3%A1%20-%20SP%2C%2009310-180!5e0!3m2!1spt-BR!2sbr!4v1733456942184!5m2!1spt-BR!2sbr"
                        width="538"
                        height="776"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-3xl translate-y-[-30px] translate-x-[-15px] px-30 lg:px-0"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    );
}
