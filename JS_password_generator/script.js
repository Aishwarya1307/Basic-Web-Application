// For custom attribute

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("numbers");
const symbolsCheck = document.querySelector("symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allcheckbox = document.querySelector("input[type=checkbox]");
const symbols = "!@#$%^&*()_-+=~`/?>.<,':;}]{[|'";

let passwordLength = 10 ;
let password="";
let checkCount = 1;
handleSlider()


// set password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}


function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //  shadow
}

function getRndInteger(min,max) {
    //  Math.random returns 0 to 1 random number 
    return Math.floor(( Math.random() * (max-min) )+ min);
}

function generateRndNumber() {
    return getRndInteger(0,9);
}


function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97,123));
}


function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbols() {
    const randnum = getRndInteger(0, symbols.length);
    return symbols.charAt(randnum);
}

function calcStrength() {
    let hasLower = False;
    let hasUpper = False;
    let hasNum = False;
    let hasSym = False;

    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

    if (hasLower && hasLower && (hasNum || hasSym) && passwordLength >= 8 ) {
        setIndicator('#0f0');
    } else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym ) &&
        passwordLength >= 6 
    ){
        setIndicator("ff0")
    } else {
        setIndicator("f00")
    }
}


async function copyContent() {
    try{
           // Copy the text inside the passwordDisplay.value
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add("active");

    //  After 2 secomds copied text will be remove
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

function shufflepassword() {
    // fasher yates method
        //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange(){
    //  check the chcked count 
    checkCount = 0
    allcheckbox.forEach( (checkbox) =>{
        if (checkbox.checked) 
            checkCount++;
    });
    
    // special case
    if (passwordLength < checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
}


allcheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});


inputSlider.addEventListener('input' , (e) => {
    // for set the slider value in passwword length and slider value 
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click',() => {
     //check value is present in password box
    if (passwordDisplay.value) ;
        copyContent();
})


generateBtn.addEventListener('click' , () =>{
// None of checked box selected
    if (checkCount == 0 ) 
        return ;

    if (passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    };

    // lets start the journy of new password
    // remove old password
    password="";

    // if (uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }
    //  if (lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }
    //  if (symbolsCheck.checked) {
    //     password += generateSymbols();
    // }
    //  if (numbersCheck.checked) {
    //     password += generateRndNumber();
    // }

    let funcArr = [];
    if (uppercaseCheck.checked) {
        funcArr.push(generateUpperCase);
        };
    if (lowercaseCheck.checked) {
        funcArr.push(generateLowerCase);
        };
    if (symbolsCheck.checked) {
        funcArr.push(generateSymbols);
        };
    if (numbersCheck.checked) {
        funcArr.push(generateRndNumber);
        };

        // for cumpulsory
    for(let i=0; i < funcArr.length; i++){
        password += funcArr[i]();
    };
    //  for remaining

    for (let i =0 ;  i < passwordLength-funcArr.length; i++){
        let randint = getRndInteger(0,funcArr.length);
        password += funcArr[randint]();
    }

    // password shuffele
    password = shufflepassword(Array.from(password));

    passwordDisplay.value =  password;

    //  strength calculation 
    calcStrength();
}
)


