import useFetch from "./useFetch";
import Animelist from "./Animelist";

const Home = () => {
  
  let{data:animes,error,pending}=useFetch("https://api.jikan.moe/v4/anime");
   
    return (
        <div className="home">
  
    {pending && <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}

    {animes && <Animelist animes={animes}  /> }


        </div>
      );
}
 
export default Home;