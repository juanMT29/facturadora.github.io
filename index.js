let bill = document.querySelector('.inputs-section__bill-input');
let billNumber = parseInt(bill.value);

let people = document.querySelector('.inputs-section__peopel-input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__Tip-value');
let totalResult = document.querySelector('.results__total-value');


let buttons = document.querySelectorAll('.btns__boton');


let alert = document.querySelector('#alert');

let tipValue = 5;


buttons.forEach(element=> {
    element.addEventListener('click', Event=>{
        // cambiar estilo
        removeAvtive();  

        element.classList.add('btns__boton--selected');


        
        tipValue = parseInt(Event.target.innerText.slice(0,-1));


        calculateTip();
    });
});

function removeAvtive(){
        buttons.forEach(element =>{
            element.classList.remove('btns__boton--selected');
        });

};

//Acutalizacion del Bill 


bill.addEventListener('input', ()=>{
    billNumber = parseFloat(bill.value);
    calculateTip();
});


// actualizacion de custom 


let custom = document.querySelector('.btns__custom')

custom.addEventListener('click', ()=>{
    removeAvtive();
})

custom.addEventListener('input', ()=>{
    removeAvtive();

    tipValue = parseInt(custom.value);

    if(isNaN(tipValue)){

    }else{
       calculateTip(); 
    }

    
});


//Actualizacion de Personas 

people.addEventListener('input', ()=>{
    peopleNumber = parseFloat(people.value);

    if (peopleNumber == 0 || isNaN(peopleNumber)){
        alert.classList.add('error');
        
    }else{
        alert.classList.remove('error');
        calculateTip();
    }
    
});


// reset


let resetBtn = document.querySelector('.result-section__reset');
resetBtn.addEventListener('click', () =>{
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    custom.value = 'custom'
    calculateTip();
})


function calculateTip(){
        /* calculo de tip amount */
    tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);

        /* calculo del total*/
    totalResult.innerText = (((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);
    
}