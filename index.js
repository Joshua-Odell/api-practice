'use strict';

let number = 3;
let pictures = [];
let result = "";


function pull(){
    number = parseInt($("#number").val());
    if (number>50 || number<1) {
        alert("please choose a number between 1 and 50");
    }
    else {
        fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
            .then(response => response.json())
            .then(response => display(response.message))
            .catch(error => renderError(error))
    }
}

function renderError(error) {
    console.log({error})
    $('.result').html(error);
}

function display(pictures) {
     let result = ''
     for (let i = 0; i<pictures.length; i++){
         let temp = pictures[i];
         let pic = '<img src="' + temp + '">'
         result = result.concat(pic);
     }
    $('.result').html(result);
    
}

function button() {
    $('.enter').on("click", function(e){
        e.preventDefault();
        pull();
    }); 
}

$(button);