const input = document.querySelector('.input input');
const output = document.querySelectorAll('.output fieldset p');
const wordCount = document.querySelector('.wordCount span');
const reset = document.querySelector('.reset button');


input.addEventListener('input', (e)=>{
    let userInput = e.target.value.trim();
    wordCount.innerText = userInput.length;

    if(Number(wordCount.innerText) < 100){  
        input.hasAttribute('readOnly') && input.removeAttribute('readOnly');
        showOutput(userInput)
    } else {
        wordCount.innerText = 100;
        input.value = userInput.slice(0, 99);
        showOutput(input.value);
        input.hasAttribute('readOnly') || input.setAttribute('readOnly', true);
        reset.parentElement.classList.contains('hide') && reset.parentElement.classList.remove('hide');
    }
});

reset.addEventListener('click', ()=>{
    clearInput();
});


function clearInput(){
    reset.parentElement.classList.contains('hide') || reset.parentElement.classList.add('hide');
    input.hasAttribute('readOnly') && input.removeAttribute('readOnly');
    input.value = '';
    wordCount.innerText = 0;
    
    output.forEach((p) => {
        p.innerText = ''
    })
}


function showOutput(userInput){
    output[0].innerText = userInput.toLowerCase();
    output[1].innerText = userInput.toUpperCase();

    // camelCase
    let camel = userInput.split(" ");   
    if(camel[1]){   
        for(let i = 1; i < camel.length; i++){
            let str = camel[i];
            camel[i] = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
        }
    } else if(camel[1] === ''){
        return;
    }
    output[2].innerText = camel.join(''); 


    // PascalCase
    let pascal = userInput.split(' ');
    for(let i = 0; i < pascal.length; i++){
        let str = pascal[i];
        pascal[i] = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    }
    output[3].innerText = pascal.join('');

    
    // snake_case

    console.log("hi");
    
    let snake = userInput.split(" ").join("_");
    output[4].innerText = snake
    
    console.log("hi");

    // kebab-case
    let kebab = userInput.split(" ").join("-");
    output[5].innerText = kebab;


    // trim
    let trim = userInput.split(" ").join("");
    output[6].innerText = trim;
}