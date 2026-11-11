'use client';   
import Image from "next/image";
import imageSobre from "@/img/imageSobre.webp";
import { SectionTitle } from "@/components/SectionTitle";
import { useState, useEffect } from "react";
import { FaBook, FaRegLightbulb, FaHandshake, FaMountain, FaRegEye, FaRegGem } from 'react-icons/fa';

export default function Sobre() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Verifica o tamanho da tela na montagem do componente

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
    <>
        <div className="w-screen pt-52 md:pb-0  bg-cover bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')]">
            <div className="grid md:grid-cols-2 md:mx-10 xl:mx-52 justify-center">
                <div>
                    <Image src={imageSobre} alt="Sobre Image" className="w-[100%]"/>
                </div>
                <div className="flex items-center lg:mx-20">
                    <SectionTitle 
                        preTitle="Por que Escolher a Artsystem?" 
                        title="Soluções Inovadoras para o Seu Comércio" 
                        align={isMobile ? undefined : "left"}
                    >
                        As soluções da ArtSystem são projetadas para levar sua empresa a um novo patamar. Com ferramentas avançadas e eficientes, nossa tecnologia permite uma gestão mais precisa e otimizada, facilitando a tomada de decisões estratégicas. Ao integrar processos e oferecer uma visão completa do seu negócio, ajudamos a reduzir custos operacionais e aumentar a produtividade. Escolher a ArtSystem é investir em inovação e crescimento sustentável para o seu comércio.
                    </SectionTitle>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center mt-20 py-32 bg-[#F1F1F1] dark:bg-[#3D3D3D] w-screen ">
            <SectionTitle 
                preTitle="Por que Escolher a Artsystem?" 
                title="Soluções Inovadoras para o Seu Comércio" 
            >
                Nossas soluções levam seu comércio a um novo patamar de administração e gestão, oferecendo ferramentas eficientes e modernas para otimizar processos e impulsionar resultados.
                <hr className="mt-10 border-2 border-custom1"/>
            </SectionTitle>
            <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 w-screen items-center justify-center mt-20">
                <div className="flex flex-col items-center mx-10 lg:mx-32 text-center">
                    <FaRegLightbulb className="text-7xl text-custom1"/>
                    <h2 className="mt-6 text-xl font-bold">Soluções para empresas em crescimento</h2>
                    <p className="text-center text-gray-500 dark:text-gray-300 mt-6 ">
                        Em sua grande maioria, as empresas têm dificuldade em encontrar formas rentáveis e sustentáveis de crescer. 
                        <br/>
                        <br/>
                        O investimento em múltiplos softwares não lhes proporcionam o controle total de seus negócios enquanto os problemas para obter informações apropriadas no momento adequado para tomada de decisões persistem. Estas empresas necessitam de soluções integradas, econômicas e de fácil utilização, projetadas para contribuir com exatidão em seu crescimento. Nossas soluções atendem à estes requisitos.
                    </p>
                </div>
                <div className="flex flex-col items-center mt-20 md:mt-0 mx-10 lg:mx-32">
                    <FaHandshake className="text-7xl text-custom1  "/>
                    <h2 className="mt-6 text-xl font-bold text-center">Soluções para empresas em crescimento</h2>
                    <p className="text-center text-gray-500 dark:text-gray-300 mt-6">
                     Nosso objetivo é participar do sucesso de sua empresa resolvendo questões administrativas e operacionais de maneira rápida, moderna e inteligente.Muitas empresas já estão utilizando nossas soluções para sustentar seu crescimento. 
                    <br/>
                    <br/>
                    Ao escolher a ArtSystem como provedora de soluções em TI, sua empresa contará com experiência de profissionais com mais de 25 anos em tecnologia e gestão de negócios.
                    <br/>
                    <br/>
                    <br/>
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-screen items-center justify-center mt-20 ">
                <FaBook className="text-6xl text-custom1"/>
                <h2 className="mt-6 text-xl font-bold">Soluções para empresas em crescimento</h2>
                <p className="text-center text-gray-500 dark:text-gray-300 mt-6 mx-10 lg:mx-32 xl:mx-80">
                A nossa história começa bem antes de sua fundação, pois seus fundadores tiveram em suas carreiras passagens por empresas de tecnologia e desenvolvimento de sistemas para empresas de varejo, conhecendo assim as reais necessidades do dia a dia das empresas e de suas dificuldades em concretizar essas necessidades nos sistemas que estavam disponíveis.
                <br/>
                <br/>
                Diante desta oportunidade de fazer algo diferente do que existia no mercado, surge a ideia de criar um sistema de gestão comercial voltado para a simplicidade na operação, mas com a complexidade e a sofisticação das melhores práticas de mercado.
                <br/>
                <br/>
                Essa visão também foi partilhada pelos clientes Art ERP, pois esse software teve sua “gestação” dentro de um ambiente operacional da rede de supermercados Lourencini, o que permitia colocar em pratica as ideias e as tecnologias que estavam sendo desenvolvidas.
                <br/>
                <br/>
                Esse ambiente trouxe ao Art ERP algo que não se vê nos softwares disponíveis do mercado, que é a aplicação das regras de negócio na pratica. Dessa forma o Art ERP tornou-se um software confiável, robusto e de fácil operação, sem abrir mão das mais modernas práticas de mercado.
                </p>
            </div>
            <div className="mt-20">
                <SectionTitle 
                    preTitle="Nossa essência" 
                    title="Valores que movem a Artsystem" 
                >
                    Na Artsystem, nossos valores guiam todas as nossas ações. Acreditamos em construir parcerias sólidas com nossos clientes, baseadas em confiança, respeito e ética. Nosso objetivo é ser parte do sucesso de cada cliente, oferecendo soluções personalizadas e inovadoras que otimizam seus processos e impulsionam seus negócios.
                    <hr className="mt-10 border-2 border-custom1"/>
                </SectionTitle>
                <div className="flex flex-col md:flex-row md:grid lg:grid-cols-3 w-screen items-center justify-center mt-20">
                    <div className="flex flex-col items-center ">
                        <FaMountain className="text-7xl text-custom1"/>
                        <h2 className="mt-6 text-xl font-bold">Missão</h2>
                        <p className="text-center text-gray-500 dark:text-gray-300 mt-6 mx-32">
                            Nossa missão é ajudar aos nossos clientes a ganharem tempo na administração de seus negócios de modo confiável e ágil, diminuindo seus custos de operação e permitindo que este tempo seja empregado em inovação e na busca de oportunidades de mercado.
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-20 lg:mt-0">
                        <FaRegEye className="text-7xl text-custom1"/>
                        <h2 className="mt-6 text-xl font-bold">Visão</h2>
                        <p className="text-center text-gray-500 dark:text-gray-300 mt-6 mx-32">
                            Tornar-se uma empresa de referência no desenvolvimento de soluções automatizadas para empresas que buscam excelência na sua administração e operação. Ser incansável nas melhorias tecnológicas e operacionais, mantendo um espírito de liderança e de confiança naquilo que produz e realiza. E acima de tudo, ser parte do sucesso dos nossos clientes.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-20 lg:mt-0">
                        <FaRegGem className="text-7xl text-custom1"/>
                        <h2 className="mt-6 text-xl font-bold">Valores</h2>
                        <p className="text-center text-gray-500 dark:text-gray-300 mt-6 mx-32">
                            Ter a preferencia de nossos clientes pelos bons serviços que prestamos. Ter em nossos clientes o objetivo maior, praticando a ética, simplicidade, respeito e humanidade.
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}