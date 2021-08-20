import React, { useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);

  const API = "http://localhost:8002/bots";
  
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(json => setBots(json));    //Get bots in state
    //.then(json => console.log(json));
  }, []);
  
  //event listener for botcollection
  function enlistBots(id) {
    //console.log(id)
    setBots(bots.map(bot => bot.id === id ? { ...bot, enlisted: true} : bot));
  }

  function removeBots(id) {
    setBots(bots.map(bot => bot.id === id ? { ...bot, enlisted: false } : bot));
  }

  function deleteBot(id) {
    //console.log(`discharging`, id)
    setBots(bots.filter(bot => bot.id !== id));
  }

    return (
      <div>
        <YourBotArmy bots={bots.filter(bot => bot.enlisted)} handleClick={removeBots} deleteBot={deleteBot}/>
        <BotCollection bots={bots} handleClick={enlistBots} deleteBot={deleteBot}/>
      </div>
    )
}

export default BotsPage;
