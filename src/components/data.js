"use client";
import React from 'react';

import {
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  ShoppingCartIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import {
  ManualGear,
  CircularConnection,
  MoreApp,
  Display,
} from '@icon-park/react';

import benefitOneImg from "@/img/beneficios1.webp";
import benefitTwoImg from "@/img/beneficios2.webp";

export const benefitOne = {
  title: "Diferenciais",
  desc: "Na Artsystem, oferecemos soluções completas para transformar a gestão do seu comércio, garantindo eficiência e inovação em cada etapa. Confira nossos principais diferenciais:",
  image: benefitOneImg,
  bullets: [
    {
      title: "GERENCIAMENTO",
      desc: "",
      link: "/sobre",
      iconArrow: <ChevronRightIcon />,
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "FISCAIS",
      desc: "",
      link: "/sobre",
      iconArrow: <ChevronRightIcon />,
      icon: <ShoppingCartIcon />,
    },
    {
      title: "PROCESSOS",
      desc: "",
      link: "/sobre",
      iconArrow: <ChevronRightIcon />,
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export const benefitTwo = {
  title: "Soluções completas para automação, gestão e consultoria empresarial",
  desc: "A ArtSystem oferece soluções integradas para automação de vendas, gestão empresarial e infraestrutura, ajudando empresas de todos os portes a otimizar operações e alcançar melhores resultados com suporte especializado.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Art PDV",
      desc: "Automação de vendas com Art PDV, integrado a sistemas externos.",
      link: "",
      iconArrow: "",
      icon: <ManualGear style={{ fontSize: '28px' }} />,
    },
    {
      title: "Art ERP",
      desc: "Gestão integrada online para empresas de todos os portes.",
      link: "",
      iconArrow: "",
      icon: <CircularConnection style={{ fontSize: '28px' }}/>,
    },
    {
      title: "Infraestrutura",
      desc: "Confiabilidade com consultores experientes para soluções empresariais eficazes.",
      link: "",
      iconArrow: "",
      icon: <MoreApp style={{ fontSize: '28px' }}/>,
    },
    {
      title: "Consultoria",
      desc: "Equipe especializada oferece implantação prática e objetiva para negócios.",
      link: "",
      iconArrow: "",
      icon: <Display style={{ fontSize: '28px' }}/>,
    },
  ],
};



