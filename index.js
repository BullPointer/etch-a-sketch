//Get input from user

function getInput() {
    makeRows(16, 16);
    const input_btn = document.querySelector('.input-btn');
    input_btn.addEventListener('click', () => {
        const input = Number(prompt("Give an input from 1-100"));

        if (typeof(input) == 'number' && input <= 100) {
            makeRows(Number(input), Number(input));
        } else {
            alert("Input must be number and not greater than 100");
            makeRows(16, 16);
        }
    })
}

getInput();