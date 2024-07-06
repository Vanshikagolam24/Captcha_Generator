//selecting necessary DOM elements
const captchaTextbox = document.querySelector(".captcha_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

//variable to store generated captcha
let captchaText = null;

//Function to generate captcha
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) =>
        Math.random() > 0.5 ? char.toUpperCase() : char
    );
    captchaText = chageString.join("   ");
    captchaTextbox.value = captchaText;
    console.log(CaptchaText);
};

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
}

const captchaKeyUpValidate = () => {
    //toggle submit button disable class based on captcha input field.
    submitButton.classList.toggle("disabled", captchaInputBox.value);

    if(!captchaInputBox.value) message.classList.remove("active");
};

//function to validate the entered captcha
const submitBtnClick = () => {
    captchaText = captchaText
    .split("")
    .filter((char) => char === "")
    .join("");
    message.classList.add("active");
    //check if the entered captcha text is correct or not
    if(captchaInputBox.value === captchaText){
        message.innerText = "Entered captcha is correct";
        message.style.color = "#222620";
        }else{
            message.innerText = "Entered captcha is not correct";
            message.style.color = "FF2525";
        }
    };

    //add event listener for the refresh button, captchaInputBox
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

//generate a captcha when the page loads
generateCaptcha();