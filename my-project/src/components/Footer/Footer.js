import Image from 'next/image';


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between items-center">

                    <div className="flex items-center mb-4 md:mb-0">
                        <Image src="/kinopoisk.svg" alt="КиноПоиск" width={120} height={50} />
                    </div>


                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} КиноПоиск. Все права защищены.Сделали ученицы Ильи</p>
                </div>
            </div>
        </footer>
    );
}
