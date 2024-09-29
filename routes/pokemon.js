const express = require('express');
const pokemon = express.Router();
const pk=require('../pokedex.json').pokemon;
pokemon.post("/",(req,res,next)=>{
    return res.status(200).send(req.body);
});
pokemon.get("/", (req,res,next)=>{
    return res.status(200).send(pk);
});
pokemon.get("/pokemon/:id [0-9]{1,3}", (req,res,next)=>{
    const id=req.params.id -1;
    if(id>=0&&id<=150){
    return res.status(200).send(pk[req.params.id -1]);
    }
    return res.status(404).send("Pokemon no encontrado");
});
pokemon.get("/pokemon/:name([A-Za-z]+)", (req,res,next)=>{
    const name=req.params.name;
    /*for(i=0;i<pokemon.length;i++){    
        if(pokemon[i].name.toUpperCase()==name.toUpperCase()){
            return res.status(200).send(pokemon[i]);
        }
    }*/
    const pkmn = pk.filter((p)=>{
        return(p.name.toUpperCase()==name.toUpperCase())&& p;
    });
    if(pkmn.length>0){
        return res.status(200).send(pkmn)
    }
    return res.status(404).send("Pokemon no encontrado");
});
module.exports=pokemon;