let width = window.innerWidth;
let height = window.innerHeight;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

let alphys;
let asgore;
let asriel;
let gaster;
let papyrus;
let sans;
let temmie;
let toriel;
let undyne;

function setup() {
  canvas = createCanvas(width, height);

  //load sounds
  alphys = loadSound('Alphys.mp3');
  asgore = loadSound('Asgore.mp3');
  asriel = loadSound('Asirel.mp3');
  gaster = loadSound('Gaster.mp3');
  papyrus = loadSound('Papyrus.mp3');
  sans = loadSound('Sans.mp3');
  temmie = loadSound('Temmie.mp3');
  toriel = loadSound('Toriel.mp3');
  undyne = loadSound('Undyne.mp3');


  let b1 = new Button(width/3, height/3, 200, 80, color(128, 0, 128), color(186, 85, 211), alphys)
  let b2 = new Button(width/2, height/3, 200, 80, color(147, 112, 219), color(230, 230, 250), asgore)
  let b3 = new Button(2*width/3, height/3, 200, 80, color(186, 85, 211), color(221, 160, 221), asriel)

  let b4 = new Button(width/3, height/2, 200, 80, color(138, 43, 226), color(216, 191, 216), gaster)
  let b5 = new Button(width/2, height/2, 200, 80, color(148, 0, 211), color(230, 230, 250), papyrus)
  let b6 = new Button(2*width/3, height/2, 200, 80, color(216, 191, 216), color(230, 230, 250), sans)

  let b7 = new Button(width/3, 2*height/3, 200, 80, color(230, 230, 250), color(221, 160, 221), temmie)
  let b8 = new Button(width/2, 2*height/3, 200, 80, color(221, 160, 221), color(238, 130, 238), toriel)
  let b9 = new Button(2*width/3, 2*height/3, 200, 80, color(218, 112, 214), color(255, 240, 245), undyne)

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7)
  buttons_bottom.push(b8)
  buttons_bottom.push(b9)
  
}

function mousePressed(){
  for (let i = 0; i < buttons_top.length; i++){
    buttons_top[i].clicked(mouseX, mouseY);
    buttons_middle[i].clicked(mouseX, mouseY);
    buttons_bottom[i].clicked(mouseX, mouseY);
  }
}

function mouseReleased(){
  for (let i = 0; i < buttons_top.length; i++){
    buttons_top[i].y = height/3;
    buttons_middle[i].y = height/2;
    buttons_bottom[i].y = 2*height/3;
  }
}

function draw() {
  background(75, 0, 130);
  noStroke();

  for (let i = 0; i < buttons_top.length; i++){
    buttons_top[i].show();
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
}


class Button {
  constructor(x, y, w, h, color, accent, sound){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.sound = sound;
  }

  show() {
    noStroke();
    fill(this.color)
    rect(this.x - 100, this.y, this.w, 50);

    fill(this.accent)
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color)
    arc(this.x, this.y + 50, this.w, this.h, TWO_PI, PI)
  }

  clicked(px, py){
    let d = dist(px, py, this.x, this.y);

    if (d < this.w/ 2){
      this.y = this.y + 10;
      this.sound.play();
    }
  }
}
