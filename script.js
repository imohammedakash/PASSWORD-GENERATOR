const lengthVAlue = document.querySelector('.length-indicator input'),
    renderingValue = document.querySelector('.length span'),
    generatebtn = document.querySelector('.Generate'),
    copyIcon= document.querySelector('.maaterial-copy'),
    displaybar = document.querySelector('.diplay-bar input'),
    options = document.querySelectorAll('.option input');
    const characters={
        LowerCase:'abcdefghijklmnopqrstuvwxyz',
        UpperCase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        symbols:'!@#$%^&*()"><?/}|-+][:',
        numbers:'1234567890'

    };

const updateslider = () => {
    let passwordlength=lengthVAlue.value;
    renderingValue.innerHTML = passwordlength ;

};
const generatepass = () => {
    let staticpassword="",
        randompassword="",
        passlength=lengthVAlue.value;
    options.forEach(btn => {
        if (btn.checked) {
            staticpassword+=characters[btn.id];
        }
     });
    for(let i=0;i<passlength;i++){
      randompassword+=staticpassword[Math.floor(Math.random()*staticpassword.length)];
    }
    displaybar.value=randompassword;
}
const Copypassword=()=>{
    navigator.clipboard.writeText(displaybar.value);
    copyIcon.innerTEXT="check";
   

}
copyIcon.addEventListener('click',Copypassword);
lengthVAlue.addEventListener('change', updateslider);
generatebtn.addEventListener('click', generatepass);
