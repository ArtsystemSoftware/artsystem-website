import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";


import { benefitOne, benefitTwo } from "@/components/data";
import React from 'react';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        {/* Seção de Download dos Apps */}
        <div className="py-16">

          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Baixe nosso aplicativo
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Acesse nossos serviços diretamente do seu smartphone. Disponível para Android e iOS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Google Play Store */}
              <a
                href="https://play.google.com/store/apps/details?id=com.artsystem.app&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Disponível no</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>

              {/* Apple App Store */}
              <a
                href="https://apps.apple.com/br/app/artsystem/id6749015669"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Baixar na</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <SectionTitle
          preTitle="Sobre Artsystem"
          title="A solução ideal para o seu negócio"
        >
          Mais que um simples programa de gestão, o Art ERP é uma ferramenta que ajuda a criar uma cultura de resultados positivos nas empresas. Completo, o Art ERP é o que há de mais moderno em softwares para gestão de varejos e atacados.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </Container>


      <div className="bg-[#F1F1F1] dark:bg-[#3D3D3D] py-16 w-full flex-col justify-center items-center">
        <SectionTitle
          preTitle="Canal ArtSystem no YouTube"
          title="Aprenda com nossos vídeos de treinamento"
        >
          Nossos clientes têm acesso a uma verdadeira universidade de conhecimento, com vídeos de treinamento e manuais online dos produtos ArtSystem. Explore nosso canal para obter orientações detalhadas sobre o uso das nossas soluções e maximize o potencial de sua empresa.
        </SectionTitle>

        <Video videoId="fZ0D0cnR88E" />
      </div>

      <Container>

        <SectionTitle
          preTitle="Feedbacks"
          title="O Que Nossos Clientes Dizem"
        >
          Confira alguns depoimentos de clientes satisfeitos que confiam nas soluções ArtSystem para potencializar seus negócios. Suas experiências refletem a qualidade e a eficiência de nossos produtos e serviços.
        </SectionTitle>

        <Testimonials />

        <SectionTitle preTitle="FAQ" title="Perguntas Frequentes">
          Entenda como os nossos sistemas de controle de vendas podem ajudar a otimizar a gestão do seu comércio. Aqui, você encontra respostas para as perguntas mais comuns sobre nossos produtos e serviços. Se precisar de mais ajuda, entre em contato conosco.
        </SectionTitle>

        <Faq />
        <Cta />
      </Container>
    </>
  );
}
