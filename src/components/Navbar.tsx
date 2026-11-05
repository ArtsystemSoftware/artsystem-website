"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "@/img/logo2.svg";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Verifica a posição de rolagem inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleThemeChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Ajuste o tempo conforme necessário
  };

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Soluções", href: "/solucoes" },
    { name: "Contato", href: "/contato" },
    { name: "Novidades", href: "/novidades" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className={`w-full fixed lg:py-10 lg:px-20 z-20 transition-all duration-300 ${isScrolled ? "backdrop-blur-xl border-b-2 border-zinc-100 dark:border-zinc-700 lg:py-2 " : "bg-white dark:bg-trueGray-900 dark:md:bg-transparent md:bg-transparent"}`}>
      {isLoading && (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      )}
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <Image src={Logo} alt="Logo" width={100} height={100} className="lg:w-[200px]" />
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger onChange={handleThemeChange} />
          <div className="hidden mr-3 lg:flex nav__item">
            <a href="https://dashboard.assoftware.com.br/" className="px-6 py-2 text-white bg-custom1 rounded-md md:ml-5">
              Area do Cliente
            </a>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-custom1 focus:text-custom1 focus:bg-red-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link key={index} href={item.href} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-custom1 focus:text-custom1 focus:bg-red-100 dark:focus:bg-red-100 focus:outline-none">
                      {item.name}
                    </Link>
                  ))}
                  <a href="https://dashboard.assoftware.com.br/" className="w-full px-6 py-2 mt-3 text-center text-white bg-custom1 rounded-md lg:ml-5">
                    Area do Cliente
                  </a>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.href} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-custom1 focus:text-custom1 focus:bg-red-100 focus:outline-none dark:focus:bg-custom1">
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
      <style jsx>{`
        .spinner {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          margin: -20px 0 0 -20px;
          z-index: 9999;
        }

        .double-bounce1,
        .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #333;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          animation: sk-bounce 2.0s infinite ease-in-out;
        }

        .double-bounce2 {
          animation-delay: -1.0s;
        }

        @keyframes sk-bounce {
          0%,
          100% {
            transform: scale(0);
          }
          50% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}