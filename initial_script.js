let p_svg = document.createElement('div');
    p_svg.className = 'paper';
    p_svg.innerHTML = choice.paper;

let s_svg = document.createElement('div');
    s_svg.className = 'scissors';
    s_svg.innerHTML = choice.scissors;

let r_svg = document.createElement('div');
    r_svg.className = 'rock';
    r_svg.innerHTML = choice.rock;
    
function appendSameChild(parent, child){
    let x = child.cloneNode(true);
    parent.appendChild(x);
}

function initialGraphic(){
    let optionList = document.createElement('div');
    optionList.className = "optionList";
    optionList.appendChild(p_svg);
    optionList.appendChild(s_svg);
    optionList.appendChild(r_svg);

    var element = [];

    let playerClass =  [document.getElementsByClassName('computer'), 
                        document.getElementsByClassName('player')]
    for (let i=0; i< playerClass.length; i++){                
        for (let j=0; j< playerClass[i].length; j++){
            element.push(playerClass[i][j]);
        }
    }
    for (let x of element){
        appendSameChild(x, optionList);
    }

    var element = document.getElementsByClassName('arm');
    for (let i of element){
        if (i.parentElement.parentElement.id == 'one'){
            i.style.background  = '#568EA3';
        } else {
            i.style.background  = '#c91319'
        }    
    }
}

function setFist(player, choice){
    let element = document.getElementById(player).firstElementChild.lastElementChild;
    element.innerHTML="";
    let playerChoice = ""
    switch (choice){
        case "0": 
            playerChoice = p_svg;
            break;
        case "1": 
            playerChoice = s_svg;
            break;
        default: 
            playerChoice = r_svg;
            break;        
    }

    let color =  "";
    if (player == 'one'){
        color = '#568EA3';
    } else {
        color  = '#c91319'
    }
    playerChoice.style.fill = color;
    appendSameChild(element, playerChoice)
}

function fillChoiceColor(){
    var element = document.getElementsByClassName('fist');
    let color =  "";
    for (let i of element){
        if (i.parentElement.parentElement.id == 'one'){
            color = '#568EA3';
        } else {
            color  = '#c91319'
        }
        i.firstChild.firstChild.style.fill = color;
    }
}