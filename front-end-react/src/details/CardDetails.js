import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, useLocation, Route, useParams, Link, useHistory } from "react-router-dom";

//import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

import '../OverridesDetail.css';

const CardDetails = ({addnameright}) => {
  
  const { id } = useParams();
  //const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  //const { data: blog, error, isPending } = useFetch('http://swapi.dev/api/people/' + id);
  const history = useHistory();


  // using callbacks for name
  //const [count2, setCount2] = useState(0);    

  //const { handle } = useParams()

  //const location = useLocation()

  //const { person_url_id } = location.state

  const [ personinfo, setPersonInfo] = useState({})

  //empty array
  const [ speciesname, setSpeciesName] = useState("")

 
  const [ homeworldname, setHomeWorldName] = useState("")


  const [vehs, setVname] = useState([])


  const [starshipsname, setStarshipName] = useState([])


  useEffect(() => {

    //fetch(`http://swapi.dev/api/people/${id}`).then(setUser)

    const getPerson = async () => {
      const FromServer = await fetchPerson()
      setPersonInfo(FromServer);
    }


    // using callbacks for name
    //parentCallback(personinfo.name)
    // set name right
    //setCount2((count2) => count2 + 1);
    //parentCallback(personinfo.person);   
    
    const getSpecies = async () => {
      const FromServer = await fetchPerson()

      var dataall = FromServer;
      //console.log(dataall.homeworld)
      return dataall.species;

    }
  


    const getHomeWorld = async () => {
      const FromServer = await fetchPerson()

      var dataall = FromServer;
      //console.log(dataall.homeworld)
      return dataall.homeworld;

    } 

    const getVs = async () => {
      const FromServer = await fetchPerson()

      var dataall = FromServer;
      //console.log(dataall.vehicles)
      return dataall.vehicles;

    }

    const getStarship = async () => {
      const FromServer = await fetchPerson()

      var dataall = FromServer;
      //console.log(dataall.starships)
      return dataall.starships;

    }
       
    //
    getPerson()
    //


    //getSpecies()

    //getHomeWorld()
    
    //getVs()

    //getStarships()


    const getAllSpecies = async () => {
      
      //const urls = await getSpecies()

      //console.log(urls)

      // always empty array
      //const FromServer = await fetchUrlArray(urls)

      //console.log(FromServer.name);

      //setSpeciesName(FromServer.name);

      setSpeciesName("");


    }

    getAllSpecies()

    const getAllHomeWorld = async () => {
      
      const urls = await getHomeWorld()

      //console.log(urls)

      const FromServer = await fetchUrlArray(urls)

      //console.log(FromServer.name);

      setHomeWorldName(FromServer.name);


    }

    getAllHomeWorld()

    const getVeh = async () => {
      const urls2 = await getVs()
      
      const FromServer = await fetchMultiUrlArray(urls2)

      //const vehsFromServer = await fetchMultiUrlArray()
      
      setVname(FromServer)
    }

    getVeh()

    //getAllVehicles()   

    const getAllStarships = async () => {
      const urls2 = await getStarship()
      
      const FromServer = await fetchMultiUrlArray(urls2)
      
      setStarshipName(FromServer)
    }

    getAllStarships()    



    //single
    const fetchUrlArray = async (urlArray) => {

      const res = await fetch(urlArray)
      var data = await res.json()

      //console.log(data);
      return data
      

    }  




    //onClick={() => { parentCallback(personinfo.name) }} 

  }, [id]) 



    //
    addnameright(personinfo.name)

    //alert(personinfo.name)


  // multiple

  const fetchMultiUrlArray = async (urlArray2) => {

    //console.log(urlArray2)

    try {
        var data = await Promise.all(
            urlArray2.map(
                url =>
                    fetch(url).then(
                        (response) => response.json()
                    )));
        //return ([{"name": "Snowspeeder" },{"name": "Snowspeeder" }])
        //console.log(data)
        return (data)

    } catch (error) {
        console.log(error)

        throw (error)
    }
    


  }


    const fetchPerson = async () => {
      const res = await fetch(`http://swapi.dev/api/people/${id}`)
      //const res = await fetch('http://swapi.dev/api/people/1')
      var data = await res.json()

      //console.log(data);

      var dataall = data;
      
      return data
    }


//callback for name
//onClick={() => { parentCallback(personinfo.name) }} 



  const handleClick = () => {
    /*
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
    */
    history.push('/');
  }

  



  return (
    <>
        <div className="seperator-1">
        </div>
  
  
        <div className="breadcrumb">
          <div className="text-abc-1 roboto-normal-sonic-silver-16px" >All Cards</div>
          <img className="icon-abc-1" src="../img/breadcumb-temp@2x.svg"/>
          <div className="text-abc-2 roboto-normal-mountain-mist-16px">{personinfo.name}</div>
        </div>      
  
        <div className="flex-container-a1">

  
        </div>

        {/*<div className="frame-abc-1">

        </div>*/}


        <div className="cards-abc-1 overdetailwidth" style={{height: "480px"}}>

            <div className="top-card overdetailwidth">
              <img className="icons-1" src="../img/Card.svg" />
              <h1 className="place roboto-normal-white-24px">{personinfo.name}</h1>
            </div>

            <div className="card-body" >
              
              <div className="card-header">
                <div className="card-header-1">
                  <div className="card-header-2">
                    <img className="icons-2" src="../img/Gender-Male.svg" />
                    <div className="birth roboto-normal-onyx-14px">{personinfo.birth_year}</div>
                  </div>
                  <div className="species roboto-normal-onyx-14px">{speciesname}</div>
                </div>
                <div className="divider-card"></div>
              </div>

              <div className="card-info" id="fix-1">

                <div className="detail-1 fix-width-all">
                  <div className="detail-1-top">
                    <img className="icons" src="../img/Homeworld.svg" />
                    <div className="homeworld roboto-medium-sonic-silver-10px">HOMEWORLD</div>
                  </div>
                  <div className="planet roboto-normal-onyx-14px">{homeworldname}</div>
                </div>



                {vehs.map((v, index) => (                       


                  <div key={index} className="detail-1 fix-width-all">
                    <div className="detail-1-top">
                      <img className="icons" src="../img/Vehicle.svg" />
                      <div className="homeworld roboto-medium-sonic-silver-10px">VEHICLES</div>
                    </div>
                    <div className="planet roboto-normal-onyx-14px">{v.name}</div>
                  </div>


                ))}


                {starshipsname.map((v, index) => (  

                <div key={index} className="detail-1 fix-width-all">
                  <div className="detail-1-top">
                    <img className="icons" src="../img/Starship.svg" />
                    <div className="homeworld roboto-medium-sonic-silver-10px">STARSHIPS</div>
                  </div>
                  <div className="planet roboto-normal-onyx-14px">{v.name}</div>
                </div>
                
                ))}   

              </div>


            </div>

        </div>



    </> 

  );
}
 
export default CardDetails;

/*


    <div className="blog-details">

      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.name }</h2>
          <p>Written by { blog.birth_year }</p>
          <div>{ blog.gender }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
      



      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}



    </div>

*/    