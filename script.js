const sketchSide = document.querySelector("output");
const input = document.getElementById("slider");
const canvas = document.getElementById("canvas");

input.onchange = () => generateSketch();

function generateSketch(){
    canvas.textContent="";
    //create a matrix
    for (let i = 0 ; i<sketchSide.textContent;i++){
        for (let j = 0; j<sketchSide.textContent;j++){
        let div = document.createElement("div");
        div.setAttribute("style",`width:${800/sketchSide.textContent}px; height:${800/sketchSide.textContent}px`)
        canvas.appendChild(div);
        }
    }
}