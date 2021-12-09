import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Addcard from '../components/Addcard'

import Adddeck from '../components/Adddeck'


const CardList = ({blogs , addnameright }) => {

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

  const sendSingleCard = (idc) =>{
    setSingleCard(idc);
  }

  useEffect(() => {

    /*
    const getcards = async () => {
      const cardsFromServer = await fetchcards()
      setcards(cardsFromServer)
    }

    getcards()
    */
  }, [])

  // Fetch cards
  const fetchcards = async () => {
    const res = await fetch('http://localhost:5000/cards')
    const data = await res.json()

    return data
  }

  // Fetch card
  const fetchcard = async (id) => {
    const res = await fetch(`http://localhost:5000/cards/${id}`)
    const data = await res.json()

    return data
  }


  // Add card
  const addcard = async (card) => {
    //const res = await fetch('http://localhost:5000/deckscreate', {
    const res = await fetch('http://localhost:5000/cards', {
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

    // Add card
    const adddeck = async (card) => {
      const res = await fetch('http://localhost:5000/deckscreate', {
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
  // Delete card
  const deletecard = async (id) => {
    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setcards(cards.filter((card) => card.id !== id))
      : alert('Error Deleting This card')
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const cardToToggle = await fetchcard(id)
    const updcard = { ...cardToToggle, reminder: !cardToToggle.reminder }

    const res = await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updcard),
    })

    const data = await res.json()

    setcards(
      cards.map((card) =>
        card.id === id ? { ...card, reminder: data.reminder } : card
      )
    )
  }


  
  addnameright(title);

  return (
    <>        
        <div className="seperator-1">
        </div>
        
      <div id="modal-add-card">
            {showAddcard && <Addcard cardida={singlecard} onAdd={addcard} />}
          </div>

  

        <div className="breadcrumb">
          <div className="text-abc-1 roboto-normal-sonic-silver-16px" >All Cards</div>
          <img className="icon-abc-1" src="img/breadcumb-temp@2x.svg"/>
          <div className="text-abc-2 roboto-normal-mountain-mist-16px">Select a card</div>
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

      {blogs.results.map((blog, index) => (

        <div key={index} className="cards-abc-1" style={{ textDecoration: 'none' }} >

          
            <div className="top-card">
              <img className="icons-1" src="img/Card.svg" />
              <button style={{"marginLeft": "160px" , "marginTop": "-20px"}} onClick={() => { setShowAddcard(!showAddcard); sendSingleCard(index); }}>+</button>
              <h1 className="place roboto-normal-white-24px">{blog.name}</h1>
            </div>

            <Link to={`/cards/${index+1}`}>
            <div className="card-body" id="card-body-fix" style={{marginLeft:"-30px"}}>
              
              <div className="card-header" style={{ paddingLeft: 13  }}  >
                <div className="card-header-1">
                  <div className="card-header-2">
                    <img className="icons-2" src="img/Gender-Male.svg" />
                    <div className="birth roboto-normal-onyx-14px">{blog.birth_year}</div>
                  </div>
                  <div className="species roboto-normal-onyx-14px">Species</div>
                </div>
                <div className="divider-card"></div>
              </div>

              <div className="card-info" style={{ paddingLeft: 13  }}>

                <div className="detail-1">
                  <div className="detail-1-top">
                    <img className="icons" src="img/Homeworld.svg" />
                    <div className="homeworld roboto-medium-sonic-silver-10px">HOMEWORLD</div>
                  </div>
                  <div className="planet roboto-normal-onyx-14px">Planet</div>
                </div>

                <div className="detail-1">
                  <div className="detail-1-top">
                    <img className="icons" src="img/Vehicle.svg" />
                    <div className="homeworld roboto-medium-sonic-silver-10px">VEHICLES</div>
                  </div>
                  <div className="planet roboto-normal-onyx-14px">{blog.vehicles.length}</div>
                </div>

                <div className="detail-1">
                  <div className="detail-1-top">
                    <img className="icons" src="img/Starship.svg" />
                    <div className="homeworld roboto-medium-sonic-silver-10px">STARSHIPS</div>
                  </div>
                  <div className="planet roboto-normal-onyx-14px">{blog.starships.length}</div>
                </div>


              </div>


            </div>
            </Link>
          

        </div>
      
      ))}



        </div>

    </>

  );
}
 
export default CardList;

/*

    <div className="blog-list">
      {blogs.results.map((blog, index) => (
        <div key={index} className="blog-preview">
          <Link to={`/blogs/${index+1}`}>
            <h2>{ blog.name }</h2>
            <p>Written by { blog.gender }</p>
          </Link>
        </div>
      ))}
    </div>
*/    


