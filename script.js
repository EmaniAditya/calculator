let result = "";
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                result = eval(result);
                document.querySelector('#result').value = result;
            } catch {
                document.querySelector('#result').value = "Error";
                result = "";
            }
        } else if (e.target.innerHTML === 'AC') {
            result = "";
            document.querySelector('#result').value = result;
        } else {
            result += e.target.innerHTML;
            document.querySelector('#result').value = result;
        }
    });
});
