interface vehicles {
  type: string;
  brand: string;
  model: string;
  year: number;
  img: string;
  showCard: Function;
}

let arrVehicles: Array<Vehicle> = [];

class Vehicle implements vehicles {
  constructor(public type: string, public brand: string, public model: string, public year: number, public img: string) {
    arrVehicles.push(this);
  }
  showCard() {
    return `<div class="card border-0" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" height="200" style="object-fit:cover; object-position:center" alt="${this.type}, ${this.brand}, ${this.model}">
      <div class="card-body" style="opacity:0; height:0; padding:0">
        <h5 class="card-title">${this.brand}</h5>
        <h6 class="card-title">${this.model}</h6>
        <p class="card-text">Price: ${this.calculatePrice()} €</p>
      </div>
    </div>`
  }

  calculatePrice() {
    let price: number = 0;

    if(this.brand == "Tesla") {
      price = 70000;
      if (this.model == "Model 3") {
        price += 5000;
      } else if (this.model == "Model S") {
        price += 10000;
      } else if (this.model == "Model X") {
        price += 15000;
      }
    } else if(this.brand == "Audi") {
      price = 50000;
    } else if(this.brand == "BMW") {
      price = 60000;
    } else if(this.brand == "Kawasaki") {
      price = 15000;
    } else if (this.brand == "Suzuki") {
      price = 12000;
    } else if (this.brand == "Man") {
      price = 55000;
    } else if (this.brand == "DAF") {
      price = 51000;
    }
    
    return price
  }
}

class Car extends Vehicle {
  // type: string = "Car"
  constructor(type: string, brand: string, model: string, year: number, img: string) {
    super(type, brand, model, year, img)
  }
}

new Car("Car", "Tesla", "Model 3", 2020, "https://www.tesla.com/assets/img/m3_fb_s.jpg");
new Car("Car", "Tesla", "Model S", 2019, "https://imgr1.auto-motor-und-sport.de/Tesla-Model-S-Aero-Paket-article169Gallery-65db1f01-1843210.jpg");
new Car("Car", "Tesla", "Model X", 2021, "https://cdn.pocket-lint.com/r/s/970x/assets/images/144304-cars-review-tesla-model-x-review-lead-image1-vdycmknzck-jpg.webp");
new Car("Car", "Audi", "A4", 2020, "https://www.ccarprice.com/products/Audi-A4-Prestige-2022.jpg");
new Car("Car", "Audi", "RS7", 2019, "https://cdn.motor1.com/images/mgl/Kpk8R/s1/4x3/nebulus-audi-rs7.webp");
new Car("Car", "Audi", "RS Q8", 2018, "https://i.auto-bild.de/ir_img/2/9/9/7/6/1/5/5462cd63235aed93.jpg?impolicy=og_images");
new Car("Car", "BMW", "1", 2021, "https://i.auto-bild.de/mdb/extra_large/55/3-f5e.jpg");
new Car("Car", "BMW", "435", 2018, "https://www.autoscout24.at/assets/auto/images/model/bmw/bmw-435/bmw-435-l-03.jpg");
new Car("Car", "BMW", "X7", 2020, "https://i.auto-bild.de/mdb/extra_large/28/x7-bdc.png");

class Motorbike extends Vehicle {
  constructor(type: string, brand: string, model: string, year: number, img: string) {
    super(type, brand, model, year, img)
  }
}

new Motorbike("Motorbike", "Kawasaki", "Ninja 700", 2017, "https://img1.motorradonline.de/Kawasaki-Ninja-700-169FullWidth-2c7b9f28-1778366.jpg")
new Motorbike("Motorbike", "Suzuki", "GSX-R 1000", 2018, "https://img1.motorradonline.de/Suzuki-GSX-R-1000--169FullWidth-74676ac-1663112.jpg")


class Truck extends Vehicle {
  constructor(type: string, brand: string, model: string, year: number, img: string) {
    super(type, brand, model, year, img)
  }
}

new Truck("Truck", "Man", "TGX Individual Lion S", 2015, "https://imgr1.auto-motor-und-sport.de/MAN-TGX-Individual-Lion-S-169FullWidth-7a891dc8-1765883.jpg");
new Truck("Truck", "DAF", "XF", 2016, "https://transport-online.de/sites/default/files/public/styles/_news_1050x700_/public/images-news-teaser/daf-cf-and-xf-available-switchable-front-wheel-drive.jpg");


let resultEl = document.getElementById("result") as HTMLElement;

for (let val of arrVehicles) {
  resultEl.innerHTML += val.showCard();
}

let images = document.getElementsByClassName("card-img-top") as HTMLCollection;
let info = document.getElementsByClassName("card-body") as HTMLCollection;

let visibility = false as boolean;

for (let i=0; i<images.length; i++) {
  images[i].addEventListener("click", function() {
    let element = info[i] as HTMLElement;

    if (visibility == false) {
      // element.style.display = "block";
      element.style.opacity = "1";
      element.style.transition = "0.5s";
      element.style.height = "100px";
      element.style.paddingTop = "10px";
      visibility = true;
    } else {
      // element.style.display = "none";
      element.style.opacity = "0";
      element.style.height = "0";
      element.style.padding = "0";
      visibility = false;
    }
  })
}