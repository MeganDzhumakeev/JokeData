import './App.css';
import OneJoke from "./components/OneJoke";
import AllJokes from './components/AllJokes';
import EditJoke from './components/EditJoke';
import NewJoke from './components/NewJoke';
import Home from './components/Home';
import {Router} from "@reach/router";
import DadJoke from './components/DadJoke';



function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <AllJokes path="/all" /> 
        <NewJoke path="/new" />
        <OneJoke path="/jokes/:id" />
        <EditJoke path="/jokes/edit/:id" />
      </Router>



    </div>
  );
}

export default App;
