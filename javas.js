let input = document.querySelector("#new_task");
let clickk = document.querySelector("#add_button");
let box = document.querySelectorAll(".one_box");
let display = document.querySelectorAll(".box");
let cleared = document.querySelector("#clear_button");
let cross = document.querySelectorAll(".two_box");
let onec = cross[0];
let twoc = cross[1];
let threec = cross[2];
let fourc = cross[3];
let fivec = cross[4];
let i = 0;
clickk.addEventListener("click",()=>{
    if(i<box.length){
        box[i].innerText = input.value;
        display[i].style.display = "flex";
        i++;
        
    }
    else{
        alert("option finish........")
    } 
})
cleared.addEventListener("click",()=>{
    console.log("clicked second");
    clear_all();
    i = 0;
})
function clear_all(){
    display.forEach((l)=>{
           l.style.display = "none";
    })
}
    onec.addEventListener("click",()=>{
        console.log("cross clicked....");
        display[0].style.display = "none";
        i--;
    })
twoc.addEventListener("click",()=>{
    console.log("cross clicked....");
    display[1].style.display = "none";
    i--;
})
threec.addEventListener("click",()=>{
    console.log("cross clicked....");
    display[2].style.display = "none";
    i--;
})
fourc.addEventListener("click",()=>{
    console.log("cross clicked....");
    display[3].style.display = "none";
    i--;
})
fivec.addEventListener("click",()=>{
    console.log("cross clicked....");
    display[4].style.display = "none";
    i--;
})
