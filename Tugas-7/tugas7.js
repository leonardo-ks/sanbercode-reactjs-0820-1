//Soal 1
//Release 0
class Animal {
    constructor(name){
      this.name = name
      this.legs = 4
      this.cold_blooded = false
    }
    get gname() {
      return this.name
    }
    get glegs() {
      return this.legs
    }
    get gcold_blooded() {
      return this.cold_blooded
    }
  }
   
  var sheep = new Animal("shaun");
   
  console.log(sheep.gname) // "shaun"
  console.log(sheep.glegs) // 4
  console.log(sheep.gcold_blooded) // false
  
  //Release 1
  class Frog extends Animal {
    constructor (name){
      super(name)
    }
    jump(){
      return console.log("hop hop")
    }
  }
  class Ape extends Animal {
    constructor (name){
      super(name)
      this.legs = 2
    }
    yell(){
      return console.log("Auooo")
    }
  }
  
  var sungokong = new Ape("kera sakti")
  sungokong.yell() // "Auooo"
   
  var kodok = new Frog("buduk")
  kodok.jump() // "hop hop" 

//Soal 2

class Clock {
   
    constructor({template}){
      this.template = template;
      this.timer = null;
    }
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop(){
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(this.render.bind(this), 1000);
    }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();