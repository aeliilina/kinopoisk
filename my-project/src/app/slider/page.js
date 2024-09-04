import SliderComponent from "@/components/UI/sliderComponent/sliderComponent"


export default async function Slider () {

    const kinoData = await fetch('https://baktyiar.pythonanywhere.com/api/index/');
    const kino = await kinoData.json();
    const movies = kino.movies;


    return(
        <>
        <SliderComponent  data={movies}/>
        </>
    )
}