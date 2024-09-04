import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between items-center">

                    <div className="flex items-center mb-6 md:mb-0">
                        <Image src="/kinopoisk.svg" alt="КиноПоиск" width={150} height={60} />
                    </div>

                    
                    <div className="flex items-center mb-6 md:mb-0">
                        <Image src="/codify.png" alt="New Logo" width={150} height={60} />
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="https://www.facebook.com/kinopoisk/?locale=ru_RU" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
                        </a>
                        <a href="https://x.com/kinopoiskru" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
                        </a>
                        <a href="https://www.instagram.com/kinopoisk/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
                        </a>
                        <a href="https://www.youtube.com/channel/UC4tlrTXCBw6NPZ9nCA3_s9w" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <Image src="/youtube.svg" alt="YouTube" width={30} height={30} />
                        </a>
                    </div>
                </div>


                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} КиноПоиск. Все права защищены. Сделали ученицы Ильи</p>
                </div>
            </div>
        </footer>
    );
}

