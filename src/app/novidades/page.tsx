'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import novidadesData from "../../../public/data/novidades.json";

export default function Novidades() {
  const router = useRouter();
  const [search] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(novidadesData.posts);
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const monthMap: { [key: string]: number } = {
    "Janeiro": 1, "Fevereiro": 2, "Março": 3, "Abril": 4, "Maio": 5, "Junho": 6,
    "Julho": 7, "Agosto": 8, "Setembro": 9, "Outubro": 10, "Novembro": 11, "Dezembro": 12
  };

  // Função para converter a string da data em um valor comparável
  const parseDate = (dateString: string): { year: number; month: number } => {
    const [month, year] = dateString.split(" ");
    return { year: parseInt(year), month: monthMap[month] };
  };

  // Ordenar os posts por data do mais recente para o mais antigo
  const sortedPosts = [...novidadesData.posts].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.year - dateA.year || dateB.month - dateA.month;
  });

  const posts = sortedPosts.map(post => ({
    ...post,
    text: post.text ?? ""
  }));

  useEffect(() => {
    setIsClient(true);
    // Filtrar posts com base na busca
    setFilteredPosts(
      posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.text.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handleNavigation = (slug: string) => {
    router.push(`/novidades/${slug}`);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-screen pt-32 px-10 lg:pt-52 lg:px-24 bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')] bg-cover bg-repeat-y bg-center min-h-screen">
      <div className="text-center mb-12">
        <p className="text-[#FF513F] text-lg pb-5">Conheça as Novidades</p>
        <h1 className="text-[#1f2937] dark:text-white text-4xl font-bold">Descubra os Upgrades e<br />Novas Funcionalidades do ArtSystem</h1>
        <p className="text-[#6b7280] dark:text-gray-300 max-w-2xl mx-auto mt-2">
          Fique por dentro das últimas atualizações do nosso sistema ERP e PDV. Explore novas funcionalidades, melhorias de desempenho e soluções inovadoras para otimizar sua gestão e impulsionar seus resultados.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <div key={post.id} className="bg-[#F1F1F1] dark:bg-[#3D3D3D] p-4 rounded-2xl shadow-lg flex flex-col justify-between">
                <div>
                  <Image
                    src={`/img/novidades/${post.thumbnail}`}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg"
                    width={500}
                    height={500}
                  />
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-300 mt-3">
                    <span>Sistema: {post.sistema}</span>
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1f2937] dark:text-white mt-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {post.text ? post.text.split(" ").slice(0, 15).join(" ") + (post.text.split(" ").length > 15 ? "..." : "") : ""}
                  </p>
                </div>
                <button
                  className="mt-3 bg-[#FF513F] text-white py-2 px-4 rounded-lg text-center hover:scale-90"
                  onClick={() => handleNavigation(post.slug)}
                >
                  Leia Mais
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-300">Nenhuma novidade encontrada com &quot;{search}&quot;</p>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          className={`p-2 rounded-full text-xs lg:text-lg ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`p-2 rounded-full ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`p-2 rounded-full text-xs lg:text-lg ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}