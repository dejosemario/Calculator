//select all the html documents needed
const input_element = document.querySelector(".input");
const output_operation_element = document.querySelector(".operation .value");
const output_result_element = document.querySelector(".result .value");

//createed all the buttons needed in js
let calculator_buttons = [
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },{
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    },,{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    }
];

function createButtons(){
    const btns_per_row = 4;
    let added_btn = 0;

    calculator_buttons.forEach((button, index)=>{
       if(added_btn % btns_per_row == 0){
           input_element.innerHTML += `<div class = "row"></div>`;
        }         

        const row = document.querySelector(".row:last-child");

        row.innerHTML += `<button id = "${button.name}">
                        ${button.symbol}
                        <button>`;

        added_btn++
    }
    )
}
createButtons();

//adding an event listener on the input class
input_element.addEventListener("click", event=>{
    const target_btn = event.target;

    calculator_buttons.forEach(button =>{
        if(button.name ==target_btn.id)calculator(button);
    })
})

//calculator data
let data = {
    operation : [],
    result :[],
}

//calculator button
function calculator(button){
  if(button.type == "number"){
      data.operation.push(button.symbol);
      data.result.push(button.formula);
  }
  else if(button.type == "operator"){
    data.operation.push(button.symbol);
    data.result.push(button.formula);    
  }
  else if(button.type =="key"){
    if(button.name =="clear"){
        data.operation =[];
        data.result = [];

    }
    else if(button.name == "delete"){
        data.operation.pop();
        data.result.pop();
        updateOutputResult(0)
    }
  }
  //getting the result once one clicks calculate
  else if(button.type =="calculate"){
    let join_result = data.result.join('');
    let result = eval(join_result);
    updateOutputResult(result);
    data.operation = [];
    data.result = [];
    data.operation.push(result);
    data.result.push(result);
    return;

  }
  updateOutputOpeartion(data.operation.join(''));
}
//updating output result to 0 after deleting
function updateOutputResult(result){
    output_result_element.innerHTML = result;
}

//updating output operation 
function updateOutputOpeartion(operation){
    output_operation_element.innerHTML = operation;
}