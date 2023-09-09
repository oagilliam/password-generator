const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let optionOne = document.getElementById("password1");
let optionTwo = document.getElementById("password2");
let pwLength = document.getElementById("password-length");
let slider = document.getElementById("slider-range");
let newPassword1 = '';
let newPassword2 = '';

slider.addEventListener('input',valueChange);

function valueChange(){
    pwLength.innerHTML = this.value;
    let val = this.value;
    passwordFunction(val);
}
// This function displays two randomly generated strings that match the character length set by the user
function passwordFunction(lengthValue) {
    
    let charachters1 = ''
    for(i=0; i < lengthValue; i++){
        randomCharacterPW1 = characters[ (Math.floor( Math.random() * characters.length )) ];
        charachters1 += randomCharacterPW1;
        newPassword1 = charachters1
    }

    
    let charachters2 = ''
    for(i=0; i < lengthValue; i++){
        randomCharacterPW2 = characters[ (Math.floor( Math.random() * characters.length )) ];
        charachters2 += randomCharacterPW2;
        newPassword2 = charachters2
    }

} 

function generatePassword(){
    optionOne.innerText = newPassword1;
    optionTwo.innerText = newPassword2;

}


