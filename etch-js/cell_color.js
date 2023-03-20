

function cell_color() {
    const cell = document.querySelectorAll('.grid-item');
    const black_box = document.querySelector('.black');
    const red_box = document.querySelector('.red');
    const blue_box = document.querySelector('.blue');
        
    black_box.addEventListener('click', () => {
        cell.forEach(btn => {
            btn.addEventListener('mouseover', () => {
               btn.style = "background: black";
           });
       });
    });
    red_box.addEventListener('click', () => {
        cell.forEach(btn => {
            btn.addEventListener('mouseover', () => {
               btn.style = "background: red";
           });
       });
    });
    blue_box.addEventListener('click', () => {
        cell.forEach(btn => {
            btn.addEventListener('mouseover', () => {
               btn.style = "background: blue";
           });
       });
    });
}