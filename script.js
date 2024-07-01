let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() { 
   count += 1
    countEl.innerText = count;
    
}

function save() {
   let countdash = count + " - "
   saveEl.textContent += countdash;
   console.log(count);
}


