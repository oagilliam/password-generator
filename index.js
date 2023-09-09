const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const charactersWithoutNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const letterCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const charactersWithoutSpecialCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let optionOne = document.getElementById("password1");
let optionTwo = document.getElementById("password2");
let pwLength = document.getElementById("password-length");
let slider = document.getElementById("slider-range");
let specialChar = document.getElementById("special-characters-checkbox");
let numberChar = document.getElementById("numbers-checkbox");


// This function displays the value picked by the slider
slider.addEventListener('input',valueChange);

function valueChange(){
    pwLength.innerHTML = this.value;
    let val = this.value;
    passwordFunction(val);
}

newPassword1 = '';
newPassword2 = '';

// This function creates two strings with randomly generated characters
function passwordFunction(lengthValue) {
    newPassword1 = '';
    newPassword2 = '';
    for(i=0; i < lengthValue; i++){
        if(specialChar.checked == true && numberChar.checked == true){
            randomCharacterPW1 = characters[ (Math.floor( Math.random() * characters.length )) ];
            randomCharacterPW2 = characters[ (Math.floor( Math.random() * characters.length )) ];
            newPassword1 += randomCharacterPW1;
            newPassword2 += randomCharacterPW2;
        } else if (specialChar.checked == true && numberChar.checked == false){
            randomCharacterPW1 = charactersWithoutNumbers[ (Math.floor( Math.random() * charactersWithoutNumbers.length )) ];
            randomCharacterPW2 = charactersWithoutNumbers[ (Math.floor( Math.random() * charactersWithoutNumbers.length )) ];
            newPassword1 += randomCharacterPW1;
            newPassword2 += randomCharacterPW2;
        } else if (specialChar.checked == false && numberChar.checked == true){
            randomCharacterPW1 = charactersWithoutSpecialCharacters[ (Math.floor( Math.random() * charactersWithoutSpecialCharacters.length )) ];
            randomCharacterPW2 = charactersWithoutSpecialCharacters[ (Math.floor( Math.random() * charactersWithoutSpecialCharacters.length )) ];
            newPassword1 += randomCharacterPW1;
            newPassword2 += randomCharacterPW2;
        } else{
            randomCharacterPW1 = letterCharacters[ (Math.floor( Math.random() * letterCharacters.length )) ];
            randomCharacterPW2 = letterCharacters[ (Math.floor( Math.random() * letterCharacters.length )) ];
            newPassword1 += randomCharacterPW1;
            newPassword2 += randomCharacterPW2;
        }
    }

} 

// This function displays two randomly generated strings that match the character length set by the user
function generatePassword(){
    optionOne.innerText = newPassword1;
    optionTwo.innerText = newPassword2;
    
}