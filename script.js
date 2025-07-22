const display = document.querySelector(".display");
let nowInput = "";
let beforInput = "";
let operator = null;
const buttons = document.querySelector(".buttons");

const excute = (num1, num2, operator) => {
    switch(operator) {
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        case "-":
            return num1 - num2;
        case "+":
            return num1 + num2;
    }
}

const excute2 = (event) => {
    const value = event.target.getAttribute("data-value");
    let numberInput = parseFloat(nowInput);

    switch(value) {
        case "AC":
            nowInput = "";
            beforInput = "";
            operator = null;
            break;
        case "+/-":
            nowInput = (-1 * numberInput).toString();
            break;
        case "%":
            nowInput = (numberInput / 100).toString();
            break;
        case "/":
        case "*":
        case "-":
        case "+":
            if(nowInput !== ""){
                operator = value;
                beforInput = nowInput;
                nowInput = "";
            }
            break;
        case "=":
            if(beforInput !== "" && nowInput !== ""){
                let numPerviusInput = parseFloat(beforInput);
                nowInput = excute(numPerviusInput, numberInput, operator).toFixed(4);
                operator = null;
                beforInput = "";
            }
            break;
        default:
            nowInput += value;
            break;
    }
    display.textContent = nowInput || "0";
};

buttons.addEventListener("click", function(event) {
    if(event.target.tagName !== "BUTTON") return false;
    excute2(event);
});
