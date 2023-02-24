const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://omnivorescookbook.com/wp-content/uploads/2017/04/2002_Dan-Dan-Noodles_550.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const list = document.getElementById("liste");

const all = document.querySelector(".all ");
const korean = document.querySelector(".korean ");
const japanese = document.querySelector(".japanese ");
const china = document.querySelector(".chinese");

let ulke = ["Korea", "Japan", "China"];
let ulkeKucuk = ["korean", "japanese", "china"];

function getir() {
  menu.map(meuler => {
    list.innerHTML += `
  <div class="card mb-3" id="abc" style="width:400px; text-align:center;">
    <img src="${meuler.img}" class="card-img-top" style="border-radius:15px; box-shadow: 10px 10px 5px lightblue; height:50%; width:80%; display:flex; align-self:center;" alt="yemek resmi">
    <div class="card-body">
      <h5 class="card-title" style="color: coral; text-shadow: -1px 0 darkblack, 0 1px white, 1px 0 darkblue, 0 -1px purple;">${meuler.title} - ${meuler.category}</h5>
      <p class="card-text" style="color:grey">${meuler.desc}</p>
      <p class="card-text" style="color:darkgreen; font-size:30px;">${meuler.price}</p>
    </div>
  </div>
    `;
  })
}

all.addEventListener("click", function () {
  list.innerHTML = "";
  getir();
})
getir();

korean.addEventListener("click", function () {
  const groupBy = (array, prop) => {
    return array.reduce((acc, obj) => {
      let key = obj[prop]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

  let groupedProducts = groupBy(menu, 'category');

  list.innerHTML = "";

  groupedProducts.Korea.map(gp => {
    list.innerHTML += `
    <div class="card mb-3" id="abc" style="width:400px; text-align:center;">
      <img src="${gp.img}" class="card-img-top" style="border-radius:15px; box-shadow: 10px 10px 5px lightblue; height:60%; width:90%; display:flex; align-self:center;" alt="yemek resmi">
      <div class="card-body">
        <h5 class="card-title" style="color: coral; text-shadow: -1px 0 darkblack, 0 1px white, 1px 0 darkblue, 0 -1px purple;">${gp.title} - ${gp.category}</h5>
        <p class="card-text" style="color:grey">${gp.desc}</p>
        <p class="card-text" style="color:darkgreen; font-size:30px;">${gp.price}</p>
      </div>
    </div>
      `;
  });
})

japanese.addEventListener("click", function () {
  const groupBy = (array, prop) => {
    return array.reduce((acc, obj) => {
      let key = obj[prop]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

  let groupedProducts = groupBy(menu, 'category');

  list.innerHTML = "";

  groupedProducts.Japan.map(gp => {
    list.innerHTML += `
    <div class="card mb-3" id="abc" style="width:400px; text-align:center;">
      <img src="${gp.img}" class="card-img-top" style="border-radius:15px; box-shadow: 10px 10px 5px lightblue; height:60%; width:90%; display:flex; align-self:center;" alt="yemek resmi">
      <div class="card-body">
        <h5 class="card-title" style="color: coral; text-shadow: -1px 0 darkblack, 0 1px white, 1px 0 darkblue, 0 -1px purple;">${gp.title} - ${gp.category}</h5>
        <p class="card-text" style="color:grey">${gp.desc}</p>
        <p class="card-text" style="color:darkgreen; font-size:30px;">${gp.price}</p>
      </div>
    </div>
      `;
  });
})

china.addEventListener("click", function () {
  const groupBy = (array, prop) => {
    return array.reduce((acc, obj) => {
      let key = obj[prop]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

  let groupedProducts = groupBy(menu, 'category');

  list.innerHTML = "";

  groupedProducts.China.map(gp => {
    list.innerHTML += `
    <div class="card mb-3" id="abc" style="width:400px; text-align:center;">
      <img src="${gp.img}" class="card-img-top" style="border-radius:15px; box-shadow: 10px 10px 5px lightblue; height:60%; width:90%; display:flex; align-self:center;" alt="yemek resmi">
      <div class="card-body">
        <h5 class="card-title" style="color: coral; text-shadow: -1px 0 darkblack, 0 1px white, 1px 0 darkblue, 0 -1px purple;">${gp.title} - ${gp.category}</h5>
        <p class="card-text" style="color:grey">${gp.desc}</p>
        <p class="card-text" style="color:darkgreen; font-size:30px;">${gp.price}</p>
      </div>
    </div>
      `;
  });
})