const textChange = document.querySelector('#changing-text');
const variables = ['Creating websites', 'Front-End', 'Web development'];

let index = 0;
waitTimer(index);

function deleteText(index){
    let i = textChange.innerText.length;

    let clearText = setInterval(function(){
        if(i==0){
            clearInterval(clearText);
            newTextLine(index);
        }
        else{
            textChange.innerText = textChange.innerText.slice(0, -1);
            i--;
        }
    },100)
}



function newTextLine(index){
    let i = 0;
    let spaceIndex = 0;
    let newWord = setInterval(function(){
        if(index == variables.length){
            index = 0;
        }

        if(variables[index][i]==' '){
            spaceIndex++;
        }
        else if(spaceIndex>0){
            textChange.innerText = textChange.innerText + '=';
            textChange.innerText = textChange.innerText + variables[index][i];
            textChange.innerText = textChange.innerText.replace('=', ' ');
            spaceIndex = 0;
        }
        else{
            textChange.innerText = textChange.innerText + variables[index][i];
        }
        
        i++;
        if(i==variables[index].length){
            clearInterval(newWord);
            index++;
            waitTimer(index);
        }
    }, 150)
}


function waitTimer(index){
    let i = 0;
    let timer = setInterval(function(){
        if(i==8){
            clearInterval(timer);
            deleteText(index);
        }
        else if(i%2==1){
            textChange.innerText = textChange.innerText.replace(/.$/, '');
        }
        else{
            textChange.innerText = textChange.innerText + '_';
        }
        
        i++;
    }, 750)
}