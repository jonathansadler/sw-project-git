import { useState, useEffect } from 'react'

const Adddeck = ({ onAdd }) => {
  const [name, setText] = useState('')
  //const [day, setDay] = useState('')
  const [faction, setFaction] = useState('')
  const [card, setCardid] = useState([])
  //const [reminder, setReminder] = useState(false)


  const [items, setcards] = useState([])

  useEffect(() => {
    const getcards = async () => {
      const cardsFromServer = await fetchcards()
      setcards(cardsFromServer)
    }

    getcards()
  }, [])

    // Fetch cards
    const fetchcards = async () => {
      const res = await fetch('http://localhost:5000/decks')
      const data = await res.json()
  
      return data
    }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add deck name')
      return
    }

    //onAdd({ name, faction, card})
    onAdd({ name, faction})


    setText('')
    //setDay('')
    setFaction('Rebel')
    //setCardid([])

  }

  return (
    <form className='add-form' onSubmit={onSubmit} id="modal-add-card-bg-fix" style={{width:"320px", backgroundColor:"grey",padding:"20px", borderRadius: "7px"}}>
      

      <div className='form-control'>
        
        <label style={{padding:"2px", color:"white", fontFamily:"Arial"}}>Deck Name</label>
        <input
          type='text'
          placeholder='Deck Name'
          value={name}
          onChange={(e) => setText(e.target.value)}
        />
      </div>


      <div className='form-control' style={{padding:"2px", color:"white", fontFamily:"Arial"}}>
        <label><img className="" src="img/rebel.svg"/></label>
        <input type="radio" value="Rebel"   onChange={(e) => setFaction(e.target.value)} name="faction" required="required"/> 
        
        <label><img className="" src="img/jedi.svg"/></label>
        <input type="radio" value="Jedi"    onChange={(e) => setFaction(e.target.value)} name="faction"/>
        
        <label><img className="" src="img/empire.svg"/></label>
        <input type="radio" value="Empire"  onChange={(e) => setFaction(e.target.value)} name="faction"/>
        
        <label><img className="" src="img/faction-none.svg"/></label>
        <input type="radio" value="None"    onChange={(e) => setFaction(e.target.value)} name="faction"/>
      </div>



      <input style={{padding:"12px", color:"black", fontFamily:"Arial"}} type='submit' value='Save Card' className='btn btn-block' />
    </form>
  )
}

export default Adddeck
