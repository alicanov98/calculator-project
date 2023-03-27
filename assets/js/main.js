let equal_pressed=0;
// Access all buttons excluding C and Del
let button_input=document.querySelectorAll(".input-button");

// Access input.clear and erase
let input=document.querySelector("#input");
let equal=document.querySelector("#equal");
let clear=document.querySelector("#clear");
let erase=document.querySelector("#erase");

window.onload=()=>{
    input.value=" ";
};

button_input.forEach((button_class)=>{
    console.log(button_class)
    button_class.addEventListener("click",()=>{
        if(equal_pressed==1){
            input.value=" ";
            equal_pressed=0;
        }
        // display value of each button
        input.value+=button_class.value;
    })
})

equal.addEventListener("click",()=>{
    equal_pressed=1
    let inp_val=input.value
    try{
        // evaluate user's input
        let solution=eval(inp_val)
        // True for natural numbers
        // flase for decimals
        if(Number.isInteger(solution)){
            input.value=solution
        }else{
            input.value=solution.toFixed(2);
        }
    }catch(err){
        alert("Invalid Input");
    }
})


// Clear Whole Input
clear.addEventListener("click",()=>{
    input.value=" ";
});

erase.addEventListener("click",()=>{
    input.value=input.value.substr(0,input.value.lenght-1)
})