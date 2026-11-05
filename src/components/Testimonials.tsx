'use client';
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import userOneImg from "@/img/carolina.webp";
import userTwoImg from "@/img/nutricarnes.webp";
import userThreeImg from "@/img/impacto.webp";
import userFourImg from "@/img/nelsinho.webp";
import userFiveImg from "@/img/litoral.webp";

export const Testimonials = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          200: {
            slidesPerView: 1,
          }
        }}
        className="flex"
      >
        <SwiperSlide className="flex justify-between">
          <div className="flex flex-col bg-gray-100 p-5 mx-5 md:px-14 md:mx-10 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-xs md:text-lg leading-normal ">
              As soluções <Mark>da ArtSystem </Mark>
              simplificaram nossa gestão e aumentaram a eficiência!
            </p>
            <Avatar
              image={userOneImg}
              name="Carolina"
              title="Cliente"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-between">
          <div className="flex flex-col bg-gray-100 p-5 mx-5 md:px-14 md:mx-10 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-xs md:text-lg leading-normal ">
              ArtSystem transformou nosso controle de estoque. Mais precisão e <Mark>menos desperdício.</Mark>
            </p>
            <Avatar
              image={userTwoImg}
              name="Nutricarnes"
              title="Cliente"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-between">
          <div className="flex flex-col bg-gray-100 p-5 mx-5 md:px-14 md:mx-10 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-xs md:text-xl leading-normal ">
              <Mark>Excelente suporte</Mark> e soluções intuitivas que facilitaram nosso atendimento ao cliente.
            </p>
            <Avatar
              image={userThreeImg}
              name="Impacto Audiocar"
              title="Cliente"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-between">
          <div className="flex flex-col bg-gray-100 p-5 mx-5 md:px-14 md:mx-10 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-xs md:text-xl leading-normal ">
              A <Mark>ArtSystem</Mark> nos ajudou a melhorar nossa produtividade significativamente.
            </p>
            <Avatar
              image={userFourImg}
              name="Nelsinho"
              title="Cliente"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-between">
          <div className="flex flex-col bg-gray-100 p-5 mx-5 md:px-14 md:mx-10 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-xs md:text-xl leading-normal ">
              As ferramentas da <Mark>ArtSystem</Mark> são indispensáveis para nosso negócio.
            </p>
            <Avatar
              image={userFiveImg}
              name="Litoral"
              title="Cliente"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

interface AvatarProps {
  image: StaticImageData;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="200"
          height="200"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-sm md:text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400 text-sm md:text-lg">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <mark className="text-custom1 bg-red-100 rounded-md ring-red-100 ring-4 dark:ring-custom1 dark:bg-custom1 dark:text-red-100">
      {props.children}
    </mark>
  );
}