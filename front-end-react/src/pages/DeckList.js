import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import Addcard from './components/Addcard'

import Adddeck from '../components/Adddeck'


const DeckList = ({decks }) => {

  const [title, setTitle] = useState("")

/*
 useEffect(() => {



 }, [title])
*/ 

  const [singlecard, setSingleCard] = useState()

  const [showAddcard, setShowAddcard] = useState(false)
  const [showAdddeck, setShowAdddeck] = useState(false)
  //const [people, setPeople] = useState([])
  
  const [cards, setcards] = useState([])


    const [items, setItems] = useState([])
    


  useEffect(() => {
    const getcards = async () => {
      const cardsFromServer = await fetchcards()
      //console.log(cardsFromServer)
      setItems(cardsFromServer)
    }

    getcards()

  }, [])

  //console.log(items)

  // Fetch cards
  const fetchcards = async () => {
    const res = await fetch('http://localhost:5000/decks')
    
    const data = await res.json()

    const res2 = await fetch('http://localhost:5000/cards')
    
    const data2 = await res2.json()
    
    //console.log(data)

    var a = [];

    var b = [];

    //var arrayOb ={};

for (let i = 1; i < data2.length; i++) {

      const res3 = await fetch('http://localhost:5000/decks/'+i+'/cards')
      const data3 = await res3.json()
      
      for (let i = 0; i < data.length; i++) {
      //console.log(data[i].name)
        a[i] = data[i].name;
        //console.log(a)
      }

      //a["name"] = data[i]
      b.push(data3)

      //arrayOb[i] = a[0];
}
    console.log(a)
    console.log(b)

    var keys = a;
    var values = b;

    var result = [];
    keys.forEach((key, i) => result[key] = values[i]);

    console.log(Object.keys(result)[0])

    return b
  }



    // Add card
    const adddeck = async (card) => {
      const res = await fetch('http://localhost:5000/decks', {
      //const res = await fetch('http://localhost:5000/deckscreate', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(card),
      })
  
      const data = await res.json()
  
      setcards([...cards, data])
  
      // const id = Math.floor(Math.random() * 10000) + 1
      // const newcard = { id, ...card }
      // setcards([...cards, newcard])
    }



  return (
    <>        
        <div className="seperator-1">
        </div>
       
     
      <div id="modal-add-deck">
            {showAdddeck && <Adddeck onAdd={adddeck} />}
          </div>
        
  
        
        <div className="breadcrumb">
          <div className="text-abc-1 roboto-normal-sonic-silver-16px" >All Cards</div>
          <img className="icon-abc-1" src="img/breadcumb-temp@2x.svg"/>
          <div className="text-abc-2 roboto-normal-mountain-mist-16px">Select a deck</div>
          <button style={{marginLeft:"700px", height:"30px", width:"30px"}} onClick={() => { setShowAdddeck(!showAdddeck)}}>+</button>
        </div>      
  
        <div className="flex-container-a1">
  
              <div className="search flex-item-left-a1" id="searchfieldii">
                <input className="search-text-1 roboto-normal-pink-swan-16px" type="text" id="searchinput" name="search" value={title} onChange={ (e)=> setTitle(e.target.value) } />
                <img className="icons" src="img/Search.svg"/>
              </div>
  
  
              <div className="sort roboto-normal-onyx-16px flex-item-right-a1" style={{display: "none"}}>
                <div className="text-1">Sort by</div>
                
                <form className="sort-form" style={{display: "none"}}>
  
                  <select className="card-filter border-1px-pink-swan" id="cars" name="cars">
                    <option value="Homeworld">Homeworld</option>
                  </select>
  
                </form>
  
                <div className="card-filter-buts" style={{display: "none"}} >
                  <img className="label-sort-by-img-1" src="img/asc@2x.svg" />
                  <img className="label-sort-by-img-2" src="img/desc@2x.svg" />
                </div>
              </div>
  
        </div>

        <div className="frame-abc-1">

{items.map((item, index) => (
          <div key={index} className="cards-abc-1-decker" >
            <div></div>
            <button>-</button>
            <div>{item.length}</div>
            <div></div>
          </div>

        ))}




        </div>
   </>     

  );
}
 
export default DeckList;



/*



*/        