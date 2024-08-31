'use client'
import Link from "next/link"
import Image from "next/image"


export default function Header() {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between p-4">

                <div className="flex items-center space-x-4">
                    <Image 
                        src="/kinopoisk.svg" 
                        alt="Лого" 
                        width={80} 
                        height={40} 
                        className="w-auto h-6
                        cursor-pointer" 
                    />
                    <Image 
                        src="/earth.gif" 
                        alt="animation" 
                        width={50} 
                        height={50} 
                        className="w-30 h-30
                        cursor-pointer" 
                    />
                </div>
                

                <div className="flex-grow flex items-center justify-center space-x-6">
                    <Link href={"/movies"}><p className="cursor-pointer hover:text-gray-400 transition">Фильмы</p></Link>
                    <p className="cursor-pointer hover:text-gray-400 transition">Сериалы</p>
                    <p className="cursor-pointer hover:text-gray-400 transition">Поиск</p>
                    <p className="cursor-pointer hover:text-gray-400 transition">Войти</p>
                </div>
            </nav>
        </header>
    );
}



