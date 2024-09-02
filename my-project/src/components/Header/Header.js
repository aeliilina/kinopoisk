'use client'
import Link from "next/link"
import Image from "next/image"
import SignUp from "../features/signup/signup";

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
                        className="w-auto h-6 cursor-pointer" 
                    />
                    <Image 
                        src="/earth.gif" 
                        alt="animation" 
                        width={50} 
                        height={50} 
                        className="w-25 h-25 cursor-pointer" 
                    />
                </div>
                
                <div className="flex-grow flex items-center space-x-6 justify-center">
                    <Link href={"/movies"}><p className="flex-grow text-center cursor-pointer hover:text-gray-400 transition">Фильмы</p></Link>
                    <Link href={"/series"}><p className="flex-grow text-center cursor-pointer hover:text-gray-400 transition">Сериалы</p></Link>
                    <Link href={"/search"}><p className="flex-grow text-center cursor-pointer hover:text-gray-400 transition">Поиск</p></Link>
                    <SignUp />
                </div>
            </nav>
        </header>
    );
}




