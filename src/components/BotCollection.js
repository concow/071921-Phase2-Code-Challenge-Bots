import React from "react";
import BotCard from "./BotCard";
//import BotSpecs from "./BotSpecs";

function BotCollection({ bots, handleClick, deleteBot}) {

  //const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bots

  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={handleClick} deleteBot={deleteBot}/>)}
      </div>
    </div>
  );
}

export default BotCollection;