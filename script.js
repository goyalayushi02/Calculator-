
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.innerText;

        if (value === "AC") {
            expression = "";
            screen.innerText = "";
        }

        else if (value === "⌫") {
            expression = expression.slice(0, -1);
            screen.innerText = expression;
        }

        else if (value === "=") {
            try {
                let result = eval(expression.replace(/×/g, "*").replace(/÷/g, "/"));
                screen.innerText = result;
                expression = String(result);
            }
            catch {
                screen.innerText = "Error";
                expression = "";
            }
        }
        

        else if (value === "%") {
            expression = String(Number(expression) / 100);
            screen.innerText = expression;
        }
        
        
else if (value === "%") {
    let result = Number(expression) / 100;

    screen.innerText = result;
    expression = String(result);
}

        else {
            expression += value;
            screen.innerText = expression;
        }

    });
});


