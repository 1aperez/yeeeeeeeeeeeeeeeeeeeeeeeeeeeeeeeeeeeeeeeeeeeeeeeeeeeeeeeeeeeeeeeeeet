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

let p1Battle = {

  attack: function(mv){
    if(mv==1 ){
      return this.moves.punch();

    }
    else if(mc==2){
      this.moves.other
  }
  
  },
  defend: function(atkmv){
    let rawDamage =atkmv - this.states.def
    this.stats.hp=this.stats-rawDamage;
    if(this.stats.hp<0){
      this.stats.hp=0;
    }
  }

}
let physical = {
  razorPunch: function(){
    let baseDamage= this.stat.atk*0.75
    let bonus = 0.5*this.stats.atk*Math.random();
    return baseDamage+bonus
  },
  charge: function(){
    let pain= Math.random();
    if(pain<0.50){
      this.stats.hp= this.sats.hp-this.stats.atk/4;
      return this.stats.atk+bonus
    }
  },
    falconPunch: function(){
    let baseDamage= this.stat.atk*0.5;
    let bonus = 1*this.stats.atk*Math.random();
    return baseDamage+bonus
    }
    
}




let magic={
  hydroPump: function(){
    if(this.stats.mp>=8){
      this.stats.mp= this.stats.mp-8;
      let tetra=Math.random();
      let pump=Math.ceil(this.stats.sp/3)
       if(tetra<0.10){
        return 2*pump;
      }
      else if(tetra<0.10){
        return 3*pump;
      }
      else if(tetra<0.10){
        return 4*pump;
      }
    }
  }
}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1moves,
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
