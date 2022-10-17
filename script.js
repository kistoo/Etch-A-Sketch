const sketchSide = document.querySelector("output");
const input = document.getElementById("slider");
const canvas = document.getElementById("canvas");
let paintStatus = false;

generateSketch();
input.onchange = () => generateSketch();

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

function paint(e){
    if (paintStatus===true || e.type==="click"){
        e.target.style.backgroundColor="black";}
}