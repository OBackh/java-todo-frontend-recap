import Lane from "./components/Backlog/Lane.tsx";
import './App.css'
import { useState, useEffect} from "react";
import axios from "axios"; //API Helper for easy fetching (See Line 23!)
import logo from './assets/radar.svg';

export type toDoCard = {
    id: string;
    description: string;
    status: string
}

export default function App() {

    const [cards, setCards] = useState<toDoCard[]>([])


    useEffect(()=>{
        console.log("Sending Request for 2Dos ")
        axios.get(`/api/todo`)
            .then((response) => {
                console.log("API Response: ", response.data);
                setCards(Array.isArray(response.data) ? response.data : []);
                //Add new Characters to old ones
                //setCharacters([...setCharacters, ...response.data.results])
                //additional infos: setPageInfo(response.data.info)
            })
            .catch((error) => {
                alert(error.message)
            });
        console.log("Done Sending Request!")
    }, [])



  return (
      <>
          <header>
              <h1 className="appHeadline">AufgabenRadar&nbsp;
                  <img src={logo} width="50" alt="Logo"/>
              </h1>
          </header>

          <main>
              <div className="tableContainer">
                  <Lane name="OPEN" cards={cards} setCards={setCards}/>
                  <Lane name="IN_PROGRESS" cards={cards} setCards={setCards}/>
                  <Lane name="DONE" cards={cards} setCards={setCards}/>

              </div>
          </main>
<footer>
    <form>
        <input className="inputField"/><button className="sendButton">Create 2Do</button>
    </form>

</footer>

      </>
  )
}
