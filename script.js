//options
const input = document.getElementById("slider");
const color = document.getElementById("color");
const sketchSide = document.querySelector("output");
const randomColor = document.getElementById("random");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
//canvas
const canvas = document.getElementById("canvas");
let paintStatus = false;
let paintColor = "black";
let paintMode = "color";

function generateSketch(){
    canvas.textContent="";
    //create a matrix
    for (let i = 0 ; i<sketchSide.textContent;i++){
        for (let j = 0; j<sketchSide.textContent;j++){
        let div = document.createElement("div");
        div.setAttribute("style",
        `width:${800/sketchSide.textContent}px;
        height:${800/sketchSide.textContent}px`);
        //toggle paint status 
        div.addEventListener("mousedown",()=>paintStatus=true);
        div.addEventListener("mouseup",()=>paintStatus=false);
        //paints
        div.addEventListener("mouseover",(e)=>paint(e));
        div.addEventListener("click",(e)=>paint(e));
        canvas.appendChild(div);
        }
    }
}

function getMode(mode,e){
    paintMode=mode;
    switch(paintMode){
        case "color":
            paintColor = e.target.value;
            break;
        case "eraser":
            paintColor = "white";
            break;
    }
}

function getRandomColor(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    paintColor = `rgb(${r},${g},${b})`;
}

function paint(e){
    if (paintStatus===true || e.type==="click"){
        if (paintMode==="random"){
            getRandomColor();
        }
        e.target.style.backgroundColor=`${paintColor}`;
    }
}

generateSketch();
input.onchange = () => generateSketch();
color.onchange = (e) => getMode("color",e);
randomColor.addEventListener("click", () => getMode("random"));
eraser.addEventListener("click", () => getMode("eraser"));
clear.addEventListener("click", () => generateSketch());