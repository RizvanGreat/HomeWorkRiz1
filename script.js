let words = [
  { 
en: "apple", 
ru: "яблоко" 
},
  { 
en: "car", 
ru: "автомобиль" 
},
  { 
en: "book", 
ru: "книга" },
];

let appleEn = document.querySelector(".apple-en")
let appleRu = document.querySelector(".apple-ru")
appleEn.textContent = words[0].en
appleRu.textContent = words[0].ru

let carEn = document.querySelector(".car-en")
let carRu = document.querySelector(".car-ru")
carEn.textContent = words[1].en
carRu.textContent = words[1].ru

let bookEn = document.querySelector(".book-en")
let bookRu = document.querySelector(".book-ru")
bookEn.textContent = words[2].en
bookRu.textContent = words[2].ru

function hiding(event){
  if(event.target.className === "block1") {
    appleEn.classList.toggle("hide")
    appleRu.classList.toggle("hide") 
  }
  if(event.target.className === "block2") {
    carEn.classList.toggle("hide")
    carRu.classList.toggle("hide")
  }
  if(event.target.className === "block3") {
    bookEn.classList.toggle("hide")
    bookRu.classList.toggle("hide")
  }
}
  

