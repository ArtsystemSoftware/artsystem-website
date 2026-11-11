"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: StaticImageData;
    bullets: {
      title: string;
      desc: string;
      link: string;
      iconArrow: React.ReactNode;
      icon: React.ReactElement;
    }[];
  };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap px-[80px]">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""
          }`}
      >
        <div>
          <Image
            src={data.image}
            width={521}
            height={521}
            alt="Benefits"
            className={"object-cover rounded-3xl w-[700px]"}
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end " : ""
          }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-xl md:text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {data.title}
            </h3>

            <p className="max-w-2xl py-4 text-sm md:text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {data.desc}
            </p>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              item.icon && (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              )
            ))}
            {data.title === "Diferenciais" && (
              <Link href="/erp" className="inline-flex items-center text-sm md:text-lg font-medium text-[#ffffff] dark:text-[#ffffff] bg-[#FF513F] p-3 rounded-lg hover:bg-[#FF513F]/60 transition-colors mt-12">
                Conheça o Art ERP ⭢
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

interface BenefitProps {
  title: string;
  icon: React.ReactElement;
  children: React.ReactNode;
}

function Benefit(props: Readonly<BenefitProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-custom1 rounded-md w-11 h-11 ">
        {React.isValidElement(props.icon) &&
          React.cloneElement(props.icon, {
            className: "w-7 h-7 text-white",
          } as React.HTMLAttributes<HTMLElement>)}
      </div>
      <div>
        <h4 className="text-sm md:text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}