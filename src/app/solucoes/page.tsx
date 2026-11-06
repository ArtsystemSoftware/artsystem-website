'use client';   
import Image from "next/image";
import Link from "next/link";
import imageSolucoes from "@/img/imageSolucoes.webp";
import imageBeneficio from "@/img/beneficios2.webp";
import imagePdv1 from "@/img/pdv1.webp";
import imagePdv2 from "@/img/pdv2.webp";
import imagePdv3 from "@/img/pdv3.webp";
import imageErp from "@/img/erp.webp";
import { SectionTitle } from "@/components/SectionTitle";
import { BreadMark } from "@/components/artfood/ArtFoodLogo";
import { useState, useEffect } from "react";
import { ManualGear, CircularConnection } from '@icon-park/react';
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Solucoes() {
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
        <div className="w-screen pt-52 md:pb-0 bg-cover bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')]">
            <div className="grid md:grid-cols-2 md:mx-10 xl:mx-52 justify-center">
                <div>
                    <Image src={imageSolucoes} alt="Sobre Image" className="w-[100%]"/>
                </div>
                <div className="flex items-center lg:mx-20">
                    <SectionTitle 
                        preTitle="Soluções para o Seu Comércio" 
                        title="Conheça Nossas Soluções" 
                        align={isMobile ? undefined : "left"}
                    >
                        Os produtos da ArtSystem compõem um quadro geral montado para atender os mais variados tipos de comércio. Dentre nossos clientes há hipermercados, supermercados, empórios, pequenos mercados e lojas de bairro, hortifrútis, importadoras, casa de carnes, atacadistas, padarias e panificadoras, rotisserie, lanchonetes e restaurantes, magazines, e lojas de acessórios automotivos.
                        <br/>
                        <br/>
                        A escolha da solução ideal para sua empresa será de acordo com o ramo de atividade. A ArtSystem por meio de um levantamento minucioso feito pelos nossos consultores é capaz de identificar as necessidades de cada um dos seus clientes, propondo soluções que vão facilitar, agilizar e tornar confiável as operações que serão automatizadas.
                    </SectionTitle>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center mt-20 py-32 bg-[#F1F1F1] dark:bg-[#3D3D3D] w-screen">
            <div className="w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1559px] bg-white dark:bg-[#171717] shadow-md rounded-[20px] mb-20 lg:mb-32">
                <div className="flex flex-col lg:flex-row lg:grid md:grid-cols-2 items-center justify-center my-20 ">
                    <div className="flex flex-col items-center lg:items-start mx-20 mb-12 lg:mb-0 md:ml-20">
                        <ManualGear className="text-5xl dark:text-white text-[#171717]"/>
                        <h2 className="mt-6 text-3xl font-bold">Artsystem-PDV</h2>
                        <p className="text-center lg:text-start text-gray-500 dark:text-gray-300 mt-6">
                            O <strong>ArtSystem-PDV</strong> é a solução para a automação de pontos de venda. Integrado a diversos dispositivos como balanças, impressoras fiscais, SAT, NFC-e , TEF e impressoras de cheques. 
                            <br/>
                            <br/>
                            O <strong>ArtSystem</strong> oferece um meio rápido, confiável e eficiente de eliminar filas no seu ponto de venda.
                            Automatize seu ponto de vendas com total eficiência e segurança. Com o <strong>ArtSystem</strong> os operadores de caixa e os supervisores terão acesso a toda praticidade e agilidade que é peculiar neste tipo de operação, tudo isso sem abrir mão da agilidade.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                       <Image src={imageBeneficio} alt="Benefício Image" className="w-[70%] rounded-xl shadow-lg"/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:items-start mx-20 mb-20">
                    <h2 className="mt-6 text-3xl font-bold">Legislação Fiscal</h2>
                    <p className="text-center lg:text-start text-gray-500 dark:text-gray-300 mt-6 lg:pr-40">
                        O <strong>ArtSystem-PDV</strong> está em constante atualização para adequação à legislação fiscal. Passando com sucesso por diversos processos de homologação, o <strong>ArtSystem-PDV</strong> é um software maduro, que atende clientes em todo Brasil.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center lg:items-start mx-20 mb-10">
                    <h2 className="mt-6 text-3xl font-bold text-center lg:text-start">Totalmente integrado ao ArtSystem-ERP</h2>
                    <p className="text-center lg:text-start text-gray-500 dark:text-gray-300 mt-6 lg:pr-40">
                        O maior diferencial da solução de gestão da <strong>ArtSystem-PDV</strong> é a integração entre o <strong>ArtSystem-PDV</strong> e <strong>ArtSystem-ERP</strong>. Através do exclusivo serviço de integração desenvolvido pela <strong>ArtSystem</strong>, os operadores de caixa podem realizar consultas, utilizar créditos de devolução como finalizadoras, conceder descontos e muito mais. Além disto, quando integrado ao <strong>ArtSystem-ERP</strong>, o <strong>ArtSystem-PDV</strong> se beneficia 100% dos serviços de sincronização, eliminando qualquer tipo de processo manual de importação e exportação de dados.
                    </p>
                </div>
                <div className="mt-10">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            1280: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 1,
                            },
                        }}
                        className="flex justify-center items-center"
                    >
                        <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                            <Image src={imagePdv1} alt="Carolina Logo" className="w-[100%] p-14" />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                            <Image src={imagePdv2} alt="Litoral Logo" className="w-[100%] p-14" />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center text-gray-400 dark:text-gray-400">
                            <Image src={imagePdv3} alt="Lourencio Logo" className="w-[100%] p-14" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1559px] bg-white dark:bg-[#171717] shadow-md rounded-[20px]">
                <div className="flex flex-col lg:flex-row lg:grid md:grid-cols-2 items-center justify-center my-20 ">
                    <div className="flex flex-col items-center lg:items-start mx-20 mb-12 lg:mb-0 md:ml-20">
                        <CircularConnection className="text-5xl dark:text-white text-[#171717]"/>
                        <h2 className="mt-6 text-3xl font-bold">Artsystem-ERP</h2>
                        <p className="text-center lg:text-start text-gray-500 dark:text-gray-300 mt-6">
                            Mais que um simples programa de gestão, o <strong>ArtSystem-ERP</strong> é uma ferramenta que ajuda a criar uma cultura de resultados positivos nas empresas. Completo, o <strong>ArtSystem-ERP</strong> é o que há de mais moderno em softwares para gestão de varejos e atacados.
                            <br/>
                            <br/>
                            O <strong>ArtSystem-ERP</strong> é uma solução completa para varejistas e atacadistas de todos os tamanhos. Com ele é possível controlar o abastecimento das lojas, gerenciar a carteira de clientes, integrar o fluxo de caixa a instituições financeiras, atender aos requerimentos fiscais e muito mais!
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                       <Image src={imageErp} alt="Benefício Image" className="w-[70%] rounded-xl shadow-lg"/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:items-start mx-20 mb-20">
                    <h2 className="mt-6 text-3xl font-bold">Completo e descomplicado</h2>
                    <p className="text-center lg:text-start text-gray-500 dark:text-gray-300 mt-6 lg:pr-40">
                        Quem disse que é preciso ser complicado para ser completo? Com o <strong>ArtSystem-ERP</strong> os usuários têm acesso a uma experiência de uso inédita em programas para a mesma finalidade. Através de uma interface gráfica intuitiva, este software eleva a produtividade dos usuários.
                    </p>
                </div>
            </div>

            <div className="w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1559px] bg-white dark:bg-[#171717] shadow-md rounded-[20px] mt-20 overflow-hidden">
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="mx-10 my-14 lg:mx-20">
                        <div className="flex items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-artfoodLight dark:bg-artfood/10">
                                <BreadMark className="h-8 w-8" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-artfood">Food Service</p>
                                <h2 className="text-3xl font-bold">Art Food</h2>
                            </div>
                        </div>
                        <p className="mt-6 text-gray-500 dark:text-gray-300">
                            O <strong>Art Food</strong> é a solução de atendimento para restaurantes, padarias, lanchonetes e cafeterias. Cardápio digital, comandas, painel do garçom, balança e faturamento em uma interface simples e integrada ao ecossistema ArtSystem.
                        </p>
                        <ul className="mt-5 space-y-2 text-sm text-gray-500 dark:text-gray-300">
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-artfood" /> Atendimento de mesa e comandas em tempo real</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-artfood" /> Cardápio digital com departamentos e opções</li>
                            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-artfood" /> Integração com balança, PDV e ERP</li>
                        </ul>
                        <Link
                            href="/artfood"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FF513F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e04736]"
                        >
                            Conhecer o Art Food
                            <ArrowRightIcon className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="flex justify-center p-6 lg:p-10">
                        <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-950 p-2 shadow-xl">
                            <div className="rounded-xl bg-slate-50 p-3.5">
                                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                                    <div className="flex items-center gap-1.5">
                                        <BreadMark className="h-5 w-5" />
                                        <span className="text-xs font-extrabold text-zinc-900">Art <span className="text-artfood">Food</span></span>
                                    </div>
                                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[9px] font-bold text-zinc-500">Mesa 07</span>
                                </div>
                                <div className="mt-2 grid grid-cols-2 gap-2">
                                    {[
                                        { emoji: "🧀", name: "Pão de Queijo", price: "R$ 8,50" },
                                        { emoji: "☕", name: "Cappuccino", price: "R$ 9,90" },
                                        { emoji: "🍰", name: "Bolo de Cenoura", price: "R$ 11,50" },
                                        { emoji: "🥐", name: "Croissant", price: "R$ 12,90" },
                                    ].map((item) => (
                                        <div key={item.name} className="rounded-lg border border-zinc-100 bg-white p-2">
                                            <span className="text-lg">{item.emoji}</span>
                                            <p className="mt-0.5 text-[10px] font-bold leading-tight text-zinc-800">{item.name}</p>
                                            <p className="text-[9px] font-bold text-artfood">{item.price}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-2 flex items-center justify-between rounded-lg bg-zinc-900 px-3 py-2 text-white">
                                    <span className="text-[10px] font-semibold text-zinc-400">Comanda 042</span>
                                    <strong className="text-xs">R$ 86,40</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}