'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import blogData from "../../../public/data/blog.json";

export default function Blog() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [suggestions, setSuggestions] = useState<{ id: number; slug: string; image: string; title: string; text: string; date: string; autor: string; categoria: string[]; tags: string[]; }[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<{ id: number; slug: string; image: string; title: string; text: string; date: string; autor: string; categoria: string[]; tags: string[]; }[]>([]);

  const monthMap: { [key: string]: number } = {
    "Janeiro": 1, "Fevereiro": 2, "Março": 3, "Abril": 4, "Maio": 5, "Junho": 6,
    "Julho": 7, "Agosto": 8, "Setembro": 9, "Outubro": 10, "Novembro": 11, "Dezembro": 12
  };
  
  // Função para converter a string da data em um valor comparável
  const parseDate = (dateString: string) => {
    const [month, year] = dateString.split(" ");
    return { year: parseInt(year), month: monthMap[month] };
  };
  
  // Ordenar os posts por data do mais recente para o mais antigo
  const sortedPosts = [...blogData.posts].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    
    return dateB.year - dateA.year || dateB.month - dateA.month;
  });
  
  const posts = sortedPosts.map(post => ({
    ...post,
    text: post.text ?? ""
  }));
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (search) {
      const filteredSuggestions = posts.filter((post) => {
        const searchLower = search.toLowerCase();
        return (
          post.title.toLowerCase().includes(searchLower) ||
          post.autor.toLowerCase().includes(searchLower) ||
          (post.text ?? "").toLowerCase().includes(searchLower) ||
          post.categoria.some((cat) => cat.toLowerCase().includes(searchLower)) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        );
      });
      if (JSON.stringify(filteredSuggestions) !== JSON.stringify(suggestions)) {
        setSuggestions(filteredSuggestions);
      }
    } else {
      if (suggestions.length !== 0) {
        setSuggestions([]);
      }
    }
  }, [search, posts, suggestions]);
  
  useEffect(() => {
    const filtered = posts.filter((post) => {
      const matchesCategory = selectedCategory ? post.categoria.includes(selectedCategory) : true;
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      return matchesCategory && matchesTag;
    });
    if (JSON.stringify(filtered) !== JSON.stringify(filteredPosts)) {
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, selectedTag, posts, filteredPosts]);

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const filtered = posts.filter((post) => {
        const searchLower = search.toLowerCase();
        return (
          post.title.toLowerCase().includes(searchLower) ||
          post.autor.toLowerCase().includes(searchLower) ||
          post.text.toLowerCase().includes(searchLower) ||
          post.categoria.some((cat) => cat.toLowerCase().includes(searchLower)) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
        );
      });
      setFilteredPosts(filtered);
    }
  };

  const handleSuggestionClick = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  const handleNavigation = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  if (!isClient) {
    return null;
  }

  const categories = [...new Set(posts.flatMap((post) => post.categoria))];
  const tags = [...new Set(posts.flatMap((post) => post.tags))].slice(0, 12);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

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

  return (
    <div className="w-screen pt-32 px-10 lg:pt-52 lg:px-24 bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')] bg-cover bg-repeat-y bg-center min-h-screen">
      <div className="text-center mb-12">
        <p className="text-[#FF513F] text-lg pb-5">Descubra, Aprenda, Inspire-se</p>
        <h1 className="text-[#1f2937] dark:text-white text-4xl font-bold">Explore as Melhores Ideias<br/>e Tendências do Momento</h1>
        <p className="text-[#6b7280] dark:text-gray-300 max-w-2xl mx-auto mt-2">
        Nosso blog é o seu destino para insights valiosos, dicas práticas e novidades do mercado. Fique por dentro das tendências, aprimore seus conhecimentos e inspire-se com conteúdos exclusivos.
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-6">
      <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
      {currentPosts.length > 0 ? (
        currentPosts.map((post) => (
          <div key={post.id} className="bg-[#F1F1F1] dark:bg-[#3D3D3D] p-4 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <Image src={`/img/blog/${post.image}`} alt={post.title} className="w-full h-48 object-cover rounded-lg" width={500} height={500}/>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-300 mt-3">
                <FontAwesomeIcon icon={faUser} /> <span>{post.autor}</span>
                <FontAwesomeIcon icon={faCalendar} /> <span>{post.date}</span>
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
        <p className="text-center text-gray-500 dark:text-gray-300">Nenhuma publicação encontrada com &quot;{search}&quot;</p>
      )}
    </div>

        <div className="md:w-2/5 space-y-6">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full p-3 rounded-lg border border-gray-300 bg-[#F1F1F1] dark:border-gray-600 dark:bg-[#3D3D3D] dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleSearchKeyPress}
          />
          {suggestions.length > 0 && (
            <ul className="bg-white dark:bg-[#3D3D3D] border border-gray-300 dark:border-gray-600 rounded-lg mt-2 max-h-60 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <li 
                  key={suggestion.id} 
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion.slug)}
                >
                  {suggestion.title}
                </li>
              ))}
            </ul>
          )}

          <div>
            <h3 className="text-lg font-semibold text-[#1f2937] dark:text-white">Últimas Publicações</h3>
            <ul className="mt-3 space-y-3">
              {posts.slice(0, 3).map((post) => (
                <Link 
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    
                >
                    <li className="flex items-center gap-4 hover:dark:bg-[#3D3D3D] hover:bg-[#F1F1F1] rounded-lg my-5">
                    <Image src={`/img/blog/${post.image}`} alt={post.title} className="w-16 h-16 object-cover rounded-lg" width={500} height={500} />
                    <span className="text-gray-700 dark:text-gray-300">{post.title}</span>
                    </li>
                </Link>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1f2937] dark:text-white">Categorias</h3>
            <ul className="mt-3 grid grid-cols-3 gap-3">
                {categories.map((category) => (
                <li 
                    key={category} 
                    className="cursor-pointer bg-[#ef444442] dark:bg-custom1 w-24 rounded-md text-center text-custom1 dark:text-white hover:scale-90" 
                    onClick={() => {
                    setSelectedCategory(category);
                    setSelectedTag(""); // Limpa o filtro de tags
                    const filtered = posts.filter((post) => post.categoria.includes(category));
                    setFilteredPosts(filtered);
                    }}
                >
                    {category}
                </li>
                ))}
            </ul>
            </div>

            <div>
            <h3 className="text-lg font-semibold text-[#1f2937] dark:text-white">Tags</h3>
            <ul className="mt-3 grid grid-cols-3 gap-3 max-h-64 overflow-y-auto">
                {tags.map((tag) => (
                <li 
                    key={tag} 
                    className="cursor-pointer bg-[#97979742] rounded-md text-center text-zinc-600 dark:text-gray-300 hover:scale-90" 
                    onClick={() => {
                    setSelectedTag(tag);
                    setSelectedCategory(""); // Limpa o filtro de categorias
                    const filtered = posts.filter((post) => post.tags.includes(tag));
                    setFilteredPosts(filtered);
                    }}
                >
                    {tag}
                </li>
                ))}
            </ul>
            </div>

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