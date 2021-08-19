import React, { useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);

  const API = "http://localhost:8002/bots"

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(json => setBots(json));    //Get bots in state
    //.then(json => console.log(json));
  }, []);

    return (
      <div>
        <YourBotArmy bot={bots}/>
        <BotCollection bots={bots} />
      </div>
    )
}

export default BotsPage;
