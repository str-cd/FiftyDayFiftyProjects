
// function resultOfBmi(){
//     let inputHeight=parseInt(document.getElementById('heightInput').value);
//     let inputWeight=parseInt(document.getElementById('weightInput').value);

//     let bmi=((inputWeight) / ((inputHeight * inputHeight)/10000)).toFixed(2);

//     document.getElementById('resultbox').innerText=bmi;
// }


let calculateBtn = document.querySelector('#calculate');

calculateBtn.addEventListener('click',result)


function result(){


    let inputHeight=parseInt(document.getElementById('heightInput').value);
    let inputWeight=parseInt(document.getElementById('weightInput').value);


    if(inputHeight===""||inputHeight<0||isNaN(inputHeight)){
        document.getElementById('resultbox').innerText="Enter a valid Height";
    }

    else if(inputWeight===""||inputWeight<0||isNaN(inputWeight)){
        document.getElementById('resultbox').innerText="Enter a valid Weight";
    }


    else{
        let bmi=((inputWeight) / ((inputHeight * inputHeight)/10000)).toFixed(2);
        document.getElementById('resultbox').innerText=bmi;
    }
   
    
    
}

