import { useEffect, useState } from "react";
import Animelist from "./Animelist";
import useFetch from "./useFetch";

const Wishlist = () => {
    let {data:animes,error,pending}=useFetch("https://api.jikan.moe/v4/anime");
    let [wish,setwish]=useState(null)
    useEffect(()=>{
        let wish=localStorage.getItem("wish")
        wish=JSON.parse(wish);
     setwish(wish);
    },[])
    return ( 
        <div>
         { pending && <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading</span>
           </div>}
         { animes &&  <Animelist animes={animes.filter((anime)=>{return wish.includes(anime.mal_id)})}/>}
        </div>
     );
}
 
export default Wishlist;