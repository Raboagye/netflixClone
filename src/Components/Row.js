import classes from "./Row.module.css"
import { useEffect, useState } from "react";
import axios from "axios";

const Row = ({title, largeRow, URL}) => {

    const [filmList, setFilmList] = useState([])


    useEffect(() => {
        const fetchMovies = async () => {
            const request = await axios.get(URL)
            const fetchedData = request.data.results
            setFilmList(fetchedData)
        }
        
        return fetchMovies
    })

    
    return ( 
        <div className={classes.Row_container}>
            <div className={classes.Row_Title}>
                <h1>{title}</h1>
            </div>

            <div className={classes.Container}>
                {filmList.map((movie) => {

                    return (movie?.poster_path && (
                        <div className={largeRow ? classes.filmRows : classes.movieRows}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="movie_pic" />
                        </div>
                    )

                    )
                    
                    
                })}

            </div>
        </div>
     );
}
 
export default Row;