const input = document.querySelector('.input input');
const output = document.querySelectorAll('.output p');

const wordCount = document.querySelector('.wordCount span');


input.addEventListener('input', (e)=>{
    let userInput = e.target.value;
    wordCount.innerText = userInput.length;
    if(Number(wordCount.innerText) < 100){

        console.log("has attrib: ", input.hasAttribute('readOnly'));
        console.log("remove attrib: ", input.removeAttribute('readOnly'));
        
        input.hasAttribute('readOnly') && input.removeAttribute('readOnly');

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
        let snake = userInput.split(" ").join("_");
        output[4].innerText = snake
    
    
        // kebab-case
        let kebab = userInput.split(" ").join("-");
        output[5].innerText = kebab;
    
    
        // trim
        let trim = userInput.split(" ").join("");
        output[6].innerText = trim;
    } else {
        input.setAttribute('readOnly', true);
    }
    

});
