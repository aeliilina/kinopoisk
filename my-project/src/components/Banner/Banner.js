import Main from "@/app/page";

export default async function Banner() {
    // Загружаем данные
    const kinoData = await fetch('https://baktyiar.pythonanywhere.com/api/index/');
    const kino = await kinoData.json();
    const banners = kino.banners;

    return (
        <div className="relative w-full max-w-screen-lg mx-auto my-4 p-4">
            <div
                className="relative w-full h-0 pb-[56.25%] bg-gray-900 overflow-hidden rounded-lg"
                style={{
                    backgroundImage: `url(https://baktyiar.pythonanywhere.com/${banners[1]?.banner_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor:'pointer'
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                </div>
            </div>
        </div>
    );
}