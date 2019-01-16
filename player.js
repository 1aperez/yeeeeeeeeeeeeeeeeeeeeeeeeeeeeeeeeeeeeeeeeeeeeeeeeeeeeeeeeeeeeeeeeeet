//generic stats object

let p1Name = "Dante";

let p1Stats = { 
  hp:80,
  mp: 120,
  atk: 80,
  def: 20,
  sp:20

}

let p2Name = "Hunter Demon";

let p2Stats = {
hp: 150,
mp: 50,
atk:80,
Def:20,
Sp: 20
}

let battle = {

  attack: function(){},
  defend: function(){}

}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}
