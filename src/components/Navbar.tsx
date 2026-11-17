"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Logo from "@/img/logo2.svg";
import { BreadMark } from "@/components/artfood/ArtFoodLogo";
import { ManualGear, CircularConnection } from "@icon-park/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLLIElement>(null);

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

  useEffect(() => {
    if (!productsOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!productsRef.current?.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [productsOpen]);

  const handleThemeChange = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Ajuste o tempo conforme necessário
  };

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Contato", href: "/contato" },
    { name: "Novidades", href: "/novidades" },
    { name: "Blog", href: "/blog" },
  ];

  const products = [
    {
      name: "Art ERP",
      href: "/erp",
      desc: "Gestão integrada para varejos e atacados",
      icon: <CircularConnection style={{ fontSize: "24px" }} className="text-custom1" />,
      iconBg: "border-custom1/20 bg-custom1/10",
    },
    {
      name: "Art PDV",
      href: "/pdv",
      desc: "Automação de pontos de venda e frente de caixa",
      icon: <ManualGear style={{ fontSize: "24px" }} className="text-custom1" />,
      iconBg: "border-custom1/20 bg-custom1/10",
    },
    {
      name: "Art Food",
      href: "/artfood",
      desc: "Cardápio digital, comandas e gestão para food service",
      icon: <BreadMark className="w-6 h-6" />,
      iconBg: "border-artfood/20 bg-artfoodLight dark:bg-artfood/10",
    },
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
                  {navigation.slice(0, 2).map((item, index) => (
                    <Link key={index} href={item.href} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-custom1 focus:text-custom1 focus:bg-red-100 dark:focus:bg-red-100 focus:outline-none">
                      {item.name}
                    </Link>
                  ))}
                  <Disclosure as="div" className="w-full">
                    {({ open: productsOpen }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-custom1 focus:text-custom1 focus:bg-red-100 dark:focus:bg-red-100 focus:outline-none">
                          Produtos
                          <ChevronDownIcon className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4">
                          {products.map((product) => (
                            <Link key={product.name} href={product.href} className="flex w-full items-center gap-2 px-4 py-2 -ml-4 text-sm text-gray-500 rounded-md dark:text-gray-300 hover:text-custom1 focus:text-custom1 focus:bg-red-100 dark:focus:bg-red-100 focus:outline-none">
                              {product.icon}
                              {product.name}
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {navigation.slice(2).map((item, index) => (
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
            {navigation.slice(0, 2).map((menu, index) => (
              <li className="mr-1 nav__item xl:mr-3" key={index}>
                <Link href={menu.href} className="inline-block px-3 py-2 text-base font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-custom1 focus:text-custom1 focus:bg-red-100 focus:outline-none dark:focus:bg-custom1 xl:px-4 xl:text-lg">
                  {menu.name}
                </Link>
              </li>
            ))}

            <li
              ref={productsRef}
              className="relative nav__item mr-1 xl:mr-3"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setProductsOpen(false);
                }
              }}
            >
              <button
                type="button"
                onClick={() => setProductsOpen(true)}
                aria-expanded={productsOpen}
                aria-controls="products-dropdown"
                className="inline-flex items-center gap-1 px-3 py-2 text-base font-normal text-gray-800 no-underline bg-transparent rounded-md dark:text-gray-200 hover:text-custom1 focus:text-custom1 focus:bg-red-100 focus:outline-none dark:focus:bg-custom1 xl:px-4 xl:text-lg"
              >
                Produtos
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                id="products-dropdown"
                className={`absolute left-0 top-full z-30 w-80 pt-3 transition duration-200 ${productsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
              >
                <div className="p-2 bg-white border shadow-2xl rounded-2xl border-zinc-100 dark:border-zinc-700 dark:bg-[#171717]">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-3 text-left transition rounded-xl hover:bg-zinc-50 focus:bg-zinc-50 focus:outline-none dark:hover:bg-white/5 dark:focus:bg-white/5"
                    >
                      <span className={`flex items-center justify-center w-10 h-10 border rounded-xl shrink-0 ${product.iconBg}`}>
                        {product.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-extrabold text-gray-900 dark:text-white">
                          {product.name}
                        </span>
                        <span className="block mt-0.5 text-[11px] font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                          {product.desc}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {navigation.slice(2).map((menu, index) => (
              <li className="mr-1 nav__item xl:mr-3" key={index}>
                <Link href={menu.href} className="inline-block px-3 py-2 text-base font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-custom1 focus:text-custom1 focus:bg-red-100 focus:outline-none dark:focus:bg-custom1 xl:px-4 xl:text-lg">
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