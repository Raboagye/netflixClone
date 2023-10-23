import classes from "./Banner.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import movieRequests from "./request"

const Banner = () => {

    const [films, setFilms] = useState([])

    const [filmPic, setFilmPic] = useState("")

    useEffect(() => {
        const fetchFilms = async () => {
            const request = await axios.get(movieRequests.fetchUpComing)
            const selectedFilm = request.data.results[
                Math.floor(Math.random() * (request.data.results.length - 1))
            ]
            setFilms(selectedFilm)
            console.log(selectedFilm)

            if (selectedFilm.backdrop_path != null ) {
                setFilmPic(selectedFilm.backdrop_path)
            }else{
                setFilmPic(selectedFilm.poster_path)
            } 
        }
        return fetchFilms

    }, [])
             

    const truncate = (description, n) => {
        return (
            description?.length > n? description.substr(0, n) + "..." : description
        )
    }

    return (

        <div className={classes.Background_Content} style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${filmPic}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover"
        }}>
            <h1>{films?.title || films?.original_title}</h1>
            <div className={classes.Buttons}>
                <button className={classes.Button}>Play.</button>
                <button className={classes.Button}>My List</button>
            </div>
            <div className={classes.Movie_Description}>
                <h4>{truncate(films?.overview, 150)} </h4>
            </div>

            <div className={classes.FadeButton}></div>

        </div>

    );
}
 
export default Banner;
