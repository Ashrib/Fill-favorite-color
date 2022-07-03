var color;
function colorPick(col) {
    if(col === "red"){
        color = "red";
    }
    else if(col === "yellow"){
        color = "yellow";
    }
    else if(col === "orange"){
        color = "orange";
    }
    else if(col === "blue"){
        color = "blue";
    }
    else if(col === "pink"){
        color = "pink";
    }
    else if(col === "purple"){
        color = "purple";
    }
    else if(col === "orangered"){
        color = "rgb(255, 115, 0)";
    }
    else if(col === "lightgreen"){
        color = "lightgreen";
    }
    else if(col === "green"){
        color = "green";
    }
    else if(col === "aqua"){
        color = "aqua";
    }
    else if(col === "lightblue"){
        color = "lightblue";
    }
    else if(col === "black"){
        color = "black";
    }
}
function fillColor(shape) {
    if(shape === "square"){
        document.getElementById("square").style.background = color;
        document.getElementById("square").style.transition = "1s";
    }
    else if(shape === "circle"){
        document.getElementById("circle").style.background = color;
        document.getElementById("circle").style.transition = "1s";
    }
    else if(shape === "oval"){
        document.getElementById("oval").style.background = color;
        document.getElementById("oval").style.transition = "1s";
    }
    else if(shape === "rectangle"){
        document.getElementById("rectangle").style.background = color;
        document.getElementById("rectangle").style.transition = "1s";
    }
    else if(shape === "parallelogram"){
        document.getElementById("parallelogram").style.background = color;
        document.getElementById("parallelogram").style.transition = "1s";
    }
    else if(shape === "triangle"){
        document.getElementById("triangle").style.borderBottomColor = color;
        document.getElementById("triangle").style.transition = "1s";
    }
    else if(shape === "trapezoid"){
        document.getElementById("trapezoid").style.borderBottomColor = color;
        document.getElementById("trapezoid").style.transition = "1s";
    }
};
function textColor() {
    var colors = ["red", "orange", "yellow", "green","blue","purple", "black", "yellowgreen", "pink", "lightgreen"];
    document.getElementById("text").style.color = colors[Math.round(Math.random() * 9)];
    setTimeout(textColor,1000)
}
textColor();  

   
