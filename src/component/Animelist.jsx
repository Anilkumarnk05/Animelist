import { useEffect,useState } from "react";

const Animelist = ({animes}) => {

    const [wish,setWish]=useState([1,0])

    useEffect(()=>{
        localStorage.setItem("wish",wish)
    },[])

    let handleWishlist=(id)=>{
     let x=localStorage.getItem("wish");
      x=JSON.parse(x);
      if(!x.includes(id))
      {
        x.push(id);
        x=JSON.stringify(x);
        localStorage.setItem("wish",x)
        console.log(x,typeof x );
      }
      else
      {
       let i= x.indexOf(id);
       x.Splice(i,1);
       x=JSON.stringify(x)
       localStorage("wish",x)
      }
     }

    return (  
        <div className="animelist">
         {
            animes.map((anime)=>{
                return(
                    <div key={anime.mal_id} className="anime">
                        <img src={anime.images.jpg.small_image_url} alt="not Found" />
                         <h4>Title:{anime.title}</h4>
                         <h4>Type:{anime.type}</h4>
                         <h4>Source:{anime.source}</h4>
                         {/* <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button> */}
<button onClick={()=>{handleWishlist(anime.mal_id)}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASlJREFUSEvFlctxgzAQQLVwQMIX0kE6SFKBXQId2FSQWlIBSQcuwenA6cAdmIuRdIDNLAMzwuYjPko4Ie3w3uxqVwBz/IBjPvsfwS0MY78o9gjwWmd4KT3vY5PnR1pT3CvLd8bYM60B8Vz4/lcTN6vSyuAaRZGQMkWAuKd0p3p/1xUHxKMUInnKsqyJtwS5EGdAfFlyLpQN1/rtQSA5PzDG0iVw49tEKPVZla/ZlJxT+tuVBN9CqaqMpgBXglcYoVTF/lOB8xK5PWSq1xptigA/oZTNgLavChq0QOvT3FkguA6CXe+gURZzJV3wVheZLTpV0gfvFUzJZAg+KLCRjMFHBUMSG7iVoEtiC7cWmBJ6v2/FoTts0i+TuotgZp+PXZCTBGOwrrhzwS89Oa8Z4k2EjAAAAABJRU5ErkJggg=="/></button>
</div>
                )
            })
         }
        </div>
    );
}
 
export default Animelist;