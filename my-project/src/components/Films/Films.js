import Main from "@/app/main/page"


export default async function Films() {
    const kinoData = await fetch('https://baktyiar.pythonanywhere.com/api/index/');
    const kino = await kinoData.json();
    const movies = kino.movies;

    return (
        <div className="p-4">
            <h1>Фильмы</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <img
                            src={`https://baktyiar.pythonanywhere.com/${movie.poster}`}
                            alt={movie.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-white text-lg font-semibold truncate">{movie.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}