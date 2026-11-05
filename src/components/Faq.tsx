"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-red-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-custom1`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Os sistemas da Artsystem são fáceis de usar?",
    answer: "Sim, nossos sistemas são desenvolvidos com interfaces intuitivas e design pensado para facilitar o uso, mesmo para quem não tem experiência com tecnologia. Além disso, oferecemos tutoriais e suporte para garantir que você aproveite todas as funcionalidades.",
  },
  {
    question: "Os sistemas são personalizáveis para o meu tipo de comércio?",
    answer: "Sim, oferecemos soluções personalizadas para atender às necessidades específicas do seu negócio. Nosso time trabalha para adaptar o sistema às particularidades do seu comércio, garantindo eficiência e resultados.",
  },
  {
    question: "O que acontece se eu precisar de ajuda ou suporte técnico? ",
    answer: "Disponibilizamos suporte técnico especializado por meio de canais como chat, telefone e e-mail. Nossa equipe está pronta para ajudar a resolver dúvidas e questões técnicas de forma rápida e eficiente.",
  },
  {
    question: "Posso acessar os dados do meu sistema de qualquer lugar? ",
    answer: "Sim, nossos sistemas contam com funcionalidades baseadas na nuvem, permitindo que você acesse seus dados com segurança de qualquer lugar, a qualquer momento, utilizando dispositivos conectados à internet.",
  },
  {
    question: "Quais são os requisitos mínimos para instalar o sistema?",
    answer: "Os requisitos podem variar de acordo com a solução escolhida, mas geralmente incluem um computador com sistema operacional atualizado, conexão com a internet e espaço de armazenamento adequado. Nossa equipe auxilia na avaliação e configuração, se necessário.",
  },
  {
    question: "Quais métodos de pagamento vocês aceitam?",
    answer: "Aceitamos diversos métodos de pagamento, incluindo cartões de crédito e débito, transferências bancárias e opções digitais. Consulte-nos para detalhes e condições específicas.",
  },
];
