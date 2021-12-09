import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, useLocation, Route, useParams, Link, useHistory } from "react-router-dom";

//import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

import '../OverridesDetail.css';

const DeckDetails = ({addnameright}) => {
  
  const { id } = useParams();
  //const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  //const { data: blog, error, isPending } = useFetch('http://swapi.dev/api/people/' + id);
  const history = useHistory();





  return (
    <>

    </> 

  );
}
 
export default DeckDetails;
