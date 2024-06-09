alert("Jak obsługiwać stronę?\n Strzałkami przesuwamy\n +,- skalujemy\n e,r obracamy\n kolor zmieniamy na stronie")

class inicjaly{
  constructor(){
      this.element = document.getElementById('inicjaly') //div
      this.obiekt = document.getElementById('svg') // element
      this.color_w = '#ffffff'
      this.color_o = '#000000'
      this.color_input_1 = document.getElementById("color_w") //id btn coloru
      this.color_input_2 = document.getElementById("color_o") //id btn coloru
      this.x = 0
      this.y = 0
      this.scale = 1
      this.rotacja = 0
      this.elementHeight=this.element.offsetHeight * this.scale
      this.elementWidth=this.element.offsetWidth * this.scale
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale}) rotate(${this.rotacja}deg)`;
      this.zmiana();
      this.color();
      this.k=1 // pomocnicza w skalowaniu
  }

  zmiana(){
      document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
          this.y -= 10;
        } else if (event.key === 'ArrowDown') {
          this.y += 10;
        } else if (event.key === 'ArrowLeft') {
          this.x -= 10;
        } else if (event.key === 'ArrowRight') {
          this.x += 10;
        } else if (event.key === '+') {
          this.scale += 0.1;
        } else if (event.key === '-') {
          this.scale -= 0.1;
        } else if (event.key === 'r') {
          this.rotacja += 10;
        } else if (event.key === 'e'){
          this.rotacja -=10;
        }
        this.uaktualnij();
      })}

    uaktualnij(){
      
      if (this.elementHeight*this.scale>10 && this.elementWidth*this.scale>10 && this.elementHeight*this.scale<this.windowHeight-40 && this.elementWidth*this.scale<this.windowWidth-40){
      if(this.x>=0 && this.y>=-140 && this.x+(this.elementWidth)/2+50<=this.windowWidth && this.y+this.elementHeight+140<=this.windowHeight){
      if(this.elementWidth+20<this.windowWidth && this.elementHeight+20<this.windowHeight){
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale}) rotate(${this.rotacja}deg)`;
      this.k=this.scale
      }
      else if(this.elementWidth>=this.windowWidth && this.elementHeight>=this.windowHeight){
        this.scale=1
        this.element.style.transform = `translate(${0}px, ${0}px) scale(${this.scale}) rotate(${this.rotacja}deg)`;
      }
        console.log(this.#raport());
      }else{
      if(this.x<0){this.x=0;}
      else if(this.y<-140){this.y=-140}
      else if (this.y+this.elementHeight+140>this.windowHeight){this.y=this.windowHeight-this.elementHeight-140}
      else if (this.x+(this.elementWidth)/2+50>this.windowWidth){this.x=this.windowWidth-((this.elementWidth)/2+50)}
      if (this.scale<0){
        this.scale=0.1
        this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale}) rotate(${0}deg)`;
      }else{
         this.element.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale}) rotate(${0}deg)`;
          this.k=this.scale
        }
      console.log(this.#raport());
    }}else{
      this.scale=this.k
    }
  }

  color(){
      this.color_input_1.addEventListener('change', e=>{
          this.color_w = document.getElementById("color_w").value;
          this.obiekt.style.fill= this.color_w;
          console.log(this.#raport());

      })
      
      this.color_input_2.addEventListener('change', e=>{ 
          this.color_o = document.getElementById("color_o").value;
          this.element.style.stroke = this.color_o;
          console.log(this.#raport());
      })
      }

  #raport(){
      return `Pozycja inicjałów: y=${-this.y}, x=${this.x}
              Rozmiar inicjałów: ${this.elementHeight*this.scale}x${this.elementWidth*this.scale}
              Kolor wypełnienia: ${this.color_w}
              Kolor obramowania: ${this.color_o}
              Poziom rotacji: ${this.rotacja}
              Skala obrazu: ${this.scale}`
  }

}


const inicjal = new inicjaly()

