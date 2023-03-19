
function clicks() {
    const cell = document.querySelectorAll('.grid-item');
    cell.forEach(btn => {
         btn.addEventListener('mouseover', () => {
            btn.style = "background: black";
        }) 
    });
}