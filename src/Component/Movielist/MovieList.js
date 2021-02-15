import React,{useState,useEffect} from 'react'
import Card from '../Card/Card';
const MovieList = ({search}) => { 
    const [movielist,setMovielist]=useState([
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
      rating: 4,
      name: "Devil's Mile",
      
      type: "Action | Crime",
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
    },
    {
      id: Math.random(),
      image:
        "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
      rating: 5,
      name: "Once Upon A Time In The west",
      
      type: "Western",
      description:
        "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
      rating: 4,
      name: "Taxi Driver",
      
      type: "Crime | Drama",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg",
      rating: 4,
      name: "Mad Max",
      
      type: "Action | Adventure",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
    },
    {
      id: Math.random(),
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1330b14202071.5627f4dc23472.jpg",
      rating: 3,
      name: "Little Miss Sunshine",
      
      type: "Comedy | Drama",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/564x/32/49/1c/32491ccd2f4ce577dea8871988c5828c.jpg",
      rating: 5,
      name: "KILL BILL",
     
      type: "Action",
      description:
        "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer."  
    },
    {
      id: Math.random(),
      image:
        "https://i.pinimg.com/originals/3e/f1/ba/3ef1baaaceb5a95c4f57a7cb2393b39d.jpg",
      rating: 5,
      name: "The Wolf Of Wall Street",
      
      type: " Biography | Crime | Drama  ",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    },
  ]);

  
    return (
        <div style={{display:"flex", margin:"7%", justifyContent:"space-around", flexWrap:"wrap"}}>

          {search.length===0 ? (movielist.map(el=><Card key={el.id} image={el.image} name={el.name} type={el.type} description={el.description} rating={el.rating}/>))
           : (movielist.filter(el=>el.name.toUpperCase().indexOf(search.toUpperCase())!==-1).map(el=><Card key={el.id} image={el.image} name={el.name} type={el.type} description={el.description} rating={el.rating}/>))}  
           
        </div>
    )
}

export default MovieList
