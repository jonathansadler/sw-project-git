import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, useLocation, Route, useParams, Link, useHistory } from "react-router-dom";

import CardList from "./CardList";
import useFetch from "../useFetch";

const Home = () => {
  //const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  //const { error, isPending, data: blogs } = useFetch('http://swapi.dev/api/people')
  
  const [rightname, setRightname] = useState("");

  const { error, isPending, data: blogs } = useFetch('http://swapi.dev/api/people/?search=' + rightname)
  
 
    
  const addname = (title) => {
    setRightname(title)
  }


  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <CardList blogs={blogs} addnameright={addname} /> }
    </div>
  );
}
 
export default Home;
