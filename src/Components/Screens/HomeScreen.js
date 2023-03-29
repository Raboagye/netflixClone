import Banner from "../Banner";
import NavBar from "../NavBar";
import Row from "../Row"
import movieRequests from "../request";
import classes from "./HomeScreen.module.css"

const HomeScreen = () => {
    return ( 
        <div className={classes.HomeScreen}>
            <NavBar />
            <Banner/> 
            <Row largeRow={true} URL={movieRequests.fetchNowPlaying} title="NOW PLAYING" /> 
            <Row URL={movieRequests.fetchUpComing} title="UPCOMING" />           
            <Row URL={movieRequests.fetchTopRated} title="TOP RATED" />           
            <Row URL={movieRequests.fetchAction} title="ACTION" />           
            <Row URL={movieRequests.fetchAnimation} title="ANIMATION" />           
            <Row URL={movieRequests.fetchComedy} title="COMEDY" />           
            <Row URL={movieRequests.fetchMusic} title="MUSIC" />           
            <Row URL={movieRequests.fetchMystery} title="MYSTERY" />           
            <Row URL={movieRequests.fetchRomance} title="ROMANCE" />           
            <Row URL={movieRequests.fetchScienceFiction} title="SCIENCE FICTION" />                     
        </div>
     );
}
 
export default HomeScreen;