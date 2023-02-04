const $content = document.querySelector('.main__content');
const $addButton = document.querySelector('.add');
const $sortButton = document.querySelector('.sort');


renderFirst();

// The createBox function creates a Box for a number 

function createBox (number, id){
    // create a box for number 
    const item = document.createElement("div");
    item.classList.add("box-item");
    item.setAttribute("id",id);
    // create delete button (X)
    const btn = document.createElement("button");
    btn.innerHTML = 'X';
    btn.classList.add("box-item__close-icon");
    btn.addEventListener("click", ()=>{removeNum(id)});
    // create span for number 
    const num = document.createElement("span");
    num.innerHTML = number;
    num.classList.add("box-item__number");
    item.appendChild(btn);
    item.appendChild(num);
    $content.appendChild(item);
}

let removeNum = (id) =>{
    arrOfNumbers.splice(id, 1);
    render(arrOfNumbers);
   }
   
let addNumber = () => {
       let x = Math.round(Math.random() * 1000);
       arrOfNumbers.push(x);
       render(arrOfNumbers);
   }
   
let sortNumbers = () => {
       arrOfNumbers.sort(function(a, b){return a - b});
       render(arrOfNumbers);
       console.log( arrOfNumbers);
   }

// rendering 

function renderFirst(){
    let tepmString = localStorage.getItem("myArray");
    let arrOfNumbers = tepmString.split(",")
    console.log(arrOfNumbers);
    if(tepmString === null || tepmString === ""){
        arrOfNumbers = [];
    }
    render(arrOfNumbers);
}

function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

function render (arr){
    removeAllChildNodes($content);
    localStorage.setItem("myArray", arrOfNumbers);
    arr.map((el, index) => {
      createBox(el, index)
    })
}

// addig eventnts to buttons
$addButton.addEventListener("click", addNumber);
$sortButton.addEventListener("click", sortNumbers);

