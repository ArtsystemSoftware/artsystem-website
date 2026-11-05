'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import blogData from "../../../../public/data/blog.json";
import Image from 'next/image';

export default function BlogSlug() {
    const pathname = usePathname();
    const router = useRouter();
    const slug = pathname.split('/').pop();
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const post = blogData.posts.find((p) => p.slug === slug);
    const postIndex = blogData.posts.findIndex((p) => p.slug === slug);
    const prevPost = blogData.posts[postIndex - 1];
    const nextPost = blogData.posts[postIndex + 1];

    if (!post) return <p>Publicação não encontrada</p>;

    const postUrl = typeof window !== "undefined" ? window.location.href : "";

    return (
        <div className="w-screen pt-32 px-10 lg:pt-52 lg:px-32 bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')] bg-cover bg-repeat-y bg-center min-h-screen">
            <div className="container mx-auto bg-[#F1F1F1] dark:bg-[#3D3D3D] p-10 rounded-lg">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <Image 
                        src={`/img/blog/${post.image}`} 
                        alt={post.title} 
                        className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" 
                        width={500} 
                        height={500} 
                        priority 
                    />
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold text-[#1f2937] dark:text-white">{post.title}</h1>
                        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-300 mt-2">
                            {isMounted && <FontAwesomeIcon icon={faUser} className="w-5 h-5" />} 
                            <span>{post.autor}</span>
                            {isMounted && <FontAwesomeIcon icon={faCalendar} className="w-5 h-5" />} 
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>

                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    {post.text?.split(/(?:\r\n|\r|\n)/).map((paragraph, index) => (
                        paragraph.trim() && <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#1f2937] dark:text-white mb-3">Compartilhe:</h3>
                    <div className="flex gap-4">
                        {isMounted && (
                            <>
                                <button 
                                    className="bg-blue-600 text-white p-3 rounded-full"
                                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`, '_blank')}
                                >
                                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                                </button>
                                <button 
                                    className="bg-[#FF513F] text-white p-3 rounded-full"
                                    onClick={() => window.open(`https://www.instagram.com/?url=${encodeURIComponent(postUrl)}`, '_blank')}
                                >
                                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                                </button>
                                <button 
                                    className="bg-blue-700 text-white p-3 rounded-full"
                                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`, '_blank')}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex justify-between items-center mt-8">
                    {prevPost ? (
                        <button 
                            onClick={() => router.push(`/blog/${prevPost.slug}`)}
                            className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg">
                            {isMounted && <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />} Publicação Anterior
                        </button>
                    ) : <div></div>}
                    
                    <button 
                        onClick={() => router.push('/blog')}
                        className="bg-[#FF513F] text-white px-4 py-2 rounded-lg">
                        Blog
                    </button>
                    
                    {nextPost ? (
                        <button 
                            onClick={() => router.push(`/blog/${nextPost.slug}`)}
                            className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg">
                            Próxima Publicação {isMounted && <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />}
                        </button>
                    ) : <div></div>}
                </div>
            </div>
        </div>
    );
}
