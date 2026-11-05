'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import novidadesData from "../../../../public/data/novidades.json";
import Image from 'next/image';

export default function NovidadesSlug() {
    const pathname = usePathname();
    const router = useRouter();
    const slug = pathname.split('/').pop();

    const [isMounted, setIsMounted] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const post = novidadesData.posts.find((p) => p.slug === slug);
    const postIndex = novidadesData.posts.findIndex((p) => p.slug === slug);
    const prevPost = novidadesData.posts[postIndex - 1];
    const nextPost = novidadesData.posts[postIndex + 1];

    if (!post) return <p>Novidade não encontrada</p>;

    const openLightbox = (image: string) => {
        setLightboxImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxImage('');
    };

    // Dividir o texto em parágrafos e filtrar imagens válidas
    const paragraphs = post.text?.split(/(?:\r\n|\r|\n)/).filter(paragraph => paragraph.trim()) || [];
    const validImages = post.gallery?.filter(image => image && image.trim()) || [];

    return (
        <div className="w-screen pt-32 px-10 lg:pt-52 lg:px-32 bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')] bg-cover bg-repeat-y bg-center min-h-screen">
            <div className="container mx-auto bg-[#F1F1F1] dark:bg-[#3D3D3D] p-10 rounded-lg">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold text-[#1f2937] dark:text-white">{post.title}</h1>
                        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300 mt-2">
                            <span>Sistema: {post.sistema}</span>
                            {isMounted && <FontAwesomeIcon icon={faCalendar} className="w-5 h-5" />}
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image
                            src={`/img/novidades/${post.thumbnail}`}
                            alt={post.title}
                            className="w-full h-auto rounded-lg shadow-lg"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>

                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    {paragraphs.map((paragraph, index) => (
                        <div key={index}>
                            <p className="mb-4">{paragraph}</p>
                            {index < validImages.length && (
                                <div className="my-6 cursor-pointer" onClick={() => openLightbox(validImages[index])}>
                                    <Image
                                        src={`/img/novidades/${validImages[index]}`}
                                        alt={`Imagem ${index + 1} de ${post.title}`}
                                        className="w-full h-auto rounded-lg shadow-lg object-contain"
                                        width={600}
                                        height={400}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {lightboxOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                            <button
                                onClick={closeLightbox}
                                className="absolute top-2 right-2 bg-[#FF513F] text-white p-2 rounded-full"
                            >
                                <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                            </button>
                            <Image
                                src={`/img/novidades/${lightboxImage}`}
                                alt="Imagem ampliada"
                                className="max-w-[90vw] max-h-[90vh] rounded-lg"
                                width={800}
                                height={800}
                            />
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center mt-8">
                    {prevPost ? (
                        <button
                            onClick={() => router.push(`/novidades/${prevPost.slug}`)}
                            className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg">
                            {isMounted && <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />} Novidade Anterior
                        </button>
                    ) : <div></div>}

                    <button
                        onClick={() => router.push('/novidades')}
                        className="bg-[#FF513F] text-white px-4 py-2 rounded-lg">
                        Novidades
                    </button>

                    {nextPost ? (
                        <button
                            onClick={() => router.push(`/novidades/${nextPost.slug}`)}
                            className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg">
                            Próxima Novidade {isMounted && <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />}
                        </button>
                    ) : <div></div>}
                </div>
            </div>
        </div>
    );
}