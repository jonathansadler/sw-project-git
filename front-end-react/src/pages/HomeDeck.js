import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, useLocation, Route, useParams, Link, useHistory } from "react-router-dom";

import DeckList from "./DeckList";
import useFetch from "../useFetch";

const HomeDeck = () => {
  //const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
  //const { error, isPending, data: blogs } = useFetch('http://swapi.dev/api/people')
  
  const [rightname, setRightname] = useState("");

  //const { error, isPending, data: decks } = useFetch('http://localhost:5000/alldecks?q=' + rightname)
  
  const { error, isPending, data: decks } = useFetch('http://localhost:5000/decks')
  
    
  const addname = (title) => {
    setRightname(title)
  }


  return (
    <>

    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { decks && <DeckList decks={decks}  /> }
    </div>

    </>
  );
}
 
export default HomeDeck;

/*

    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} addnameright={addname} /> }
    </div>

*/    