import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-cover bg-[url('/img/backgroundLight.webp')] dark:bg-[url('/img/backgroundDark.webp')]">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8">Oops! Parece que você se perdeu...</p>
            <Link href="/" className="px-6 py-3 bg-custom1 text-white rounded-lg hover:bg-red-700 transition duration-300">
                Voltar para a tela inicial
            </Link>
        </div>
    );
}