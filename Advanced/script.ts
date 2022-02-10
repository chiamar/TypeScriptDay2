interface vehicles {
    type: string;
    brand: string;
    model: string;
    price: string;
    img: string;
    showCard: Function;
}

let arrVehicles: Array<Vehicle> = [];

class Vehicle implements vehicles {
    constructor (public type: string, public brand: string, public model: string, public price: string, public img: string) {
        arrVehicles.push(this);
    }
    showCard() {
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.type}, ${this.brand}, ${this.model}">
        <div class="card-body">
            <h5 class="card-title">${this.brand}</h5>
            <h6 class="card-title">${this.model}</h6>
            <p class="card-text">${this.price} €</p>
        </div>
      </div>`
    }
}

new Vehicle ("Car", "Tesla", "Model 3", "40,000", "https://www.tesla.com/assets/img/m3_fb_s.jpg");

let resultEl = document.getElementById("result") as HTMLElement;

for (let val of arrVehicles) {
    resultEl.innerHTML += val.showCard();
}

 `[
    {"name": "Tesla Model 3",
    "year": 2020,
    "img": "https://www.tesla.com/assets/img/m3_fb_s.jpg",
    "price": "40.000€"
},

    {"name": "Tesla Model S",
    "year": 2019,
    "img": "https://imgr1.auto-motor-und-sport.de/Tesla-Model-S-Aero-Paket-article169Gallery-65db1f01-1843210.jpg",
    "price": "80.000€"
},
    {"name": "Tesla Model X",
    "year": 2021,
    "img": "https://cdn.pocket-lint.com/r/s/970x/assets/images/144304-cars-review-tesla-model-x-review-lead-image1-vdycmknzck-jpg.webp",
    "price": "110.000€"
},
    {"name": "Audi A4",
    "year": 2020,
    "img": "https://www.ccarprice.com/products/Audi-A4-Prestige-2022.jpg",
    "price": "40.000€"
},

    {"name": "Audio RS7",
    "year": 2019,
    "img": "https://cdn.motor1.com/images/mgl/Kpk8R/s1/4x3/nebulus-audi-rs7.webp",
    "price": "150.000€"
},
    {"name": "Audio RS Q8",
    "year": 2018,
    "img": "https://i.auto-bild.de/ir_img/2/9/9/7/6/1/5/5462cd63235aed93.jpg?impolicy=og_images",
    "price": "127.000€"
},
    {"name": "BMW 1",
    "year": 2021,
    "img": "https://i.auto-bild.de/mdb/extra_large/55/3-f5e.jpg",
    "price": "30.000€"
},
    {"name": "BMW 435",
    "year": 2018,
    "img": "https://www.autoscout24.at/assets/auto/images/model/bmw/bmw-435/bmw-435-l-03.jpg",
    "price": "72.000€"
},
    {"name": "BMW X7",
    "year": 2020,
    "img": "https://i.auto-bild.de/mdb/extra_large/28/x7-bdc.png",
    "price": "84.000€"
}
]`