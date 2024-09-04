'use client'
import Link from "next/link"
import Image from "next/image"
import SignUp from "../features/signup/signup";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <Image 
                            src="/kinopoisk.svg" 
                            alt="Лого" 
                            width={80} 
                            height={40} 
                            className="w-auto h-6 cursor-pointer" 
                        />
                    </Link>
                    <Image 
                        src="/earth.gif" 
                        alt="Анимация" 
                        width={50} 
                        height={50} 
                        className="w-12 h-12 cursor-pointer" 
                    />
                </div>
                
                <div className="flex-grow flex items-center space-x-6 justify-center">
                    <Link href="/movies">
                        <p className="text-center cursor-pointer hover:text-gray-400 transition">Фильмы</p>
                    </Link>
                    <Link href="/series">
                        <p className="text-center cursor-pointer hover:text-gray-400 transition">Сериалы</p>
                    </Link>
                    <Link href="/search">
                        <p className="text-center cursor-pointer hover:text-gray-400 transition">Поиск</p>
                    </Link>
                    <SignUp />
                </div>
            </nav>
        </header>
    );
}





