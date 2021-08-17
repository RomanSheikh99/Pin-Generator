document.getElementById('generate-btn').addEventListener('click',function(){
    getPin();
})

function getPin(){
    const pin = Math.round(Math.random()*9999+1000);
    let generatePin = pin + '';
    if(generatePin.length == 4){
        document.getElementById('pin').value = pin;
    }
    else{
        getPin()
    }
    
}

document.getElementById('calc').addEventListener('click', function(event){
    let calcNumber = event.target.innerText + '';
    let calcInput = document.getElementById('calc-number');
    if(isNaN(calcNumber)){
        if(calcNumber == 'c' || calcNumber == 'C'){
            calcInput.value = '';
        }
    }
    else{
        let result = calcInput.value + calcNumber;
        calcInput.value = result;
    }
})


document.getElementById('submit-btn').addEventListener('click', function(){
    const pin = document.getElementById('pin').value;
    const number = document.getElementById('calc-number').value;
    if(pin == number){
        document.getElementById('error-msg').style.display = 'none';
        document.getElementById('sucses-msg').style.display = 'block';
    }
    else{
        document.getElementById('sucses-msg').style.display = 'none';
        document.getElementById('error-msg').style.display = 'block';
    }
})