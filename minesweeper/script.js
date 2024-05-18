//click event listeners will be a huge thing
//random assignements aswell
/*todo: 
clicking changes color(javaScript) (done)
clicking displays a number(edit the text i guess?(inital setup done just have to apply it)
a start button that starts the game and randomly gives different blocks
a number that is hidden until clicked(doneish)*/
const column1 = document.getElementById("column1");
const column2 = document.getElementById("column2");
const column3 = document.getElementById("column3");
const column4 = document.getElementById("column4");
const column5 = document.getElementById("column5");
const column6 = document.getElementById("column6");
const column7 = document.getElementById("column7");
const column8 = document.getElementById("column8");
const column9 = document.getElementById("column9");
const column10 = document.getElementById("column10");
const column11 = document.getElementById("column11");
const column12 = document.getElementById("column12");
const column13 = document.getElementById("column13");
const column14 = document.getElementById("column14");
const column15 = document.getElementById("column15");
const column16 = document.getElementById("column16");
const Variables =["1", "2", "3","4", "5", "6", "7", "8",
"9", "10", "11", "12", "13", "14", "15", "16"]
const button = document.getElementById("btn");
let square1 = 1
let square2 = 2
let square3 = 3
let square4 = 4
let square5 = 5
let square6 = 6
let square7 = 7
let square8 = 8
let square9 = 9
let square10 = 10
let square11 = 11
let square12 = 12
let square13 = 13
let square14 = 14
let square15 = 15
let square16 = 16
let mine
button.addEventListener("click", e=>{
    const randomVar = Math.floor(Math.random() * Variables.length);
    mine = randomVar
    console.log(mine);
    return mine
})
// current problem : find a way to give mine to multiple columns
//the button click should give a property to the assigned variable(done)
//grab one random variable, assign it to the button click event listener, the function should give one the chosen variable the mine attribute(done)


column1.addEventListener("click", e =>{
    if (mine == square1){
        column1.innerHTML = "x(";
        column1.style.background = "red";
        column1.style.fontSize = "12.8px"
    } else{
        column1.style.background = "green"
    }
})
column2.addEventListener("click", e =>{
    if (mine == square2){
        column2.innerHTML = "x(";
        column2.style.background = "red";
        column2.style.fontSize = "12.8px"
    }else{
        column2.style.background = "green"
    }
})

column3.addEventListener("click", e =>{
    if (mine == square3){
        column3.innerHTML = "x(";
        column3.style.background = "red";
        column3.style.fontSize = "12.8px"
        }else{
            column3.style.background = "green"
        }
})

column4.addEventListener("click", e =>{
    if(mine == square4){
        column4.innerHTML = "x(";
        column4.style.background = "red";
        column4.style.fontSize = "12.8px"
        }else{
            column4.style.background = "green"
        }
})
column5.addEventListener("click", e =>{
    if(mine == square5){
        column5.innerHTML = "x(";
        column5.style.background = "red";
        column5.style.fontSize = "12.8px"
        }else{
            column5.style.background = "green"
        }
})
column6.addEventListener("click", e =>{
    if(mine == square6){
        column6.innerHTML = "x(";
        column6.style.background = "red";
        column6.style.fontSize = "12.8px"
        }else{
            column6.style.background = "green"
        }
})
column7.addEventListener("click", e =>{
    if(mine == square7){
        column7.innerHTML = "x(";
        column7.style.background = "red";
        column7.style.fontSize = "12.8px"
        }else{
            column7.style.background = "green"
        }
})
column8.addEventListener("click", e =>{
    if(mine == square8){
        column8.innerHTML = "x(";
        column8.style.background = "red";
        column8.style.fontSize = "12.8px"
        }else{
            column8.style.background = "green"
        }
})
column9.addEventListener("click", e =>{
    if(mine == square9){
        column9.innerHTML = "x(";
        column9.style.background = "red";
        column9.style.fontSize = "12.8px"
        }else{
            column9.style.background = "green"
        }
})
column10.addEventListener("click", e =>{
    if(mine == square10){
        column10.innerHTML = "x(";
        column10.style.background = "red";
        column10.style.fontSize = "12.8px"
        }else{
            column10.style.background = "green"
        }
})
column11.addEventListener("click", e =>{
    if(mine == square11){
        column11.innerHTML = "x(";
        column11.style.background = "red";
        column11.style.fontSize = "12.8px"
        }else{
            column11.style.background = "green"
        }
})
column12.addEventListener("click", e =>{
    if(mine == square12){
        column12.innerHTML = "x(";
        column12.style.background = "red";
        column12.style.fontSize = "12.8px"
        }else{
            column12.style.background = "green"
        }
})
column13.addEventListener("click", e =>{
    if(mine == square13){
        column13.innerHTML = "x(";
        column13.style.background = "red";
        column13.style.fontSize = "12.8px"
        }else{
            column13.style.background = "green"
        }
})
column14.addEventListener("click", e =>{
    if(mine == square14){
        column14.innerHTML = "x(";
        column14.style.background = "red";
        column14.style.fontSize = "12.8px"
        }else{
            column14.style.background = "green"
        }
})
column15.addEventListener("click", e =>{
    if(mine == square15){
        column15.innerHTML = "x(";
        column15.style.background = "red";
        column15.style.fontSize = "12.8px"
        }else{
            column15.style.background = "green"
        }
})
column16.addEventListener("click", e =>{
    if(mine == square16){
        column16.innerHTML = "x(";
        column16.style.background = "red";
        column16.style.fontSize = "12.8px"
        }else{
            column16.style.background = "green"
        }
})

//I HAVE TO OPTIMIZE THIS CODE LMAO