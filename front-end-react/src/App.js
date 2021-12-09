import { useState, useEffect } from 'react'


import Home from './pages/Home';
import HomeDeck from './pages/HomeDeck';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import CardDetails from './details/CardDetails';
import DeckDetails from './details/DeckDetails';
import NotFound from './pages/NotFound';

function App() {

  const [rightname, setRightname] = useState("");
    
  const addname = (name) => {
    setRightname(name)
  }


  return (
    <Router>

      {/*<div className="App">*/}
        
        {/*<Navbar />*/}
        
    <div className="all-content">
        
        <div className="panel-1">

          <Link to ='/'>
          <div className="button button-1" style={{ textDecoration: 'none' }}>
            <img className="icon" src="http://localhost:3000/img/Card.svg" />
            <div className="roboto-normal-onyx-16px text">All Cards</div>
          </div> 
          </Link>

          <Link to ='/decks'>
          <div className="button button-2">
            <img className="icon" src="http://localhost:3000/img/Deck.svg" />
            <div className="roboto-normal-onyx-16px text">Decks</div>
          </div> 
          </Link>

          <div className="main-title">
            <div className="color2">SW-API Deck Builder</div>
          </div> 
          
          {rightname &&
          <div className="button button-3">
  
             <div className="roboto-normal-onyx-16px text callbackname-notes ">{rightname}</div> 
          </div>
          }

        </div>


        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/decks">
              <HomeDeck />
            </Route>
            <Route path="/cards/:id">
              <CardDetails addnameright={addname} />
            </Route>
            <Route path="/decks/:id">
              <DeckDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      

    </div>

      {/*</div>*/}
    
    </Router>
  );
}

export default App;
